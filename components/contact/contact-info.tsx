"use client"

import type React from "react"

// Import necessary React hooks for state management and effects
import { useState, useEffect } from "react"
// Import Lucide React icons for visual elements
import { MapPin, Phone, Mail, Clock, Globe, Users } from "lucide-react"
// Import UI components from shadcn/ui library
import { Card, CardContent } from "@/components/ui/card"

// Define TypeScript interface for contact information structure
interface ContactInfoItem {
  icon: React.ComponentType<{ className?: string }> // Icon component type
  title: string // Display title for the contact method
  content: string // Main content/value
  description: string // Additional description
  link?: string // Optional link for clickable items
}

// Main ContactInfo component export
export function ContactInfo() {
  // State to track which card is currently being hovered
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  // State to control animation timing and visibility
  const [isVisible, setIsVisible] = useState(false)

  // Effect hook to trigger entrance animations after component mounts
  useEffect(() => {
    // Set a small delay to create a smooth entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true) // Make component visible with animations
    }, 100)

    // Cleanup function to prevent memory leaks
    return () => clearTimeout(timer)
  }, []) // Empty dependency array means this runs once on mount

  // Array of contact information data
  const contactInfo: ContactInfoItem[] = [
    {
      icon: MapPin, // Location pin icon
      title: "Visit Our Office", // Card title
      content: "1234 Business Avenue", // Main address
      description: "Washington, DC 20001, USA", // Additional address info
      link: "https://maps.google.com", // Google Maps link
    },
    {
      icon: Phone, // Phone icon
      title: "Call Us", // Card title
      content: "+1 (555) 123-4567", // Phone number
      description: "Mon-Fri, 9AM-6PM EST", // Availability hours
      link: "tel:+15551234567", // Clickable phone link
    },
    {
      icon: Mail, // Email icon
      title: "Email Us", // Card title
      content: "info@usaafricachamber.org", // Email address
      description: "We respond within 24 hours", // Response time
      link: "mailto:info@usaafricachamber.org", // Clickable email link
    },
    {
      icon: Clock, // Clock icon
      title: "Business Hours", // Card title
      content: "Monday - Friday", // Operating days
      description: "9:00 AM - 6:00 PM EST", // Operating hours
    },
    {
      icon: Globe, // Globe icon for website
      title: "Website", // Card title
      content: "www.usaafricachamber.org", // Website URL
      description: "Explore our digital presence", // Description
      link: "https://www.usaafricachamber.org", // Website link
    },
    {
      icon: Users, // Users icon for social media
      title: "Follow Us", // Card title
      content: "Social Media", // Platform type
      description: "Stay connected with our community", // Description
    },
  ]

  // Component render function
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      {" "}
      {/* Responsive padding container */}
      {/* Background gradient overlay for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-green-50/20 to-yellow-50/30 pointer-events-none" />
      {/* Main content container with max width and centering */}
      <div className="max-w-7xl mx-auto relative">
        {/* Section header with animated entrance */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main heading with gradient text effect */}
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          {/* Subtitle with muted color */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with the USA Africa Chamber of Commerce. We're here to support your business journey.
          </p>
          {/* Decorative line under header */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Grid container for contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through contact info array to create cards */}
          {contactInfo.map((info, index) => {
            // Destructure icon component for easier use
            const IconComponent = info.icon

            return (
              // Individual contact card with conditional link wrapper
              <div
                key={index} // Unique key for React list rendering
                className={`group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`, // Staggered animation delay
                }}
                onMouseEnter={() => setHoveredCard(index)} // Set hovered state
                onMouseLeave={() => setHoveredCard(null)} // Clear hovered state
              >
                {/* Conditional wrapper - link if URL exists, div otherwise */}
                {info.link ? (
                  <a
                    href={info.link} // Link destination
                    target="_blank" // Open in new tab
                    rel="noopener noreferrer" // Security attributes
                    className="block h-full" // Full height clickable area
                  >
                    {/* Card component with hover effects */}
                    <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:bg-white/90 transform hover:-translate-y-2 hover:scale-105">
                      <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                        {/* Icon container with animated background */}
                        <div
                          className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                            hoveredCard === index
                              ? "bg-gradient-to-r from-blue-500 to-green-500 shadow-lg scale-110"
                              : "bg-gradient-to-r from-blue-100 to-green-100"
                          }`}
                        >
                          {/* Icon with conditional coloring */}
                          <IconComponent
                            className={`w-8 h-8 transition-colors duration-300 ${
                              hoveredCard === index ? "text-white" : "text-blue-600"
                            }`}
                          />
                        </div>

                        {/* Card title */}
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {info.title}
                        </h3>

                        {/* Main content with emphasis */}
                        <p className="text-lg font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                          {info.content}
                        </p>

                        {/* Description text */}
                        <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                          {info.description}
                        </p>

                        {/* Hover indicator for clickable items */}
                        <div
                          className={`mt-4 text-xs font-medium transition-all duration-300 ${
                            hoveredCard === index
                              ? "text-blue-600 opacity-100 translate-y-0"
                              : "text-transparent opacity-0 translate-y-2"
                          }`}
                        >
                          Click to {info.title.toLowerCase()} →
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ) : (
                  // Non-clickable card version
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:bg-white/90 transform hover:-translate-y-2 hover:scale-105">
                    <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                      {/* Same content structure as clickable version */}
                      <div
                        className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                          hoveredCard === index
                            ? "bg-gradient-to-r from-blue-500 to-green-500 shadow-lg scale-110"
                            : "bg-gradient-to-r from-blue-100 to-green-100"
                        }`}
                      >
                        <IconComponent
                          className={`w-8 h-8 transition-colors duration-300 ${
                            hoveredCard === index ? "text-white" : "text-blue-600"
                          }`}
                        />
                      </div>

                      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {info.title}
                      </h3>

                      <p className="text-lg font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                        {info.content}
                      </p>

                      <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            )
          })}
        </div>

        {/* Additional contact section with emergency info */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Emergency contact card */}
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-red-50 to-orange-50 border-red-200 shadow-lg">
            <CardContent className="p-8">
              {/* Emergency contact heading */}
              <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center justify-center gap-2">
                <Phone className="w-6 h-6" />
                Emergency Contact
              </h3>
              {/* Emergency contact details */}
              <p className="text-lg text-red-600 font-semibold mb-2">+1 (555) 999-HELP</p>
              <p className="text-sm text-red-500">Available 24/7 for urgent business matters and emergencies</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
