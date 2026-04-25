import StructuredData from "@/components/structured-data";
import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";

export default function LoboconLanding() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-100">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
