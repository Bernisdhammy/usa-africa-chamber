import { ServicesHero } from "@/components/services/services-hero"
import { ServiceCategories } from "@/components/services/service-categories"
import { ServiceDetails } from "@/components/services/service-details"
import { ServiceTestimonials } from "@/components/services/service-testimonials"
import { ServiceCTA } from "@/components/services/service-cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Services | USA Africa Chamber of Commerce",
  description:
    "Comprehensive services including employment, financial, business development, education, community building, and strategic growth programs.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesHero />
        <ServiceCategories />
        <ServiceDetails />
        <ServiceTestimonials />
        <ServiceCTA />
      </main>
      <Footer />
    </div>
  )
}
