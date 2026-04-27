import StructuredData from "@/components/structured-data";
import Navbar from "@/components/landing-page/home/navbar";
import Hero from "@/components/landing-page/home/hero";
import SocialProof from "@/components/landing-page/home/social-proof";
import Product from "@/components/landing-page/home/product";

export default function LoboconLanding() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-100">
        <Navbar />
        <Hero />
        <SocialProof />
        <Product />
      </div>
    </>
  );
}
