import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, DollarSign, GraduationCap, Users, Building2, TrendingUp } from "lucide-react"

const services = [
  {
    category: "Employment",
    icon: Briefcase,
    programs: ["Workforce Development", "Job Training", "Career Placement", "Skills Assessment"],
    description: "Comprehensive employment services to connect talent with opportunities.",
    color: "text-primary",
  },
  {
    category: "Financial",
    icon: DollarSign,
    programs: ["BMO Classes", "Financial Coaching", "Credit Building", "Investment Planning"],
    description: "Financial literacy and wealth-building programs for sustainable growth.",
    color: "text-secondary",
  },
  {
    category: "Business Development",
    icon: Building2,
    programs: ["Startup Incubation", "Mentorship", "Market Access", "Trade Facilitation"],
    description: "End-to-end support for entrepreneurs and growing businesses.",
    color: "text-accent",
  },
  {
    category: "Education",
    icon: GraduationCap,
    programs: ["Leadership Training", "Digital Skills", "Professional Certification", "Youth Programs"],
    description: "Educational initiatives that build capacity and leadership.",
    color: "text-primary",
  },
  {
    category: "Community",
    icon: Users,
    programs: ["Networking Events", "Cultural Exchange", "Advocacy", "Unity Building"],
    description: "Strengthening bonds within the African diaspora community.",
    color: "text-secondary",
  },
  {
    category: "Growth",
    icon: TrendingUp,
    programs: ["Market Research", "Strategic Planning", "Partnership Development", "Scaling Support"],
    description: "Strategic growth services for established organizations.",
    color: "text-accent",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Comprehensive <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From workforce development to business incubation, we provide the tools and resources needed for individual
            and community success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.category} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                  <CardTitle className="text-xl">{service.category}</CardTitle>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.programs.map((program) => (
                    <div key={program} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${service.color.replace("text-", "bg-")}`} />
                      <span className="text-sm text-muted-foreground">{program}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
