import { UnityFeastHero } from "@/components/unity-feast/hero"
import { ProgramSchedule } from "@/components/unity-feast/program-schedule"
import { SpeakersSection } from "@/components/unity-feast/speakers-section"
import { TicketPricing } from "@/components/unity-feast/ticket-pricing"
import { SponsorsSection } from "@/components/unity-feast/sponsors-section"
import { VenueInfo } from "@/components/unity-feast/venue-info"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Unity Feast 2024 | USA Africa Chamber of Commerce",
  description:
    "Join the premier gathering of African diaspora leaders, entrepreneurs, and changemakers at Catholic University, Washington DC.",
}

export default function UnityFeastPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="about">
          <UnityFeastHero />
        </section>
        <ProgramSchedule />
        <SpeakersSection />
        <section id="tickets">
          <TicketPricing />
        </section>
        <SponsorsSection />
        <VenueInfo />
      </main>
      <Footer />
    </div>
  )
}
