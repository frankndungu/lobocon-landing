import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lobocon.co",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
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
      priority: 0.7,
    },
    // Feature pages — add each one as you ship it
    {
      url: "https://lobocon.co/boq",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Uncomment as you publish each page:
    // { url: "https://lobocon.co/cash-flow", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // { url: "https://lobocon.co/earned-value", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // { url: "https://lobocon.co/scheduling", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // { url: "https://lobocon.co/planned-vs-actual", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // { url: "https://lobocon.co/labor", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },

    // Blog posts — add each one as you publish it
    // { url: "https://lobocon.co/blog/boq-excel-to-lobocon", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    // { url: "https://lobocon.co/blog/earned-value-management-construction", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    // { url: "https://lobocon.co/blog/variation-orders-margin", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    // { url: "https://lobocon.co/blog/cash-flow-forecasting-construction", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];
}
