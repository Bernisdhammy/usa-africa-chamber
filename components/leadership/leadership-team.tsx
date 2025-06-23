"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Linkedin, Mail, Globe, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

const leadership = [
  {
    id: 1,
    name: "Gladys Loggin-Folormaio",
    title: "CEO & Founder",
    roles: ["CEO", "Real Estate Broker", "Community Leader", "Entrepreneur"],
    awards: [
      "2005 Businesswoman of the Year (President Bush)",
      "Golden Rule Ambassador",
      "Founded 120+ startups",
      "Workforce Development Pioneer",
      "Community Impact Award 2020",
      "Women in Business Excellence Award",
    ],
    bio: "A visionary leader with over two decades of experience in community development, business incubation, and workforce training. Gladys has dedicated her career to empowering African diaspora communities through strategic partnerships and innovative programs. Her leadership has resulted in the creation of over 120 startups and the placement of hundreds of individuals in meaningful employment.",
    image: "/placeholder.svg?height=400&width=400",
    email: "gladys@usaafricachamber.org",
    linkedin: "#",
    website: "#",
    achievements: {
      startups: 120,
      placements: 500,
      years: 20,
      awards: 6,
    },
    expanded: false,
  },
  {
    id: 2,
    name: "Dr. James Okonkwo",
    title: "Chief Operating Officer",
    roles: ["COO", "Business Strategist", "International Trade Expert"],
    awards: [
      "Excellence in Operations Award 2022",
      "International Trade Leadership Award",
      "Community Service Recognition",
    ],
    bio: "Dr. Okonkwo brings extensive experience in international business and operations management. He has been instrumental in expanding the Chamber's reach across multiple countries and establishing key partnerships with African governments and international organizations.",
    image: "/placeholder.svg?height=400&width=400",
    email: "james@usaafricachamber.org",
    linkedin: "#",
    website: "#",
    achievements: {
      partnerships: 50,
      countries: 15,
      years: 12,
      programs: 25,
    },
    expanded: false,
  },
  {
    id: 3,
    name: "Sarah Adebayo",
    title: "Director of Programs",
    roles: ["Program Director", "Education Specialist", "Youth Advocate"],
    awards: ["Program Excellence Award 2023", "Youth Development Champion", "Innovation in Education Award"],
    bio: "Sarah leads our comprehensive program portfolio, ensuring that each initiative delivers maximum impact for our community members. Her innovative approach to program design has resulted in industry-leading success rates across all service categories.",
    image: "/placeholder.svg?height=400&width=400",
    email: "sarah@usaafricachamber.org",
    linkedin: "#",
    website: "#",
    achievements: {
      programs: 15,
      participants: 1200,
      successRate: 85,
      years: 8,
    },
    expanded: false,
  },
]

export function LeadershipTeam() {
  const [leaders, setLeaders] = useState(leadership)

  const toggleExpanded = (id: number) => {
    setLeaders((prev) => prev.map((leader) => (leader.id === id ? { ...leader, expanded: !leader.expanded } : leader)))
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Leadership Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experienced leaders committed to driving positive change and creating opportunities for African diaspora
            communities.
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {leaders.map((leader) => (
            <Card key={leader.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                  </div>
                  <div className="lg:col-span-2 p-8">
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

                    <p className="text-muted-foreground mb-6">
                      {leader.expanded ? leader.bio : `${leader.bio.slice(0, 200)}...`}
                    </p>

                    {/* Achievements Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {Object.entries(leader.achievements).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {leader.expanded && (
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Award className="h-4 w-4 mr-2 text-secondary" />
                          Recognition & Achievements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {leader.awards.map((award) => (
                            <div key={award} className="text-sm text-muted-foreground flex items-start">
                              <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                              {award}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
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
                        {leader.website && (
                          <a
                            href={leader.website}
                            className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Globe className="h-4 w-4 mr-2" />
                            Website
                          </a>
                        )}
                      </div>
                      <Button variant="outline" size="sm" onClick={() => toggleExpanded(leader.id)}>
                        {leader.expanded ? (
                          <>
                            Show Less <ChevronUp className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Learn More <ChevronDown className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
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
