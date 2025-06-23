"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Building, Award, Globe, TrendingUp } from "lucide-react"

// Historical timeline component showcasing organization milestones
export function AboutHistory() {
  // State to control section visibility for animations
  const [isVisible, setIsVisible] = useState(false)
  // Ref to track section element for intersection observer
  const sectionRef = useRef<HTMLElement>(null)

  // Set up intersection observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when section comes into view
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }, // Trigger when 10% of section is visible
    )

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect()
  }, [])

  // Timeline data structure with key milestones
  const timeline = [
    {
      year: "2008", // Milestone year
      title: "Foundation", // Milestone title
      description:
        "USA Africa Chamber of Commerce was established with a vision to bridge continents and empower African diaspora communities.", // Detailed description
      icon: Building, // Icon representing the milestone
      color: "primary", // Color theme
      stats: "Founded with 25 charter members", // Additional statistics
    },
    {
      year: "2012", // Milestone year
      title: "First Unity Summit", // Milestone title
      description:
        "Launched our flagship Unity First Summit, bringing together leaders, entrepreneurs, and community members for the first time.", // Detailed description
      icon: Users, // Icon representing the milestone
      color: "secondary", // Color theme
      stats: "200+ attendees from 15 countries", // Additional statistics
    },
    {
      year: "2015", // Milestone year
      title: "Global Expansion", // Milestone title
      description:
        "Expanded operations to multiple continents, establishing chapters in Europe, Africa, and North America.", // Detailed description
      icon: Globe, // Icon representing the milestone
      color: "accent", // Color theme
      stats: "5 international chapters opened", // Additional statistics
    },
    {
      year: "2018", // Milestone year
      title: "100th Startup", // Milestone title
      description: "Celebrated supporting our 100th startup through our business development and mentorship programs.", // Detailed description
      icon: TrendingUp, // Icon representing the milestone
      color: "primary", // Color theme
      stats: "100+ startups launched successfully", // Additional statistics
    },
    {
      year: "2020", // Milestone year
      title: "Digital Transformation", // Milestone title
      description:
        "Pivoted to digital-first approach during the pandemic, expanding our reach and accessibility worldwide.", // Detailed description
      icon: Globe, // Icon representing the milestone
      color: "secondary", // Color theme
      stats: "500% increase in virtual participation", // Additional statistics
    },
    {
      year: "2024", // Milestone year
      title: "15 Years Strong", // Milestone title
      description:
        "Celebrating 15 years of impact with over 500 active members and countless success stories across the globe.", // Detailed description
      icon: Award, // Icon representing the milestone
      color: "accent", // Color theme
      stats: "500+ active members worldwide", // Additional statistics
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-muted/30 to-background"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section header with animation */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Section badge */}
          <Badge className="mb-6 bg-gradient-to-r from-secondary to-primary text-white px-6 py-2 text-sm font-semibold rounded-full shadow-lg">
            <Calendar className="w-4 h-4 mr-2" />
            Our Journey
          </Badge>

          {/* Section title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">15 Years of</span> <span className="gradient-text">Impact</span>
          </h2>

          {/* Section description */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to global impact, discover the key milestones that have shaped our organization and
            community.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full hidden lg:block" />

          {/* Timeline items */}
          <div className="space-y-16 lg:space-y-24">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Desktop layout - alternating sides */}
                <div className={`hidden lg:flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  {/* Content card */}
                  <div className="w-5/12">
                    <Card
                      className={`chamber-card group hover:scale-105 transition-all duration-500 bg-gradient-to-br from-${item.color}/5 to-${item.color}/10 border-${item.color}/20`}
                    >
                      <CardContent className="p-8">
                        {/* Year badge */}
                        <Badge
                          className={`mb-4 bg-${item.color} text-white px-4 py-2 text-lg font-bold rounded-full shadow-lg`}
                        >
                          {item.year}
                        </Badge>

                        {/* Milestone title */}
                        <h3
                          className={`text-2xl font-bold text-${item.color} mb-4 group-hover:scale-105 transition-transform duration-300`}
                        >
                          {item.title}
                        </h3>

                        {/* Milestone description */}
                        <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>

                        {/* Statistics */}
                        <div
                          className={`text-sm font-semibold text-${item.color} bg-${item.color}/10 px-3 py-2 rounded-full inline-block`}
                        >
                          {item.stats}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Central icon */}
                  <div className="w-2/12 flex justify-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br from-${item.color} to-${item.color}/80 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 z-10`}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="w-5/12" />
                </div>

                {/* Mobile layout - single column */}
                <div className="lg:hidden">
                  <Card
                    className={`chamber-card group hover:scale-105 transition-all duration-500 bg-gradient-to-br from-${item.color}/5 to-${item.color}/10 border-${item.color}/20`}
                  >
                    <CardContent className="p-6">
                      {/* Mobile icon and year */}
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br from-${item.color} to-${item.color}/80 rounded-full flex items-center justify-center shadow-lg mr-4`}
                        >
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <Badge className={`bg-${item.color} text-white px-3 py-1 text-sm font-bold rounded-full`}>
                          {item.year}
                        </Badge>
                      </div>

                      {/* Mobile content */}
                      <h3 className={`text-xl font-bold text-${item.color} mb-3`}>{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3 text-sm">{item.description}</p>
                      <div
                        className={`text-xs font-semibold text-${item.color} bg-${item.color}/10 px-2 py-1 rounded-full inline-block`}
                      >
                        {item.stats}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-action section */}
        <div
          className={`text-center mt-20 transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Card className="chamber-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">Be Part of Our Next Chapter</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join us as we continue to build bridges, empower communities, and create lasting impact across the
                African diaspora.
              </p>
              <Badge className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                Join Our Community Today
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
