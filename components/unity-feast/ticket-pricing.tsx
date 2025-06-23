import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

const ticketTiers = [
  {
    name: "Business Forum Pass",
    price: 200,
    originalPrice: 250,
    description: "Access to all sessions, lunch and networking reception",
    features: [
      "All keynote sessions",
      "Workshop access",
      "Networking breaks",
      "Lunch included",
      "Networking reception access",
      "Digital materials",
      "Certificate of attendance",
    ],
    popular: true,
    available: true,
  },
  {
    name: "Summit Pass",
    price: 400,
    originalPrice: 500,
    description: "Complete two-day summit experience",
    features: [
      "Full two-day access",
      "All keynote sessions",
      "All workshop sessions",
      "Lunch both days",
      "Networking reception",
      "Dinner and awards gala",
      "VIP networking opportunities",
      "Premium swag bag",
      "Digital materials",
      "Certificate of attendance",
    ],
    popular: false,
    available: true,
  },
  {
    name: "Dinner & Awards Gala",
    price: 250,
    originalPrice: 300,
    description: "Access to dinner gala only",
    features: [
      "Dinner and awards gala access",
      "Premium dining experience",
      "Awards ceremony",
      "Evening networking",
      "Entertainment program",
      "Recognition opportunities",
    ],
    popular: false,
    available: true,
  },
  {
    name: "Exhibitor Pass",
    price: 500,
    originalPrice: 650,
    description: "Exhibitor package with trade show space",
    features: [
      "Standard 6 ft. table included",
      "Two chairs provided",
      "Up to 10x10 trade show display space",
      "Lunch included",
      "Networking reception access (Oct. 14)",
      "Up to 2 representatives",
      "Lead generation opportunities",
      "Company logo on materials",
      "Promotional opportunities",
      "Post-event attendee list",
    ],
    popular: false,
    available: true,
  },
]

export function TicketPricing() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Summit <span className="gradient-text">Tickets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Choose the perfect ticket for your Unity First Summit experience. Early bird pricing available until
            February 15th.
          </p>
          <Badge className="bg-accent text-white">🎉 Early Bird Special - Save up to $200!</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ticketTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative ${tier.popular ? "ring-2 ring-accent shadow-xl scale-105" : ""}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-white flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription className="text-base">{tier.description}</CardDescription>
                <div className="mt-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl font-bold text-primary">${tier.price}</span>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground line-through">${tier.originalPrice}</span>
                      <span className="text-xs text-accent font-medium">Save ${tier.originalPrice - tier.price}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-4 w-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${tier.popular ? "bg-accent hover:bg-accent/90" : ""}`}
                  disabled={!tier.available}
                >
                  {tier.available ? "Register Now" : "Sold Out"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Group discounts available for 5+ registrations. Contact us for custom packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">Group Registration</Button>
            <Button variant="outline">Student Discount</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
