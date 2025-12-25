import StructuredData from "@/components/structured-data";
import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import ProblemStatement from "@/components/landing/problem-statement";
import SolutionOverview from "@/components/landing/solution-overview";
import ProductHighlights from "@/components/landing/product-highlights";
import HowItWorks from "@/components/landing/how-it-works";
import CashFlowDeepDive from "@/components/landing/cash-flow-section";
import FinalCta from "@/components/landing/cta-section";
import Footer from "@/components/landing/footer";

export default function LoboconLanding() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-100">
        <Navbar />
        <Hero />
        <ProblemStatement />
        <SolutionOverview />
        <ProductHighlights />
        <HowItWorks />
        <CashFlowDeepDive />
        <FinalCta />
        <Footer />
      </div>
    </>
  );
}
