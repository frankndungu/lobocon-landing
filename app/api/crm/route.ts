import { NextRequest, NextResponse } from "next/server";

const TWENTY_API_KEY = process.env.TWENTY_API_KEY!;
const TWENTY_API_URL = process.env.TWENTY_API_URL!;
const BACKEND_URL = process.env.BACKEND_URL!;

export async function POST(req: NextRequest) {
  const data = await req.json();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TWENTY_API_KEY}`,
  };

  try {
    // 1. Save to Lobocon backend (lead_submissions table)
    await fetch(`${BACKEND_URL}/api/crm/lead`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // 2. Create company in Twenty CRM
    const companyRes = await fetch(`${TWENTY_API_URL}/rest/companies`, {
      method: "POST",
      headers,
      body: JSON.stringify({ name: data.companyName }),
    });
    const companyJson = await companyRes.json();
    const companyId =
      companyJson?.data?.createCompany?.id ?? companyJson?.id ?? null;

    // 3. Create person in Twenty CRM
    const personBody: Record<string, unknown> = {
      name: { firstName: data.firstName, lastName: data.lastName },
      emails: { primaryEmail: data.email },
      phones: { primaryPhoneNumber: data.phone },
    };
    if (companyId) personBody.companyId = companyId;

    const personRes = await fetch(`${TWENTY_API_URL}/rest/people`, {
      method: "POST",
      headers,
      body: JSON.stringify(personBody),
    });
    const personJson = await personRes.json();
    const personId =
      personJson?.data?.createPerson?.id ?? personJson?.id ?? null;

    // 4. Create deal in Twenty CRM
    const dealBody: Record<string, unknown> = {
      name: `${data.companyName} — Session Request`,
      stage: "NEW",
    };
    if (companyId) dealBody.companyId = companyId;
    if (personId) dealBody.pointOfContactId = personId;

    await fetch(`${TWENTY_API_URL}/rest/opportunities`, {
      method: "POST",
      headers,
      body: JSON.stringify(dealBody),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("CRM error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
