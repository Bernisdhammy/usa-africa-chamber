import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutHistory } from "@/components/about/about-history"
import { AboutValues } from "@/components/about/about-values"
import { AboutTeam } from "@/components/about/about-team"
import { AboutImpact } from "@/components/about/about-impact"
import { AboutCTA } from "@/components/about/about-cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// About Us page component - showcases organization's story, mission, and impact
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header navigation component */}
      <Header />

      {/* Main content area with enhanced spacing */}
      <main className="space-y-0">
        {/* Hero section introducing the organization */}
        <AboutHero />

        {/* Mission, vision, and values section */}
        <AboutMission />

        {/* Historical timeline and milestones */}
        <AboutHistory />

        {/* Core values and principles */}
        <AboutValues />

        {/* Team showcase section */}
        <AboutTeam />

        {/* Impact metrics and achievements */}
        <AboutImpact />

        {/* Call-to-action for engagement */}
        <AboutCTA />
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  )
}
