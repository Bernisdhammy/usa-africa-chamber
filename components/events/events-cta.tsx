"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

// Call-to-action section for events page
export function EventsCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div
          className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Card className="chamber-card bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 border-accent/20 overflow-hidden">
            <CardContent className="p-12">
              <Badge className="mb-6 bg-gradient-to-r from-accent to-primary text-white px-6 py-3 text-base font-bold rounded-full shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Next Event
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Join Unity Feast</span>
                <br />
                <span className="text-foreground">October 2024</span>
              </h2>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Be part of our biggest event yet! Connect with leaders, entrepreneurs, and changemakers from across the
                African diaspora.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Button
                  size="lg"
                  className="btn-primary px-10 py-4 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                  asChild
                >
                  <Link href="/unity-feast">
                    Get Your Tickets
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-4 text-lg font-bold rounded-2xl border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-500 shadow-xl hover:shadow-2xl group"
                  asChild
                >
                  <Link href="/contact">
                    Learn More
                    <Users className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">2 Days</div>
                  <div className="text-sm text-muted-foreground">of Networking</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">50+ Speakers</div>
                  <div className="text-sm text-muted-foreground">Industry Leaders</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary mb-1">500+ Attendees</div>
                  <div className="text-sm text-muted-foreground">Expected</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
