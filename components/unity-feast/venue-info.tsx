import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Car, Plane, Train, Utensils, Wifi, Accessibility } from "lucide-react"

const venueFeatures = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary high-speed internet throughout the venue",
  },
  {
    icon: Accessibility,
    title: "Accessible Facilities",
    description: "Full ADA compliance with accessible entrances and facilities",
  },
  {
    icon: Car,
    title: "Parking Available",
    description: "On-site parking with 500+ spaces available",
  },
  {
    icon: Utensils,
    title: "Catering Services",
    description: "Full-service catering with diverse menu options",
  },
]

const transportationOptions = [
  {
    icon: Plane,
    title: "Ronald Reagan Airport (DCA)",
    distance: "8 miles",
    time: "20 minutes",
    description: "Closest airport with direct Metro connection",
  },
  {
    icon: Plane,
    title: "Dulles International (IAD)",
    distance: "35 miles",
    time: "45 minutes",
    description: "Major international airport with shuttle services",
  },
  {
    icon: Train,
    title: "Union Station",
    distance: "6 miles",
    time: "15 minutes",
    description: "Amtrak and Metro hub with easy campus access",
  },
  {
    icon: Train,
    title: "Brookland Metro",
    distance: "0.5 miles",
    time: "5 minutes",
    description: "Red Line station directly serving the university",
  },
]

const nearbyHotels = [
  {
    name: "Hampton Inn & Suites Washington DC",
    distance: "2.1 miles",
    rating: 4.2,
    priceRange: "$120-180",
    amenities: ["Free Breakfast", "Fitness Center", "Business Center"],
  },
  {
    name: "Courtyard by Marriott Washington",
    distance: "3.5 miles",
    rating: 4.1,
    priceRange: "$140-200",
    amenities: ["Restaurant", "Fitness Center", "Meeting Rooms"],
  },
  {
    name: "Holiday Inn Express Washington DC",
    distance: "4.2 miles",
    rating: 4.0,
    priceRange: "$110-160",
    amenities: ["Free Breakfast", "Pool", "Business Center"],
  },
]

export function VenueInfo() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Venue <span className="gradient-text">Information</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The Unity First Summit will be held at the beautiful Catholic University of America campus in Washington,
            DC, providing a inspiring setting for our gathering.
          </p>
        </div>

        {/* Main Venue Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MapPin className="h-6 w-6 mr-3 text-primary" />
                  Catholic University of America
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    620 Michigan Ave NE
                    <br />
                    Washington, DC 20064
                    <br />
                    United States
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Main Venue</h4>
                  <p className="text-muted-foreground">
                    Edward J. Pryzbyla University Center
                    <br />
                    Great Room & Conference Facilities
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Capacity</h4>
                  <p className="text-muted-foreground">500+ attendees across multiple spaces</p>
                </div>
                <Button className="w-full mt-4">View Campus Map</Button>
              </CardContent>
            </Card>
          </div>

          <div className="relative h-64 lg:h-auto bg-muted rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive Campus Map</p>
                <Button variant="outline" className="mt-2">
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Venue Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Venue Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {venueFeatures.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transportation */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Getting There</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transportationOptions.map((option) => (
              <Card key={option.title}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <option.icon className="h-5 w-5 mr-3 text-primary" />
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Distance: {option.distance}</span>
                    <span className="text-sm text-muted-foreground">Time: {option.time}</span>
                  </div>
                  <p className="text-sm">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nearby Hotels */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Recommended Hotels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nearbyHotels.map((hotel) => (
              <Card key={hotel.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{hotel.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{hotel.distance} away</span>
                    <div className="flex items-center">
                      <span className="text-sm font-medium">★ {hotel.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <span className="text-lg font-semibold text-primary">{hotel.priceRange}</span>
                    <span className="text-sm text-muted-foreground ml-1">per night</span>
                  </div>
                  <div className="space-y-1">
                    {hotel.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {amenity}
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Check Availability
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Special rates available for Unity First Summit attendees. Use code <strong>UNITY2024</strong> when
              booking.
            </p>
            <Button variant="outline">View All Hotel Options</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
