"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, TrendingUp, Bell, ArrowRight, Stethoscope, Globe, Clock } from "lucide-react"

// Coming Soon Programs component
export function ComingSoonPrograms() {
  const [isVisible, setIsVisible] = useState(false)
  const [notifyEmails, setNotifyEmails] = useState<{ [key: string]: string }>({})
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

  const upcomingPrograms = [
    {
      id: "healthcare-2026",
      title: "Healthcare Innovation Summit",
      subtitle: "Transforming Healthcare in Africa & America",
      date: "January 2026",
      location: "TBD - Major US City",
      type: "Healthcare Conference",
      expectedAttendees: "500+",
      description:
        "A groundbreaking summit focusing on healthcare innovation, telemedicine, medical technology transfer, and building sustainable healthcare systems between Africa and America.",
      highlights: [
        "Medical Technology Showcase",
        "Telemedicine & Digital Health",
        "Healthcare Investment Opportunities",
        "Medical Education Partnerships",
        "Public Health Policy Discussions",
      ],
      icon: Stethoscope,
      color: "emerald",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      darkBgGradient: "from-emerald-950/20 to-teal-950/20",
    },
    {
      id: "investment-2026",
      title: "Business Investment Forum",
      subtitle: "Unlocking Investment Opportunities",
      date: "June - July 2026",
      location: "TBD - Financial District",
      type: "Investment Conference",
      expectedAttendees: "300+",
      description:
        "An exclusive forum connecting investors, entrepreneurs, and business leaders to explore lucrative investment opportunities across African and American markets.",
      highlights: [
        "Investment Pitch Sessions",
        "Market Analysis & Trends",
        "Cross-Border Trade Opportunities",
        "Venture Capital Networking",
        "Economic Policy Insights",
      ],
      icon: TrendingUp,
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      darkBgGradient: "from-blue-950/20 to-indigo-950/20",
    },
  ]

  const handleNotifySubmit = (programId: string, email: string) => {
    // In a real app, this would send to your backend
    console.log(`Notify request for ${programId}: ${email}`)
    setNotifyEmails((prev) => ({ ...prev, [programId]: "" }))
    // Show success message (you could add a toast notification here)
    alert("Thank you! We'll notify you when registration opens.")
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-sm font-semibold rounded-full shadow-lg animate-pulse">
            <Clock className="w-4 h-4 mr-2" />
            Coming Soon
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Upcoming</span> <span className="gradient-text">Programs</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get ready for our next groundbreaking events designed to foster innovation, investment, and collaboration
            between Africa and America.
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {upcomingPrograms.map((program, index) => {
            const IconComponent = program.icon

            return (
              <div
                key={program.id}
                className={`transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <Card
                  className={`chamber-card group hover:scale-105 transition-all duration-500 bg-gradient-to-br ${program.darkBgGradient} border-${program.color}/20 hover:border-${program.color}/40 relative overflow-hidden`}
                >
                  {/* Card background decoration */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${program.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  <CardContent className="p-8 relative">
                    {/* Program header */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>

                      <Badge
                        className={`bg-${program.color}/10 text-${program.color} border-${program.color}/20 px-3 py-1 text-xs font-semibold rounded-full`}
                      >
                        {program.type}
                      </Badge>
                    </div>

                    {/* Program title and subtitle */}
                    <div className="mb-6">
                      <h3
                        className={`text-2xl lg:text-3xl font-bold text-${program.color} mb-2 group-hover:scale-105 transition-transform duration-300`}
                      >
                        {program.title}
                      </h3>
                      <p className="text-lg text-muted-foreground font-medium">{program.subtitle}</p>
                    </div>

                    {/* Program details */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-medium">{program.date}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="w-4 h-4 mr-2 text-secondary" />
                        <span className="font-medium">{program.expectedAttendees}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground col-span-2">
                        <MapPin className="w-4 h-4 mr-2 text-accent" />
                        <span className="font-medium">{program.location}</span>
                      </div>
                    </div>

                    {/* Program description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">{program.description}</p>

                    {/* Program highlights */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Globe className="w-4 h-4 mr-2 text-primary" />
                        Key Focus Areas
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {program.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div
                              className={`w-2 h-2 bg-gradient-to-r ${program.gradient} rounded-full mr-3 flex-shrink-0`}
                            />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Notify me form */}
                    <div
                      className={`bg-gradient-to-r ${program.bgGradient} dark:${program.darkBgGradient} rounded-xl p-6 border border-${program.color}/20`}
                    >
                      <div className="flex items-center mb-4">
                        <Bell className={`w-5 h-5 text-${program.color} mr-2`} />
                        <h4 className="font-semibold text-foreground">Get Notified</h4>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">
                        Be the first to know when registration opens for this exclusive event.
                      </p>

                      <div className="flex gap-3">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={notifyEmails[program.id] || ""}
                          onChange={(e) => setNotifyEmails((prev) => ({ ...prev, [program.id]: e.target.value }))}
                          className="flex-1 px-4 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                        <Button
                          onClick={() => handleNotifySubmit(program.id, notifyEmails[program.id] || "")}
                          disabled={!notifyEmails[program.id]?.includes("@")}
                          className={`bg-gradient-to-r ${program.gradient} hover:opacity-90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
                        >
                          <Bell className="w-4 h-4 mr-2" />
                          Notify Me
                        </Button>
                      </div>
                    </div>

                    {/* Learn more button */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <Button
                        variant="outline"
                        className={`w-full group border-${program.color}/30 hover:border-${program.color} hover:bg-${program.color}/5 transition-all duration-300`}
                      >
                        <span>Learn More About This Program</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Stay Connected for More Updates</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Follow our journey as we continue to build bridges between Africa and America through innovative programs
              and meaningful connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                <Globe className="w-5 h-5 mr-2" />
                Join Our Community
              </Button>
              <Button
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                View All Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
