import { NextRequest, NextResponse } from "next/server";

const TWENTY_API_KEY = process.env.TWENTY_API_KEY!;
const TWENTY_API_URL = process.env.TWENTY_API_URL!;

export async function POST(req: NextRequest) {
  const data = await req.json();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TWENTY_API_KEY}`,
  };

  try {
    // 1. Create company
    const companyBody: Record<string, unknown> = {
      name: data.companyName,
    };

    if (data.website) {
      // Strip protocol and any markdown link formatting, keep plain domain only
      const cleanDomain = data.website
        .replace(/^https?:\/\//, "")
        .replace(/\[.*?\]\(.*?\)/, "")
        .split("/")[0]
        .trim();
      if (cleanDomain) companyBody.domainName = cleanDomain;
    }

    const companyRes = await fetch(`${TWENTY_API_URL}/rest/companies`, {
      method: "POST",
      headers,
      body: JSON.stringify(companyBody),
    });
    const companyJson = await companyRes.json();
    console.log("Company response:", JSON.stringify(companyJson));
    const companyId =
      companyJson?.data?.createCompany?.id ?? companyJson?.id ?? null;

    // 2. Create person
    const personRes = await fetch(`${TWENTY_API_URL}/rest/people`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        name: { firstName: data.firstName, lastName: data.lastName },
        emails: { primaryEmail: data.email },
        phones: { primaryPhoneNumber: data.phone },
        ...(companyId ? { companyId } : {}),
      }),
    });
    const personJson = await personRes.json();
    console.log("Person response:", JSON.stringify(personJson));
    const personId =
      personJson?.data?.createPerson?.id ?? personJson?.id ?? null;

    // 3. Create deal — stage must match Twenty's internal key exactly
    const dealRes = await fetch(`${TWENTY_API_URL}/rest/opportunities`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        name: `${data.companyName} — Session Request`,
        stage: "NEW",
        ...(companyId ? { companyId } : {}),
        ...(personId ? { pointOfContactId: personId } : {}),
      }),
    });
    const dealJson = await dealRes.json();
    console.log("Deal response:", JSON.stringify(dealJson));
    const dealId =
      dealJson?.data?.createOpportunity?.id ?? dealJson?.id ?? null;

    // 4. Attach note with source + challenge
    if (dealId) {
      const noteRes = await fetch(`${TWENTY_API_URL}/rest/notes`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          title: "Session Request Details",
          body: `Company size: ${data.companySize}\nHow they heard about us: ${data.source}\nBiggest challenge: ${data.challenge}`,
        }),
      });
      console.log("Note response:", JSON.stringify(await noteRes.json()));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("CRM error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
