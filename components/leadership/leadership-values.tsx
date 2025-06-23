import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Target, Users, Globe, Lightbulb, Handshake } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Community First",
    description: "We prioritize the needs and growth of our community members above all else.",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do, delivering exceptional results.",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of working together to achieve greater impact.",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "We think globally while acting locally, connecting communities across continents.",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new ideas and creative solutions to address evolving challenges.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical principles in all our interactions.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
  },
]

export function LeadershipValues() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Core Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide our leadership and drive our mission to empower African diaspora communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value) => (
            <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div
                  className={`w-16 h-16 mx-auto rounded-full ${value.bgColor} flex items-center justify-center mb-4`}
                >
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Philosophy */}
        <Card className="max-w-4xl mx-auto mt-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Our Leadership Philosophy</CardTitle>
            <CardDescription className="text-lg">
              Servant leadership that empowers others to achieve their full potential
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              "True leadership is not about being in charge. It's about taking care of those in your charge. Our
              leadership team is committed to serving our community, creating opportunities, and building bridges that
              connect the African diaspora to global success."
            </p>
            <div className="text-sm text-muted-foreground">- Gladys Loggin-Folormaio, CEO & Founder</div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
