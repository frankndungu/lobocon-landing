export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Lobocon",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KES",
      priceValidUntil: "2025-12-31",
      description: "2 months free trial",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "24",
    },
    description:
      "Construction project management software for managing budgets, schedules, and teams to deliver profitable projects.",
    featureList: [
      "Project Scheduling",
      "Budget Management",
      "Cash Flow Tracking",
      "Labor Management",
      "Resource Allocation",
      "Financial Reporting",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
