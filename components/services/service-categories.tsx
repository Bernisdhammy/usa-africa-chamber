"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Briefcase,
  DollarSign,
  GraduationCap,
  Users,
  Building2,
  TrendingUp,
  ArrowRight,
  Search,
  Filter,
  Star,
  CheckCircle,
} from "lucide-react"

// Service data with enhanced information
const services = [
  {
    id: "employment", // Unique identifier for the service
    category: "Employment", // Service category name
    icon: Briefcase, // Icon component
    programs: ["Workforce Development", "Job Training", "Career Placement", "Skills Assessment"], // Available programs
    description: "Comprehensive employment services to connect talent with opportunities.", // Service description
    color: "text-primary", // Icon color class
    bgColor: "bg-primary/10", // Background color class
    borderColor: "border-primary/20", // Border color class
    stats: { served: 150, placements: 89, successRate: 78 }, // Service statistics
    featured: true, // Whether this service is featured
    rating: 4.8, // Service rating
    testimonials: 45, // Number of testimonials
    duration: "3-6 months", // Typical program duration
    nextIntake: "March 2024", // Next program start date
  },
  {
    id: "financial",
    category: "Financial",
    icon: DollarSign,
    programs: ["BMO Classes", "Financial Coaching", "Credit Building", "Investment Planning"],
    description: "Financial literacy and wealth-building programs for sustainable growth.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
    stats: { served: 200, placements: 156, successRate: 85 },
    featured: false,
    rating: 4.9,
    testimonials: 62,
    duration: "6-12 months",
    nextIntake: "April 2024",
  },
  {
    id: "business",
    category: "Business Development",
    icon: Building2,
    programs: ["Startup Incubation", "Mentorship", "Market Access", "Trade Facilitation"],
    description: "End-to-end support for entrepreneurs and growing businesses.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    stats: { served: 120, placements: 95, successRate: 92 },
    featured: true,
    rating: 4.7,
    testimonials: 38,
    duration: "6-18 months",
    nextIntake: "May 2024",
  },
  {
    id: "education",
    category: "Education",
    icon: GraduationCap,
    programs: ["Leadership Training", "Digital Skills", "Professional Certification", "Youth Programs"],
    description: "Educational initiatives that build capacity and leadership.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    stats: { served: 300, placements: 234, successRate: 88 },
    featured: false,
    rating: 4.6,
    testimonials: 71,
    duration: "2-8 months",
    nextIntake: "March 2024",
  },
  {
    id: "community",
    category: "Community",
    icon: Users,
    programs: ["Networking Events", "Cultural Exchange", "Advocacy", "Unity Building"],
    description: "Strengthening bonds within the African diaspora community.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
    stats: { served: 500, placements: 400, successRate: 95 },
    featured: false,
    rating: 4.9,
    testimonials: 89,
    duration: "Ongoing",
    nextIntake: "Monthly",
  },
  {
    id: "growth",
    category: "Growth",
    icon: TrendingUp,
    programs: ["Market Research", "Strategic Planning", "Partnership Development", "Scaling Support"],
    description: "Strategic growth services for established organizations.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    stats: { served: 80, placements: 67, successRate: 84 },
    featured: true,
    rating: 4.8,
    testimonials: 29,
    duration: "3-12 months",
    nextIntake: "June 2024",
  },
]

export function ServiceCategories() {
  // State for selected service (for detailed view)
  const [selectedService, setSelectedService] = useState(services[0])
  // State for filter selection
  const [filter, setFilter] = useState("all")
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("")
  // State for animation control
  const [isVisible, setIsVisible] = useState(false)

  // Trigger animations on component mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Filter services based on current filter and search term
  const filteredServices = services.filter((service) => {
    // Check if service matches search term
    const matchesSearch =
      service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.programs.some((program) => program.toLowerCase().includes(searchTerm.toLowerCase()))

    // Apply filter logic
    if (filter === "featured") return matchesSearch && service.featured
    if (filter === "high-rated") return matchesSearch && service.rating >= 4.8
    return matchesSearch // "all" filter
  })

  // Handle service selection
  const handleServiceSelect = (service: (typeof services)[0]) => {
    setSelectedService(service)
    // Smooth scroll to detailed view
    document.getElementById("service-details")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section header with enhanced styling */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Badge className="mb-6 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 text-sm font-semibold rounded-full">
            Service Portfolio
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Service Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of services designed to support every stage of your journey, from individual
            growth to organizational transformation.
          </p>
        </div>

        {/* Enhanced search and filter section */}
        <div
          className={`mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="max-w-4xl mx-auto">
            {/* Search bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search services, programs, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg rounded-xl border-2 border-border/50 bg-background/80 backdrop-blur-sm focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className="rounded-full px-6 py-2 transition-all duration-300 hover:scale-105"
              >
                <Filter className="mr-2 h-4 w-4" />
                All Services ({services.length})
              </Button>
              <Button
                variant={filter === "featured" ? "default" : "outline"}
                onClick={() => setFilter("featured")}
                className="rounded-full px-6 py-2 transition-all duration-300 hover:scale-105"
              >
                <Star className="mr-2 h-4 w-4" />
                Featured ({services.filter((s) => s.featured).length})
              </Button>
              <Button
                variant={filter === "high-rated" ? "default" : "outline"}
                onClick={() => setFilter("high-rated")}
                className="rounded-full px-6 py-2 transition-all duration-300 hover:scale-105"
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                Top Rated ({services.filter((s) => s.rating >= 4.8).length})
              </Button>
            </div>
          </div>
        </div>

        {/* Services grid with enhanced cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {filteredServices.map((service, index) => (
            <Card
              key={service.id}
              className={`cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${
                selectedService.id === service.id
                  ? `ring-2 ring-${service.color.split("-")[1]} shadow-xl ${service.borderColor}`
                  : "hover:shadow-lg"
              } chamber-card overflow-hidden`}
              onClick={() => handleServiceSelect(service)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="relative">
                {/* Featured badge */}
                {service.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-secondary to-accent text-white text-xs px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Service icon with enhanced styling */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-4 rounded-2xl ${service.bgColor} group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <service.icon
                      className={`h-8 w-8 ${service.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>

                  {/* Rating display */}
                  <div className="text-right">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      {service.rating}
                    </div>
                    <div className="text-xs text-muted-foreground">{service.testimonials} reviews</div>
                  </div>
                </div>

                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.category}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  {/* Program list */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                      Key Programs
                    </h4>
                    <div className="space-y-2">
                      {service.programs.slice(0, 3).map((program) => (
                        <div key={program} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${service.color.replace("text-", "bg-")}`} />
                          <span className="text-sm text-muted-foreground">{program}</span>
                        </div>
                      ))}
                      {service.programs.length > 3 && (
                        <div className="text-sm text-muted-foreground font-medium">
                          +{service.programs.length - 3} more programs
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Statistics grid */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/50">
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{service.stats.served}</div>
                      <div className="text-xs text-muted-foreground">Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{service.stats.placements}</div>
                      <div className="text-xs text-muted-foreground">Placed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{service.stats.successRate}%</div>
                      <div className="text-xs text-muted-foreground">Success</div>
                    </div>
                  </div>

                  {/* Program details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Next Intake:</span>
                      <span className="font-medium">{service.nextIntake}</span>
                    </div>
                  </div>

                  {/* Action button */}
                  <Button
                    className={`w-full group-hover:scale-105 transition-all duration-300 ${
                      selectedService.id === service.id ? "bg-gradient-to-r from-primary to-accent text-white" : ""
                    }`}
                    size="sm"
                  >
                    {selectedService.id === service.id ? "Selected" : "Learn More"}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced selected service details */}
        <div
          id="service-details"
          className={`transform transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Card className="max-w-6xl mx-auto chamber-card overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                {/* Service icon */}
                <div className={`p-6 rounded-2xl ${selectedService.bgColor} shadow-lg`}>
                  <selectedService.icon className={`h-12 w-12 ${selectedService.color}`} />
                </div>

                {/* Service info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <CardTitle className="text-3xl">{selectedService.category}</CardTitle>
                    {selectedService.featured && (
                      <Badge className="bg-gradient-to-r from-secondary to-accent text-white">
                        <Star className="w-4 h-4 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-lg leading-relaxed">{selectedService.description}</CardDescription>

                  {/* Rating and reviews */}
                  <div className="flex items-center space-x-4 mt-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(selectedService.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium">{selectedService.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({selectedService.testimonials} reviews)</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Programs section */}
                <div>
                  <h4 className="font-bold text-xl mb-6 flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-accent" />
                    Available Programs
                  </h4>
                  <div className="space-y-4">
                    {selectedService.programs.map((program, index) => (
                      <div
                        key={program}
                        className="flex items-center space-x-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
                      >
                        <div className={`w-3 h-3 rounded-full ${selectedService.color.replace("text-", "bg-")}`} />
                        <span className="font-medium">{program}</span>
                        <Badge variant="outline" className="ml-auto text-xs">
                          Module {index + 1}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Statistics section */}
                <div>
                  <h4 className="font-bold text-xl mb-6 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                    Impact Statistics
                  </h4>
                  <div className="space-y-6">
                    {/* Success rate progress bar */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Success Rate</span>
                        <span className="font-bold text-lg">{selectedService.stats.successRate}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-${selectedService.color.split("-")[1]} to-${selectedService.color.split("-")[1]}/70 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${selectedService.stats.successRate}%` }}
                        />
                      </div>
                    </div>

                    {/* Other statistics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-primary/5">
                        <div className="text-2xl font-bold text-primary">{selectedService.stats.served}</div>
                        <div className="text-sm text-muted-foreground">People Served</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-accent/5">
                        <div className="text-2xl font-bold text-accent">{selectedService.stats.placements}</div>
                        <div className="text-sm text-muted-foreground">Successful Placements</div>
                      </div>
                    </div>

                    {/* Program details */}
                    <div className="space-y-3 p-4 rounded-lg bg-secondary/5">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Program Duration:</span>
                        <span className="font-semibold">{selectedService.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Next Intake:</span>
                        <span className="font-semibold">{selectedService.nextIntake}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rating:</span>
                        <span className="font-semibold">{selectedService.rating}/5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-12 pt-8 border-t border-border/50">
                <Button
                  size="lg"
                  className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group flex-1"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl flex-1"
                >
                  Schedule Consultation
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Download Brochure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to action section */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Future?</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of individuals who have achieved their goals through our comprehensive programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Speak with an Advisor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
