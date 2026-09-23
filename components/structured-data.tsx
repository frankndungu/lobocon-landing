import { CONTACT } from "@/components/contact/contact";

export default function StructuredData() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Lobocon",
    alternateName: "Lobocon Construction OS",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Construction Project Management Software",
    operatingSystem: "Web, iOS, Android",
    url: "https://lobocon.co",
    sameAs: [
      "https://twitter.com/lobocon",
      "https://linkedin.com/company/lobocon",
    ],
    offers: {
      "@type": "Offer",
      price: "300000",
      priceCurrency: "KES",
      description:
        "90-day pilot on one live project, KES 300,000 exclusive of VAT, credited against the first year on conversion.",
      url: "https://lobocon.co/pilot",
      seller: { "@type": "Organization", name: "Lobocon" },
    },
    description:
      "Lobocon is the Construction OS for property developers and infrastructure firms across Africa. Track BOQ, planned vs actual, cash flow, earned value, scheduling, and labor in one platform. Know if your project is profitable before it is too late.",
    featureList: [
      "BOQ Management",
      "Planned vs Actual Tracking",
      "Cash Flow Forecasting",
      "Earned Value Management",
      "Construction Scheduling",
      "Labor Tracking",
      "Collaboration and Role-based Access",
      "Financial Reporting",
    ],
    screenshot: "https://lobocon.co/og-image.png",
    softwareVersion: "1.0",
    releaseNotes:
      "Initial release targeting property developers and infrastructure firms in Kenya and Africa.",
    inLanguage: "en",
    isAccessibleForFree: false,
    creator: {
      "@type": "Organization",
      name: "Lobocon",
      url: "https://lobocon.co",
      logo: "https://lobocon.co/icon.svg",
      contactPoint: {
        "@type": "ContactPoint",
        email: CONTACT.email,
        telephone: CONTACT.phoneE164,
        contactType: "Sales",
        areaServed: "Africa",
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
    },
    audience: {
      "@type": "Audience",
      audienceType:
        "Property Developers, Infrastructure Firms, Engineering Firms",
      geographicArea: {
        "@type": "Place",
        name: "Africa",
      },
    },
    potentialAction: {
      "@type": "ViewAction",
      target: "https://app.lobocon.co",
      name: "Open Lobocon",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Lobocon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lobocon is a construction management platform built for property developers and infrastructure firms across Africa. It brings BOQ management, planned vs actual tracking, cash flow forecasting, scheduling, earned value management, and labor tracking into one platform.",
        },
      },
      {
        "@type": "Question",
        name: "What does Lobocon do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lobocon helps construction teams track project profitability in real time. You can manage your BOQ, monitor planned vs actual progress, forecast cash flow, track labor, and run earned value analysis — all from one platform.",
        },
      },
      {
        "@type": "Question",
        name: "Who is Lobocon built for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lobocon is built for property developers, infrastructure firms, and engineering firms running large or multiple concurrent construction projects across Kenya and Africa.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Lobocon cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lobocon starts with a 90-day pilot on one live project for KES 300,000, exclusive of VAT, credited against the first year if you continue. After the pilot it is priced per project with unlimited users, from KES 86,500 a month billed annually.",
        },
      },
      {
        "@type": "Question",
        name: "Is Lobocon an alternative to Procore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Lobocon is an affordable Procore alternative built specifically for the African construction market. It covers BOQ management, scheduling, cash flow, earned value, and labor tracking at a fraction of the cost.",
        },
      },
      {
        "@type": "Question",
        name: "Does Lobocon work with MS Project and Excel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Lobocon supports importing schedules from MS Project and BOQ data from Excel, so you can migrate your existing project data in minutes.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Lobocon available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lobocon is currently available in Kenya and expanding across Africa. It is a web-based platform accessible from any device.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
