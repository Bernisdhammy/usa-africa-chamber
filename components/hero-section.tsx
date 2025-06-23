"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Building, Award, Sparkles, TrendingUp } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  // State to control animation timing
  const [isVisible, setIsVisible] = useState(false)

  // Trigger animations on component mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Statistics data for the hero section
  const stats = [
    {
      icon: Users, // Icon component for users
      value: "120+", // Display value
      label: "Startups Founded", // Description
      color: "text-primary", // Icon color
      delay: "delay-100", // Animation delay class
    },
    {
      icon: Building, // Icon for buildings/companies
      value: "500+", // Display value
      label: "Members Served", // Description
      color: "text-secondary", // Icon color
      delay: "delay-200", // Animation delay class
    },
    {
      icon: Award, // Icon for achievements
      value: "15+", // Display value
      label: "Years of Impact", // Description
      color: "text-accent", // Icon color
      delay: "delay-300", // Animation delay class
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        {/* Animated background pattern */}
        <div className="section-divider absolute inset-0 opacity-30" />

        {/* Floating geometric shapes for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero badge with animation */}
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Badge className="mb-8 bg-gradient-to-r from-primary to-accent text-white border-0 px-6 py-2 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Sparkles className="w-4 h-4 mr-2" />
              Empowering African Diaspora Communities
            </Badge>
          </div>

          {/* Main heading with staggered animation */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              {/* First part of heading */}
              <span className="block text-foreground mb-2">Empowering</span>
              {/* Gradient text for emphasis */}
              <span className="block gradient-text mb-2">African Diaspora</span>
              {/* Final part of heading */}
              <span className="block text-foreground">Communities</span>
            </h1>
          </div>

          {/* Subtitle with animation */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              The USA Africa Chamber of Commerce bridges continents through business development, workforce training,
              and unity-building initiatives that strengthen our global community.
            </p>
          </div>

          {/* Call-to-action buttons with animation */}
          <div
            className={`transform transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              {/* Primary CTA button with enhanced styling */}
              <Button
                size="lg"
                className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              {/* Secondary CTA button */}
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
                asChild
              >
                <Link href="/unity-first">
                  <TrendingUp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Unity First Summit
                </Link>
              </Button>
            </div>
          </div>

          {/* Statistics section with enhanced cards */}
          <div
            className={`transform transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`chamber-card text-center group hover:scale-105 transition-all duration-300 ${stat.delay}`}
                >
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-${stat.color.split("-")[1]}/20 to-${stat.color.split("-")[1]}/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon
                        className={`h-8 w-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    {/* Glow effect on hover */}
                    <div
                      className={`absolute inset-0 w-16 h-16 mx-auto rounded-full bg-${stat.color.split("-")[1]}/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </div>

                  {/* Statistic value with enhanced typography */}
                  <div
                    className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.value}
                  </div>

                  {/* Statistic label */}
                  <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>

                  {/* Animated underline on hover */}
                  <div
                    className={`h-1 w-0 bg-gradient-to-r from-${stat.color.split("-")[1]} to-${stat.color.split("-")[1]}/50 mx-auto mt-3 group-hover:w-full transition-all duration-500 rounded-full`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator with animation */}
          <div
            className={`transform transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Gradient orbs for visual enhancement */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  )
}
