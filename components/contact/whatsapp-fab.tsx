import { CONTACT } from "@/components/contact/contact";

// Instagram traffic arrives on phones. The nav pill is hidden below lg,
// so this is the mobile route to a conversation.
export default function WhatsAppFab() {
  return (
    <a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="lg:hidden fixed bottom-5 right-5 z-[150] flex h-14 w-14 items-center justify-center rounded-full shadow-lg shadow-slate-900/20"
      style={{ background: "#25D366" }}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L4 21l1.6-4.4A8.5 8.5 0 1 1 21 12z" />
      </svg>
    </a>
  );
}
