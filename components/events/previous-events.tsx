"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Camera, ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

// Previous events showcase with image galleries
export function PreviousEvents() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
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

  // Previous events data with real images
  const events = [
    {
      id: 1,
      title: "Women's Day Event",
      subtitle: "Congressional Multi-Ethnic Women's Day",
      date: "March 8, 2023",
      location: "Washington, D.C.",
      organizers: "USA Africa Chamber of Commerce & Empowered Nations",
      description:
        "A powerful celebration of women's achievements and empowerment across cultures, featuring inspiring speakers, networking opportunities, and recognition of outstanding women leaders in business and community service.",
      attendees: 250,
      highlights: [
        "Keynote speeches from prominent women leaders",
        "Multi-ethnic cultural showcase",
        "Networking reception with business leaders",
        "Awards ceremony recognizing outstanding achievements",
        "Panel discussions on women's empowerment",
      ],
      images: [
        "/images/events/womens-day-1.jpg",
        "/images/events/womens-day-2.jpg",
        "/images/events/womens-day-3.jpg",
        "/images/events/womens-day-4.jpg",
        "/images/events/womens-day-5.jpg",
      ],
      color: "primary",
    },
    {
      id: 2,
      title: "The Golden Rule of Business",
      subtitle: "Business Leadership Lunch",
      date: "December 5, 2016",
      location: "Accra, Ghana",
      organizers: "USA Africa Chamber of Commerce",
      description:
        "An exclusive business lunch focusing on ethical leadership and the golden rule principles in international business. This intimate gathering brought together business leaders from Africa and the diaspora to discuss sustainable business practices and cross-continental partnerships.",
      attendees: 85,
      highlights: [
        "Intimate business leadership discussions",
        "Ethical business practices workshop",
        "Cross-continental networking",
        "Traditional Ghanaian hospitality",
        "Strategic partnership formations",
      ],
      images: [
        "/images/events/ghana-2016-1.jpg",
        "/images/events/ghana-2016-2.jpg",
        "/images/events/ghana-2016-3.jpg",
        "/images/events/ghana-2016-4.jpg",
        "/images/events/ghana-2016-5.jpg",
      ],
      color: "secondary",
    },
  ]

  // Image navigation functions
  const nextImage = (eventIndex: number) => {
    if (selectedImage === null) return
    const event = events[eventIndex]
    setSelectedImage((selectedImage + 1) % event.images.length)
  }

  const prevImage = (eventIndex: number) => {
    if (selectedImage === null) return
    const event = events[eventIndex]
    setSelectedImage(selectedImage === 0 ? event.images.length - 1 : selectedImage - 1)
  }

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Badge className="mb-6 bg-gradient-to-r from-secondary to-primary text-white px-6 py-2 text-sm font-semibold rounded-full shadow-lg">
            <Camera className="w-4 h-4 mr-2" />
            Event Gallery
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Our Event</span> <span className="gradient-text">Journey</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore the memorable moments from our past events that have shaped communities and created lasting impact.
          </p>
        </div>

        {/* Events grid */}
        <div className="space-y-16">
          {events.map((event, eventIndex) => (
            <div
              key={event.id}
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ animationDelay: `${eventIndex * 300}ms` }}
            >
              <Card
                className={`chamber-card bg-gradient-to-br from-${event.color}/5 to-${event.color}/10 border-${event.color}/20 overflow-hidden`}
              >
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Event details */}
                    <div className="p-8 lg:p-12">
                      <Badge className={`mb-4 bg-${event.color} text-white px-4 py-2 text-sm font-bold rounded-full`}>
                        {event.date}
                      </Badge>

                      <h3 className={`text-3xl lg:text-4xl font-bold text-${event.color} mb-2`}>{event.title}</h3>

                      <p className="text-lg text-muted-foreground mb-4 font-medium">{event.subtitle}</p>

                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {event.attendees} Attendees
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">{event.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Event Highlights:</h4>
                        <ul className="space-y-2">
                          {event.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start text-sm text-muted-foreground">
                              <div className={`w-2 h-2 bg-${event.color} rounded-full mt-2 mr-3 flex-shrink-0`} />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-xs text-muted-foreground mb-4">Organized by: {event.organizers}</p>

                      <Button
                        onClick={() => setSelectedEvent(selectedEvent === eventIndex ? null : eventIndex)}
                        className={`btn-${event.color} group`}
                      >
                        <Camera className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                        {selectedEvent === eventIndex ? "Hide Gallery" : "View Gallery"}
                      </Button>
                    </div>

                    {/* Featured image */}
                    <div className="relative h-64 lg:h-full min-h-[400px]">
                      <Image
                        src={event.images[0] || "/placeholder.svg"}
                        alt={`${event.title} featured image`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="bg-black/50 text-white backdrop-blur-sm">Featured Photo</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Image gallery */}
                  {selectedEvent === eventIndex && (
                    <div className="border-t border-border/50 p-8">
                      <h4 className="text-xl font-bold mb-6 text-center">Event Gallery</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {event.images.map((image, imageIndex) => (
                          <div
                            key={imageIndex}
                            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
                            onClick={() => setSelectedImage(imageIndex)}
                          >
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${event.title} gallery image ${imageIndex + 1}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                              <Camera className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Image modal */}
      {selectedImage !== null && selectedEvent !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>

            <div className="relative aspect-video">
              <Image
                src={events[selectedEvent].images[selectedImage] || "/placeholder.svg"}
                alt={`${events[selectedEvent].title} image ${selectedImage + 1}`}
                fill
                className="object-contain"
              />
            </div>

            <div className="flex justify-between items-center mt-4">
              <Button variant="ghost" onClick={() => prevImage(selectedEvent)} className="text-white hover:bg-white/20">
                <ChevronLeft className="w-6 h-6 mr-2" />
                Previous
              </Button>

              <span className="text-white">
                {selectedImage + 1} of {events[selectedEvent].images.length}
              </span>

              <Button variant="ghost" onClick={() => nextImage(selectedEvent)} className="text-white hover:bg-white/20">
                Next
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
