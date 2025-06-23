import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react"

export function UnityFirstHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-accent text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">March 15-16, 2024</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Unity First <span className="text-secondary">Summit</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90">
            Empowering African Diaspora Communities Through Unity, Innovation, and Collaboration
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5 text-secondary" />
              <span>2 Days</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="h-5 w-5 text-secondary" />
              <span>Washington DC</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-5 w-5 text-secondary" />
              <span>500+ Attendees</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-5 w-5 text-secondary" />
              <span>20+ Sessions</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90">
              Register Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
