import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Mic, ArrowRight } from "lucide-react"
import Link from "next/link"

const eventHighlights = [
  {
    time: "09:00-10:30",
    title: "Opening Keynote: Unity in Action",
    speaker: "Gladys Loggin-Folormaio",
    tags: ["Keynote", "Leadership"],
  },
  {
    time: "11:00-12:30",
    title: "B2B Matchmaking Sessions",
    speaker: "Multiple Facilitators",
    tags: ["Networking", "Business"],
  },
  {
    time: "14:00-15:30",
    title: "Mobilizing Community Leaders",
    speaker: "W.E. Da'Cruz",
    tags: ["Women Empowerment", "Digital Skills"],
  },
  {
    time: "16:00-17:30",
    title: "Investment Pitch Competition",
    speaker: "Panel of Investors",
    tags: ["Startups", "Funding"],
  },
]

const sponsorTiers = [
  {
    name: "Unity Partner",
    price: 20000,
    benefits: ["Keynote Speaking Slot", "20 Summit Passes", "Premium Booth Placement", "Logo on All Materials"],
    featured: true,
  },
  {
    name: "Gold Sponsor",
    price: 10000,
    benefits: ["Panel Speaking Opportunity", "10 Summit Passes", "Exhibition Booth", "Digital Marketing Package"],
    featured: false,
  },
  {
    name: "Silver Sponsor",
    price: 5000,
    benefits: ["5 Summit Passes", "Logo Recognition", "Networking Access", "Social Media Mentions"],
    featured: false,
  },
]

export function UnityFirstPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-white">Unity First Summit 2024</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-text">Unity First Summit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join us for the premier gathering of African diaspora leaders, entrepreneurs, and changemakers at Catholic
            University, Washington DC.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              <span>March 15-16, 2024</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              <span>Catholic University, Washington DC</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-primary" />
              <span>500+ Expected Attendees</span>
            </div>
          </div>
        </div>

        {/* Event Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Featured Sessions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventHighlights.map((session) => (
              <Card key={session.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg mb-2">{session.title}</CardTitle>
                      <CardDescription className="flex items-center mb-2">
                        <Mic className="h-4 w-4 mr-2" />
                        {session.speaker}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {session.time}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {session.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sponsor Tiers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Partnership Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsorTiers.map((tier) => (
              <Card key={tier.name} className={`relative ${tier.featured ? "ring-2 ring-accent shadow-lg" : ""}`}>
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">${tier.price.toLocaleString()}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link href="/unity-first">
                View Full Program <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/unity-first/sponsors">Become a Sponsor</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
