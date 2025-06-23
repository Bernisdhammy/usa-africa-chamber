import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Globe } from "lucide-react"
import Image from "next/image"

const speakers = [
  {
    name: "Gladys Loggin-Folormaio",
    title: "CEO, USA Africa Chamber of Commerce",
    bio: "Visionary leader with 20+ years in community development and business incubation.",
    image: "/placeholder.svg?height=300&width=300",
    topics: ["Leadership", "Community Building"],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "W.E. Da'Cruz",
    title: "Women Empowerment Advocate",
    bio: "Champion of digital skills development and women's economic empowerment across Africa.",
    image: "/placeholder.svg?height=300&width=300",
    topics: ["Women Empowerment", "Digital Skills"],
    social: {
      linkedin: "#",
      website: "#",
    },
  },
  {
    name: "Dr. Amara Okafor",
    title: "Tech Innovation Expert",
    bio: "Leading digital transformation initiatives across African markets and diaspora communities.",
    image: "/placeholder.svg?height=300&width=300",
    topics: ["Technology", "Innovation"],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Marcus Johnson",
    title: "Investment Partner",
    bio: "Venture capitalist focused on African diaspora startups and cross-border investments.",
    image: "/placeholder.svg?height=300&width=300",
    topics: ["Investment", "Startups"],
    social: {
      linkedin: "#",
      website: "#",
    },
  },
]

export function SpeakersSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Speakers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from industry leaders, innovators, and changemakers who are shaping the future of African diaspora
            communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <Card key={speaker.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
                <p className="text-primary font-medium mb-3">{speaker.title}</p>
                <p className="text-muted-foreground text-sm mb-4">{speaker.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {speaker.topics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3">
                  {speaker.social.linkedin && (
                    <a
                      href={speaker.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {speaker.social.twitter && (
                    <a
                      href={speaker.social.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {speaker.social.website && (
                    <a
                      href={speaker.social.website}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">More speakers to be announced. Stay tuned for updates!</p>
        </div>
      </div>
    </section>
  )
}
