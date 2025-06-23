import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"
import { ContactFAQ } from "@/components/contact/contact-faq"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact Us | USA Africa Chamber of Commerce",
  description:
    "Get in touch with the USA Africa Chamber of Commerce. We're here to help you connect, grow, and succeed.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <ContactMap />
        <ContactFAQ />
      </main>
      <Footer />
    </div>
  )
}
