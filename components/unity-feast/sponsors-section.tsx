import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Crown, Award } from "lucide-react"
import Image from "next/image"

const sponsorTiers = [
  {
    name: "Unity Partner",
    price: 20000,
    icon: Crown,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    sponsors: [
      {
        name: "Unity Partners LLC",
        logo: "/placeholder.svg?height=100&width=200",
        website: "https://unitypartners.com",
        description: "Leading the way in African diaspora business development",
      },
    ],
  },
  {
    name: "Gold Sponsor",
    price: 10000,
    icon: Award,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    sponsors: [
      {
        name: "African Development Bank",
        logo: "/placeholder.svg?height=100&width=200",
        website: "https://afdb.org",
        description: "Supporting sustainable development across Africa",
      },
      {
        name: "Diaspora Investment Group",
        logo: "/placeholder.svg?height=100&width=200",
        website: "https://diasporainvest.com",
        description: "Connecting capital with opportunity",
      },
    ],
  },
  {
    name: "Silver Sponsor",
    price: 5000,
    icon: Star,
    color: "text-gray-500",
    bgColor: "bg-gray-50",
    sponsors: [
      {
        name: "Community First Bank",
        logo: "/placeholder.svg?height=100&width=200",
        website: "https://communityfirst.com",
        description: "Banking solutions for growing communities",
      },
      {
        name: "Tech Innovation Hub",
        logo: "/placeholder.svg?height=100&width=200",
        website: "https://techinnovation.com",
        description: "Fostering technological advancement",
      },
      {
        name: "Global Trade Solutions",
        logo: "/placeholder.svg?height=100&width=200",
        website: "https://globaltradesolutions.com",
        description: "Facilitating international commerce",
      },
    ],
  },
]

const partnershipBenefits = [
  {
    tier: "Unity Partner",
    benefits: [
      "Keynote Speaking Slot",
      "20 Summit Passes",
      "Premium Booth Placement",
      "Logo on All Materials",
      "VIP Reception Access",
      "Year-round Partnership Recognition",
    ],
  },
  {
    tier: "Gold Sponsor",
    benefits: [
      "Panel Speaking Opportunity",
      "10 Summit Passes",
      "Exhibition Booth",
      "Digital Marketing Package",
      "Networking Session Access",
      "Quarterly Newsletter Feature",
    ],
  },
  {
    tier: "Silver Sponsor",
    benefits: [
      "5 Summit Passes",
      "Logo Recognition",
      "Networking Access",
      "Social Media Mentions",
      "Event Program Listing",
      "Certificate of Partnership",
    ],
  },
]

export function SponsorsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're grateful to our sponsors and partners who make the Unity First Summit possible and support our mission
            of empowering African diaspora communities.
          </p>
        </div>

        {/* Current Sponsors */}
        <div className="space-y-12 mb-16">
          {sponsorTiers.map((tier) => (
            <div key={tier.name}>
              <div className="flex items-center justify-center mb-8">
                <div className={`flex items-center space-x-3 px-6 py-3 rounded-full ${tier.bgColor}`}>
                  <tier.icon className={`h-6 w-6 ${tier.color}`} />
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                  <Badge variant="outline" className="ml-2">
                    ${tier.price.toLocaleString()}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tier.sponsors.map((sponsor) => (
                  <Card key={sponsor.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="relative h-20 mb-4">
                        <Image
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <CardTitle className="text-lg">{sponsor.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground text-sm mb-4">{sponsor.description}</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                          Visit Website
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Partnership Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnershipBenefits.map((partnership) => (
              <Card key={partnership.tier}>
                <CardHeader>
                  <CardTitle className="text-center">{partnership.tier}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {partnership.benefits.map((benefit) => (
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

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Become a Partner</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Join us in empowering African diaspora communities. Partner with the Unity First Summit and make a
                lasting impact on our global community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Partnership Inquiry
                </Button>
                <Button size="lg" variant="outline">
                  Download Sponsorship Package
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
