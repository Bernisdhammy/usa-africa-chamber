"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Award } from "lucide-react"

// Events timeline component
export function EventsTimeline() {
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

  const timelineEvents = [
    {
      year: "2016",
      title: "The Golden Rule of Business",
      location: "Accra, Ghana",
      type: "Business Lunch",
      attendees: 85,
      description: "Intimate business leadership gathering focusing on ethical practices",
      color: "secondary",
    },
    {
      year: "2023",
      title: "Women's Day Event",
      location: "Washington, D.C.",
      type: "Cultural Celebration",
      attendees: 250,
      description: "Multi-ethnic women's empowerment and recognition ceremony",
      color: "primary",
    },
    {
      year: "2024",
      title: "Unity Feast Summit",
      location: "Atlanta, GA",
      type: "Business Summit",
      attendees: "TBD",
      description: "Upcoming flagship event bringing together diaspora communities",
      color: "accent",
      upcoming: true,
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Badge className="mb-6 bg-gradient-to-r from-accent to-secondary text-white px-6 py-2 text-sm font-semibold rounded-full shadow-lg">
            <Calendar className="w-4 h-4 mr-2" />
            Event Timeline
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Our Event</span> <span className="gradient-text">Evolution</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intimate business gatherings to large-scale cultural celebrations, see how our events have grown and
            evolved.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary via-primary to-accent rounded-full hidden lg:block" />

          {/* Timeline items */}
          <div className="space-y-16 lg:space-y-24">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className={`hidden lg:flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  {/* Content card */}
                  <div className="w-5/12">
                    <Card
                      className={`chamber-card group hover:scale-105 transition-all duration-500 ${
                        event.upcoming
                          ? "bg-gradient-to-br from-accent/10 to-accent/20 border-accent/30 ring-2 ring-accent/20"
                          : `bg-gradient-to-br from-${event.color}/5 to-${event.color}/10 border-${event.color}/20`
                      }`}
                    >
                      <CardContent className="p-8">
                        {event.upcoming && (
                          <Badge className="mb-4 bg-accent text-white px-3 py-1 text-xs font-bold rounded-full animate-pulse">
                            UPCOMING
                          </Badge>
                        )}

                        <Badge
                          className={`mb-4 bg-${event.color} text-white px-4 py-2 text-lg font-bold rounded-full shadow-lg`}
                        >
                          {event.year}
                        </Badge>

                        <h3
                          className={`text-2xl font-bold text-${event.color} mb-2 group-hover:scale-105 transition-transform duration-300`}
                        >
                          {event.title}
                        </h3>

                        <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {event.attendees} {typeof event.attendees === "string" ? "" : "Attendees"}
                          </div>
                        </div>

                        <Badge variant="outline" className="mb-4">
                          {event.type}
                        </Badge>

                        <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Central icon */}
                  <div className="w-2/12 flex justify-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br from-${event.color} to-${event.color}/80 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 z-10 ${
                        event.upcoming ? "ring-4 ring-accent/30 animate-pulse" : ""
                      }`}
                    >
                      {event.upcoming ? (
                        <Award className="h-8 w-8 text-white" />
                      ) : (
                        <Calendar className="h-8 w-8 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12" />
                </div>

                {/* Mobile layout */}
                <div className="lg:hidden">
                  <Card
                    className={`chamber-card group hover:scale-105 transition-all duration-500 ${
                      event.upcoming
                        ? "bg-gradient-to-br from-accent/10 to-accent/20 border-accent/30 ring-2 ring-accent/20"
                        : `bg-gradient-to-br from-${event.color}/5 to-${event.color}/10 border-${event.color}/20`
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br from-${event.color} to-${event.color}/80 rounded-full flex items-center justify-center shadow-lg mr-4`}
                        >
                          {event.upcoming ? (
                            <Award className="h-6 w-6 text-white" />
                          ) : (
                            <Calendar className="h-6 w-6 text-white" />
                          )}
                        </div>
                        <div>
                          {event.upcoming && (
                            <Badge className="mb-1 bg-accent text-white px-2 py-1 text-xs font-bold rounded-full animate-pulse">
                              UPCOMING
                            </Badge>
                          )}
                          <Badge className={`bg-${event.color} text-white px-3 py-1 text-sm font-bold rounded-full`}>
                            {event.year}
                          </Badge>
                        </div>
                      </div>

                      <h3 className={`text-xl font-bold text-${event.color} mb-3`}>{event.title}</h3>

                      <div className="flex flex-wrap gap-2 mb-3 text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {event.attendees} {typeof event.attendees === "string" ? "" : "Attendees"}
                        </div>
                      </div>

                      <Badge variant="outline" className="mb-3 text-xs">
                        {event.type}
                      </Badge>

                      <p className="text-muted-foreground leading-relaxed text-sm">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
