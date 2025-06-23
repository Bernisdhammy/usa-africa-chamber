"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Lightbulb, Globe, Users } from "lucide-react"

// Mission, Vision, and Values section with interactive cards
export function AboutMission() {
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
      { threshold: 0.2 }, // Trigger when 20% of section is visible
    )

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect()
  }, [])

  // Mission and vision data structure
  const missionData = [
    {
      icon: Target, // Target icon for mission
      title: "Our Mission", // Section title
      subtitle: "Empowering Communities", // Subtitle for context
      description:
        "To bridge continents through sustainable business development, workforce training, and unity-building initiatives that strengthen African diaspora communities worldwide.", // Detailed description
      color: "primary", // Color theme
      gradient: "from-primary/20 to-primary/5", // Background gradient
      delay: "delay-100", // Animation delay class
    },
    {
      icon: Eye, // Eye icon for vision
      title: "Our Vision", // Section title
      subtitle: "A United Future", // Subtitle for context
      description:
        "A world where African diaspora communities thrive through interconnected networks of support, innovation, and shared prosperity across all continents.", // Detailed description
      color: "secondary", // Color theme
      gradient: "from-secondary/20 to-secondary/5", // Background gradient
      delay: "delay-200", // Animation delay class
    },
  ]

  // Core values data structure
  const values = [
    {
      icon: Heart, // Heart icon for unity
      title: "Unity", // Value name
      description: "Building bridges across cultures and continents", // Value description
      color: "text-red-500", // Icon color
      bgColor: "bg-red-50", // Background color
    },
    {
      icon: Lightbulb, // Lightbulb icon for innovation
      title: "Innovation", // Value name
      description: "Embracing creative solutions for community challenges", // Value description
      color: "text-yellow-500", // Icon color
      bgColor: "bg-yellow-50", // Background color
    },
    {
      icon: Globe, // Globe icon for global reach
      title: "Global Impact", // Value name
      description: "Creating positive change that transcends borders", // Value description
      color: "text-blue-500", // Icon color
      bgColor: "bg-blue-50", // Background color
    },
    {
      icon: Users, // Users icon for community
      title: "Community", // Value name
      description: "Fostering inclusive environments for all members", // Value description
      color: "text-green-500", // Icon color
      bgColor: "bg-green-50", // Background color
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/30"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%), linear-gradient(-45deg, hsl(var(--primary)) 25%, transparent 25%)`,
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 30px 30px",
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
          <Badge className="mb-6 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 text-sm font-semibold rounded-full shadow-lg">
            Our Foundation
          </Badge>

          {/* Section title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Mission</span> & <span className="text-foreground">Vision</span>
          </h2>

          {/* Section description */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our guiding principles and aspirations that drive every initiative and shape our community's future.
          </p>
        </div>

        {/* Mission and Vision cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {missionData.map((item, index) => (
            <div
              key={item.title}
              className={`transform transition-all duration-1000 ${item.delay} ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <Card
                className={`h-full bg-gradient-to-br ${item.gradient} border-${item.color}/20 hover:border-${item.color}/40 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl group`}
              >
                <CardContent className="p-8 lg:p-10">
                  {/* Card icon */}
                  <div className="mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br from-${item.color} to-${item.color}/80 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      <item.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="space-y-4">
                    {/* Card subtitle */}
                    <Badge
                      className={`bg-${item.color}/10 text-${item.color} border-${item.color}/20 px-3 py-1 text-xs font-medium rounded-full`}
                    >
                      {item.subtitle}
                    </Badge>

                    {/* Card title */}
                    <h3
                      className={`text-3xl font-bold text-${item.color} group-hover:scale-105 transition-transform duration-300`}
                    >
                      {item.title}
                    </h3>

                    {/* Card description */}
                    <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
                  </div>

                  {/* Decorative element */}
                  <div
                    className={`absolute bottom-0 right-0 w-32 h-32 bg-${item.color}/5 rounded-full blur-2xl group-hover:bg-${item.color}/10 transition-all duration-500`}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Values section */}
        <div
          className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Values header */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Our Core</span> <span className="gradient-text">Values</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The fundamental principles that guide our actions and define our character as an organization.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <Card className="h-full chamber-card group hover:scale-105 transition-all duration-500 text-center">
                  <CardContent className="p-6">
                    {/* Value icon */}
                    <div
                      className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}
                    >
                      <value.icon className={`h-8 w-8 ${value.color}`} />
                    </div>

                    {/* Value title */}
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h4>

                    {/* Value description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>

                    {/* Animated underline */}
                    <div className="h-1 w-0 bg-gradient-to-r from-primary to-accent mx-auto mt-4 group-hover:w-full transition-all duration-500 rounded-full" />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
