import { EventsHero } from "@/components/events/events-hero"
import { PreviousEvents } from "@/components/events/previous-events"
import { ComingSoonPrograms } from "@/components/events/coming-soon-programs"
import { EventsTimeline } from "@/components/events/events-timeline"
import { EventsCTA } from "@/components/events/events-cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Previous Events page showcasing organization's event history
export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header navigation component */}
      <Header />

      {/* Main content area */}
      <main className="space-y-0">
        {/* Hero section for events page */}
        <EventsHero />

        {/* Previous events showcase */}
        <PreviousEvents />

        {/* Coming soon programs */}
        <ComingSoonPrograms />

        {/* Events timeline */}
        <EventsTimeline />

        {/* Call-to-action section */}
        <EventsCTA />
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  )
}
