import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Tier 1: Homepage — highest authority, crawled weekly ──────────────────
    {
      url: "https://lobocon.co",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── Tier 2: Core feature pages — the URLs Google should show as sitelinks ─
    // These sit directly under the homepage in authority and are updated often
    // because live app previews reflect real product changes.
    {
      url: "https://lobocon.co/boq",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: "https://lobocon.co/earned-value",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: "https://lobocon.co/cash-flow",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    // Add these as you ship each page — same tier as the three above:
    // { url: "https://lobocon.co/scheduling", lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    // { url: "https://lobocon.co/planned-vs-actual", lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    // { url: "https://lobocon.co/labor", lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },

    // ── Tier 3: Company pages — important but stable ──────────────────────────
    {
      url: "https://lobocon.co/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://lobocon.co/session",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── Tier 4: Blog posts — long-tail SEO, evergreen ────────────────────────
    // Lower priority than features because they support the features,
    // not the other way around. Add each as you publish.
    // { url: "https://lobocon.co/blog/boq-excel-to-lobocon", lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    // { url: "https://lobocon.co/blog/earned-value-management-construction", lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    // { url: "https://lobocon.co/blog/variation-orders-margin", lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    // { url: "https://lobocon.co/blog/cash-flow-forecasting-construction", lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];
}
