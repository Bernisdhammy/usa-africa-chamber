"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Users, Building, Award, ArrowRight, Sparkles, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

export function ServicesHero() {
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("")
  // State for controlling animations
  const [isVisible, setIsVisible] = useState(false)
  // State for search suggestions
  const [showSuggestions, setShowSuggestions] = useState(false)

  // Trigger animations when component mounts
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchTerm)
    // Hide suggestions after search
    setShowSuggestions(false)
  }

  // Handle input focus to show suggestions
  const handleInputFocus = () => {
    setShowSuggestions(true)
  }

  // Handle input blur to hide suggestions
  const handleInputBlur = () => {
    // Delay hiding to allow clicking on suggestions
    setTimeout(() => setShowSuggestions(false), 200)
  }

  // Search suggestions data
  const searchSuggestions = [
    "Employment Services",
    "Financial Coaching",
    "Business Development",
    "Workforce Training",
    "Startup Incubation",
  ]

  // Statistics for the hero section
  const heroStats = [
    {
      icon: Users,
      value: "500+",
      label: "Members Served",
      color: "text-primary",
      bgColor: "bg-primary/10",
      description: "Active community members",
    },
    {
      icon: Building,
      value: "120+",
      label: "Startups Founded",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      description: "Successful business launches",
    },
    {
      icon: Award,
      value: "15+",
      label: "Years of Impact",
      color: "text-accent",
      bgColor: "bg-accent/10",
      description: "Serving our community",
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-secondary/6 to-accent/8" />

        {/* Animated pattern overlay */}
        <div className="section-divider absolute inset-0 opacity-40" />

        {/* Floating geometric shapes for visual depth */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-60 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-accent/10 rounded-full blur-2xl animate-pulse delay-2000" />

        {/* Grid pattern for subtle texture - Fixed SVG URL encoding */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000' fillOpacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Hero badge with enhanced animation */}
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Badge className="mb-8 bg-gradient-to-r from-primary via-secondary to-accent text-white border-0 px-8 py-3 text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-full">
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
              Comprehensive Services Portfolio
              <Target className="w-5 h-5 ml-2" />
            </Badge>
          </div>

          {/* Main heading with enhanced typography */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-foreground mb-3">Empowering</span>
              <span className="block gradient-text mb-3 text-shadow-lg">Your Success</span>
              <span className="block text-foreground">Journey</span>
            </h1>
          </div>

          {/* Enhanced subtitle */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              From workforce development to business incubation, we provide comprehensive services designed to help
              individuals and organizations thrive in the global marketplace.
            </p>
          </div>

          {/* Enhanced search section */}
          <div
            className={`transform transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="max-w-2xl mx-auto mb-16">
              <form onSubmit={handleSearch} className="relative">
                {/* Search input with enhanced styling */}
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
                  <Input
                    type="text"
                    placeholder="Search services, programs, or expertise..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    className="pl-12 pr-16 py-4 text-lg rounded-2xl border-2 border-border/50 bg-background/80 backdrop-blur-sm focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                  />
                  {/* Search button */}
                  <Button
                    type="submit"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-xl px-4 py-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                {/* Search suggestions dropdown */}
                {showSuggestions && searchSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-sm border border-border/50 rounded-xl shadow-xl z-50">
                    <div className="p-2">
                      <div className="text-xs text-muted-foreground mb-2 px-3 py-1 font-medium">Popular Searches</div>
                      {searchSuggestions.map((suggestion, index) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => {
                            setSearchTerm(suggestion)
                            setShowSuggestions(false)
                          }}
                          className="w-full text-left px-3 py-2 text-sm hover:bg-muted/50 rounded-lg transition-colors duration-200 flex items-center"
                        >
                          <Search className="h-4 w-4 mr-2 text-muted-foreground" />
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Enhanced statistics section */}
          <div
            className={`transform transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="chamber-card text-center group hover:scale-105 transition-all duration-500 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Enhanced icon container */}
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 mx-auto rounded-2xl ${stat.bgColor} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                    >
                      <stat.icon
                        className={`h-10 w-10 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl ${stat.bgColor} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                    />
                  </div>

                  {/* Enhanced statistic display */}
                  <div
                    className={`text-4xl md:text-5xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.value}
                  </div>

                  <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>

                  <div className="text-sm text-muted-foreground">{stat.description}</div>

                  {/* Progress bar animation */}
                  <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-${stat.color.split("-")[1]} to-${stat.color.split("-")[1]}/50 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-action section */}
          <div
            className={`transform transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="#services">
                  Explore All Services
                  <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/contact">Get Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full animate-ping" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping delay-1000" />
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-accent rounded-full animate-ping delay-2000" />
      </div>
    </section>
  )
}
