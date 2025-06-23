import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { LeadershipSection } from "@/components/leadership-section"
import { UnityFirstPreview } from "@/components/unity-first-preview"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <LeadershipSection />
        <UnityFirstPreview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
