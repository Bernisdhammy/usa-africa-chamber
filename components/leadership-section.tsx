import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const leadership = [
  {
    name: "Gladys Loggin-Folormaio",
    title: "CEO & Founder",
    roles: ["CEO", "Real Estate Broker", "Community Leader"],
    awards: [
      "2005 Businesswoman of the Year (President Bush)",
      "Golden Rule Ambassador",
      "Founded 120+ startups",
      "Workforce Development Pioneer",
    ],
    bio: "A visionary leader with over two decades of experience in community development, business incubation, and workforce training. Gladys has dedicated her career to empowering African diaspora communities through strategic partnerships and innovative programs.",
    image: "/placeholder.svg?height=300&width=300",
    email: "gladys@usaafricachamber.org",
    linkedin: "#",
  },
]

export function LeadershipSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Visionary <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated leaders driving positive change and empowering communities across the African diaspora.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {leadership.map((leader) => (
            <Card key={leader.name} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                  </div>
                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                      <p className="text-lg text-primary font-semibold mb-3">{leader.title}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {leader.roles.map((role) => (
                          <Badge key={role} variant="secondary">
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">{leader.bio}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-secondary" />
                        Recognition & Achievements
                      </h4>
                      <ul className="space-y-2">
                        {leader.awards.map((award) => (
                          <li key={award} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                            {award}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={`mailto:${leader.email}`}
                        className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </a>
                      <a
                        href={leader.linkedin}
                        className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
