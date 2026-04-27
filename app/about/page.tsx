import Navbar from "@/components/landing-page/home/navbar";
import AboutHero from "@/components/landing-page/about/about-hero";
import ProblemSolutionMockup from "@/components/landing-page/about/problem-solution-mockup";
import LaborTrackingMockup from "@/components/landing-page/about/labor-tracking-mockup";
import MissionVision from "@/components/landing-page/about/mission-vision";
import JourneyTimeline from "@/components/landing-page/about/journey-timeline";
import TeamSection from "@/components/landing-page/about/team-section";
import EarlyTraction from "@/components/landing-page/about/early-traction";
import AboutCTA from "@/components/landing-page/about/about-cta";

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
