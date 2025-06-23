"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, MapPin, Camera } from "lucide-react"
import Link from "next/link"

// Hero section for events page with animated introduction
export function EventsHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Badge className="mb-8 bg-gradient-to-r from-primary via-secondary to-accent text-white border-0 px-8 py-3 text-base font-bold shadow-2xl rounded-full">
              <Camera className="w-5 h-5 mr-3" />
              Our Event Legacy
            </Badge>
          </div>

          {/* Main heading */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block gradient-text mb-4">Previous</span>
              <span className="block text-foreground">Events</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Celebrating our journey through impactful events that have brought communities together and created
              lasting change.
            </p>
          </div>

          {/* Stats */}
          <div
            className={`transform transition-all duration-1000 delay-600 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="chamber-card bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Years of Events</p>
              </div>

              <div className="chamber-card bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">5000+</h3>
                <p className="text-muted-foreground">Attendees Served</p>
              </div>

              <div className="chamber-card bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-accent mb-2">10+</h3>
                <p className="text-muted-foreground">Countries Reached</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div
            className={`transform transition-all duration-1000 delay-800 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Button
              size="lg"
              className="btn-primary px-10 py-4 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
              asChild
            >
              <Link href="/unity-feast">Join Our Next Event</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
