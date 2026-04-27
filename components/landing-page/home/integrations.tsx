const LOGOS = [
  {
    src: "https://res.cloudinary.com/kwishi/image/upload/v1776766070/Microsoft-Project-removebg-preview_nduodz.png",
    alt: "Microsoft Project",
    label: "MS Project",
  },
  {
    src: "https://res.cloudinary.com/kwishi/image/upload/v1776766071/ms-excel-removebg-preview_gplrbu.png",
    alt: "Microsoft Excel",
    label: "MS Excel",
  },
  {
    src: "https://res.cloudinary.com/kwishi/image/upload/v1776766070/google-sheets-removebg-preview_xcswhy.png",
    alt: "Google Sheets",
    label: "Google Sheets",
  },
  {
    src: "https://res.cloudinary.com/kwishi/image/upload/v1776766071/xero-removebg-preview_mujp0w.png",
    alt: "Xero",
    label: null,
  },
  {
    src: "https://res.cloudinary.com/kwishi/image/upload/v1776766071/quickbooks-removebg-preview_ywxqev.png",
    alt: "QuickBooks",
    label: "QuickBooks",
  },
  {
    src: "https://res.cloudinary.com/kwishi/image/upload/v1776766071/sage-removebg-preview_rzylx1.png",
    alt: "Sage",
    label: null,
  },
];

export default function Integrations() {
  return (
    <div className="px-6 lg:px-14 py-4 mt-8">
      <div
        className="rounded-2xl overflow-hidden"
        style={{ background: "#0f172a" }}
      >
        <div className="pt-16 pb-10 lg:pt-20 lg:pb-12">
          <div className="text-center px-6 mb-14">
            <p className="text-[11px] font-bold tracking-[0.2em] text-white uppercase mb-5">
              Integrations
            </p>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-black text-white leading-tight tracking-[-0.02em] mb-5">
              Lobocon works with the tools
              <br />
              your team already uses.
            </h2>
            <p className="text-[15px] text-white leading-relaxed max-w-md mx-auto">
              Import your MS Project schedules, sync your Excel BOQs, and
              connect your accounting software without re-entering data.
            </p>
          </div>

          <div className="ticker-wrap py-2">
            <div className="ticker-track">
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <div
                  key={i}
                  className="logo-card"
                  style={{
                    flexDirection: "column",
                    gap: "6px",
                    padding: "14px 20px",
                  }}
                >
                  <img src={logo.src} alt={logo.alt} />
                  {logo.label && (
                    <span
                      style={{
                        fontSize: "9px",
                        fontWeight: 600,
                        color: "#ffff",
                        letterSpacing: "0.04em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {logo.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
