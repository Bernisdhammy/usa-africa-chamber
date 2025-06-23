import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-primary text-white">Get in Touch</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            We're Here to <span className="gradient-text">Help</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you're looking to join our community, partner with us, or learn more about our services, we'd love
            to hear from you. Let's start a conversation.
          </p>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Phone className="h-8 w-8 text-primary mb-3" />
              <div className="text-sm font-medium">Call Us</div>
              <div className="text-sm text-muted-foreground">0708-473-6983</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Mail className="h-8 w-8 text-secondary mb-3" />
              <div className="text-sm font-medium">Email Us</div>
              <div className="text-sm text-muted-foreground">info@usaafricachamber.org</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <MapPin className="h-8 w-8 text-accent mb-3" />
              <div className="text-sm font-medium">Visit Us</div>
              <div className="text-sm text-muted-foreground">Chicago, IL</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Clock className="h-8 w-8 text-primary mb-3" />
              <div className="text-sm font-medium">Office Hours</div>
              <div className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
