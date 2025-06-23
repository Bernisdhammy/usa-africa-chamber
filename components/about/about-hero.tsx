"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Globe, Heart, Users, Target } from "lucide-react"
import Link from "next/link"

// Hero section for About Us page with animated introduction
export function AboutHero() {
  // State to control animation timing
  const [isVisible, setIsVisible] = useState(false)

  // Trigger animations on component mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background with gradient overlay */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />

        {/* Animated geometric shapes for visual interest */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Floating particles effect */}
        <div className="absolute inset-0 opacity-30">
          {/* Create multiple floating dots */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Organization badge with animation */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Badge className="mb-8 bg-gradient-to-r from-primary via-secondary to-accent text-white border-0 px-8 py-3 text-base font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 rounded-full">
              <Globe className="w-5 h-5 mr-3 animate-spin-slow" />
              Established 2008 • Serving Communities Worldwide
            </Badge>
          </div>

          {/* Main heading with enhanced typography */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              {/* First line with gradient effect */}
              <span className="block gradient-text mb-4 text-shadow-lg">Our Story</span>
              {/* Second line with emphasis */}
              <span className="block text-foreground text-shadow">of Unity</span>
            </h1>
          </div>

          {/* Subtitle with enhanced styling */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              For over 15 years, we've been bridging continents, building communities, and empowering dreams across the
              African diaspora.
            </p>
          </div>

          {/* Key highlights with icon cards */}
          <div
            className={`transform transition-all duration-1000 delay-600 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              {/* Mission highlight card */}
              <div className="chamber-card group hover:scale-105 transition-all duration-500 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Target className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Empowering African diaspora communities through sustainable business development and unity
                  initiatives.
                </p>
              </div>

              {/* Community highlight card */}
              <div className="chamber-card group hover:scale-105 transition-all duration-500 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Users className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">Our Community</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A thriving network of 500+ members across multiple continents working together for collective success.
                </p>
              </div>

              {/* Impact highlight card */}
              <div className="chamber-card group hover:scale-105 transition-all duration-500 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Heart className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-accent mb-2">Our Impact</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  120+ startups founded, countless lives transformed, and communities strengthened worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Call-to-action buttons */}
          <div
            className={`transform transition-all duration-1000 delay-800 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              {/* Primary CTA button */}
              <Button
                size="lg"
                className="btn-primary px-10 py-4 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                asChild
              >
                <Link href="/services">
                  Explore Our Services
                  <ArrowDown className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                </Link>
              </Button>

              {/* Secondary CTA button */}
              <Button
                size="lg"
                variant="outline"
                className="px-10 py-4 text-lg font-bold rounded-2xl border-3 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-500 shadow-xl hover:shadow-2xl group"
                asChild
              >
                <Link href="/contact">
                  Join Our Community
                  <Users className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Scroll indicator with enhanced animation */}
          <div
            className={`transform transition-all duration-1000 delay-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-xs text-muted-foreground font-medium">Discover Our Journey</span>
                <div className="w-8 h-12 border-2 border-muted-foreground/40 rounded-full flex justify-center relative overflow-hidden">
                  <div className="w-1.5 h-4 bg-gradient-to-b from-primary to-accent rounded-full mt-2 animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient orbs for depth */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </section>
  )
}
