import Navbar from "@/components/landing/navbar";
import AboutHero from "@/components/landing/about/about-hero";
import ProblemSolutionMockup from "@/components/landing/about/problem-solution-mockup";
import LaborTrackingMockup from "@/components/landing/about/labor-tracking-mockup";
import MissionVision from "@/components/landing/about/mission-vision";
import JourneyTimeline from "@/components/landing/about/journey-timeline";
import TeamSection from "@/components/landing/about/team-section";
import EarlyTraction from "@/components/landing/about/early-traction";
import AboutCTA from "@/components/landing/about/about-cta";

export default function AboutPage() {
  return (
    <main>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-100">
        <Navbar />
        <AboutHero />
        <ProblemSolutionMockup />
        <LaborTrackingMockup />
        <MissionVision />
        <JourneyTimeline />
        <EarlyTraction />
        <TeamSection />
        <AboutCTA />
      </div>
    </main>
  );
}
