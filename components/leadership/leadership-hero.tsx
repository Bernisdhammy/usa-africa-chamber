import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Users, Globe, TrendingUp } from "lucide-react"

export function LeadershipHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-accent text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">Visionary Leadership</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Leading with <span className="text-secondary">Purpose</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90">
            Meet the dedicated leaders driving positive change and empowering African diaspora communities across the
            globe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-5 w-5 text-secondary" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-5 w-5 text-secondary" />
              <span>500+ Lives Impacted</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Globe className="h-5 w-5 text-secondary" />
              <span>Global Network</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="h-5 w-5 text-secondary" />
              <span>120+ Startups</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90">
              Meet Our Team
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Join Our Mission
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
