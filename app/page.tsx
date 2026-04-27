import StructuredData from "@/components/structured-data";
import Navbar from "@/components/landing-page/home/navbar";
import Hero from "@/components/landing-page/home/hero";
import SocialProof from "@/components/landing-page/home/social-proof";
import Product from "@/components/landing-page/home/product";
import IsoShapes from "@/components/landing-page/home/iso-shapes";
import FirstCTA from "@/components/landing-page/home/first-cta";
import Integrations from "@/components/landing-page/home/integrations";
import Insights from "@/components/landing-page/home/insights";
import FinalCTA from "@/components/landing-page/home/final-cta";
import Footer from "@/components/landing-page/home/footer";

export default function LoboconLanding() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-100">
        <Navbar />
        <Hero />
        <SocialProof />
        <Product />
        <IsoShapes />
        <FirstCTA />
        <Integrations />
        <Insights />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
}
