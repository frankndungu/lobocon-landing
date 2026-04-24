import StructuredData from "@/components/structured-data";
import Navbar from "@/components/landing/navbar";

export default function LoboconLanding() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-100">
        <Navbar />
      </div>
    </>
  );
}
