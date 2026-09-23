// One place for every contact detail on the marketing site.
// Change it here and the nav, hero, footer, pages and schema all follow.
export const CONTACT = {
  email: "ndungufrank01@gmail.com",
  phoneDisplay: "+254 746 884 254",
  phoneE164: "+254746884254",
  whatsappUrl:
    "https://wa.me/254746884254?text=" +
    encodeURIComponent(
      "Hi Lobocon, I run [number] live projects and want to talk about the pilot.",
    ),
} as const;
