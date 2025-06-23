"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Software Developer",
    company: "Tech Innovations Inc",
    service: "Employment Services",
    rating: 5,
    quote:
      "The workforce development program completely transformed my career. I went from unemployed to landing my dream job as a software developer in just 4 months.",
    image: "/placeholder.svg?height=100&width=100",
    results: "Placed in 4 months",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Business Owner",
    company: "African Tech Startup",
    service: "Business Development",
    rating: 5,
    quote:
      "The startup incubation program provided me with the mentorship and resources I needed to launch my tech company. We're now serving clients across three countries.",
    image: "/placeholder.svg?height=100&width=100",
    results: "Founded successful startup",
  },
  {
    id: 3,
    name: "Amara Okafor",
    title: "Financial Advisor",
    company: "Diaspora Investment Group",
    service: "Financial Services",
    rating: 5,
    quote:
      "The financial coaching program helped me understand investment strategies and build wealth. I now help others in my community achieve financial independence.",
    image: "/placeholder.svg?height=100&width=100",
    results: "Increased savings by 300%",
  },
  {
    id: 4,
    name: "David Wilson",
    title: "Project Manager",
    company: "Global Solutions Ltd",
    service: "Employment Services",
    rating: 5,
    quote:
      "The career placement assistance was incredible. They not only helped me find a job but also negotiated a better salary than I expected.",
    image: "/placeholder.svg?height=100&width=100",
    results: "40% salary increase",
  },
  {
    id: 5,
    name: "Grace Adebayo",
    title: "Entrepreneur",
    company: "Community Health Solutions",
    service: "Business Development",
    rating: 5,
    quote:
      "The mentorship program connected me with industry leaders who guided me through the challenges of scaling my healthcare business.",
    image: "/placeholder.svg?height=100&width=100",
    results: "Scaled to 5 locations",
  },
]

export function ServiceTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our community members who have transformed their lives through our programs.
          </p>
        </div>

        {/* Featured Testimonial */}
        <Card className="max-w-4xl mx-auto mb-12">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="relative w-32 h-32 mx-auto lg:mx-0 mb-4">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold">{currentTestimonial.name}</h3>
                <p className="text-muted-foreground">{currentTestimonial.title}</p>
                <p className="text-sm text-muted-foreground">{currentTestimonial.company}</p>
                <Badge className="mt-2 bg-accent text-white">{currentTestimonial.service}</Badge>
                <div className="flex justify-center lg:justify-start mt-2">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="text-lg italic mb-4">"{currentTestimonial.quote}"</blockquote>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-accent border-accent">
                    Result: {currentTestimonial.results}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={prevTestimonial}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={nextTestimonial}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setCurrentIndex(testimonials.findIndex((t) => t.id === testimonial.id))}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-3">"{testimonial.quote.slice(0, 100)}..."</p>
                <Badge variant="outline" className="text-xs">
                  {testimonial.service}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
