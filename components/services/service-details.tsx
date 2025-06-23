"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Target } from "lucide-react"

const serviceDetails = {
  employment: {
    title: "Employment Services",
    description: "Comprehensive workforce development and job placement programs",
    duration: "3-6 months",
    participants: "150+ annually",
    successRate: "78%",
    programs: [
      {
        name: "Workforce Development",
        description: "Skills training and professional development programs",
        duration: "12 weeks",
        features: ["Skills Assessment", "Training Modules", "Certification", "Job Placement"],
      },
      {
        name: "Job Training",
        description: "Industry-specific training programs",
        duration: "8 weeks",
        features: ["Technical Skills", "Soft Skills", "Interview Prep", "Resume Building"],
      },
      {
        name: "Career Placement",
        description: "Direct job placement assistance",
        duration: "4 weeks",
        features: ["Job Matching", "Employer Network", "Follow-up Support", "Career Counseling"],
      },
    ],
  },
  financial: {
    title: "Financial Services",
    description: "Financial literacy and wealth-building programs",
    duration: "6-12 months",
    participants: "200+ annually",
    successRate: "85%",
    programs: [
      {
        name: "BMO Classes",
        description: "Banking and financial management education",
        duration: "6 weeks",
        features: ["Banking Basics", "Credit Management", "Savings Strategies", "Investment Basics"],
      },
      {
        name: "Financial Coaching",
        description: "One-on-one financial guidance",
        duration: "3 months",
        features: ["Personal Budget", "Debt Management", "Goal Setting", "Progress Tracking"],
      },
      {
        name: "Credit Building",
        description: "Credit repair and building programs",
        duration: "6 months",
        features: ["Credit Analysis", "Dispute Resolution", "Building Strategies", "Monitoring"],
      },
    ],
  },
  business: {
    title: "Business Development",
    description: "Startup incubation and business growth support",
    duration: "6-18 months",
    participants: "120+ annually",
    successRate: "92%",
    programs: [
      {
        name: "Startup Incubation",
        description: "Complete startup development program",
        duration: "12 months",
        features: ["Business Planning", "Funding Assistance", "Mentorship", "Market Research"],
      },
      {
        name: "Mentorship Program",
        description: "Experienced business mentor matching",
        duration: "6 months",
        features: ["Mentor Matching", "Regular Meetings", "Goal Setting", "Network Access"],
      },
      {
        name: "Market Access",
        description: "Market entry and expansion support",
        duration: "3 months",
        features: ["Market Analysis", "Partnership Development", "Trade Facilitation", "Export Support"],
      },
    ],
  },
}

export function ServiceDetails() {
  const [selectedService, setSelectedService] = useState("employment")

  const currentService = serviceDetails[selectedService as keyof typeof serviceDetails]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Service <span className="gradient-text">Details</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive deep into our comprehensive programs and discover how we can help you achieve your goals.
          </p>
        </div>

        <Tabs value={selectedService} onValueChange={setSelectedService} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="employment">Employment</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedService} className="space-y-8">
            {/* Service Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{currentService.title}</CardTitle>
                <CardDescription className="text-lg">{currentService.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Duration</div>
                      <div className="text-sm text-muted-foreground">{currentService.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-secondary" />
                    <div>
                      <div className="font-medium">Participants</div>
                      <div className="text-sm text-muted-foreground">{currentService.participants}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-accent" />
                    <div>
                      <div className="font-medium">Success Rate</div>
                      <div className="text-sm text-muted-foreground">{currentService.successRate}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Programs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentService.programs.map((program, index) => (
                <Card key={program.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">Program {index + 1}</Badge>
                      <Badge className="bg-primary text-white">{program.duration}</Badge>
                    </div>
                    <CardTitle className="text-xl">{program.name}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-medium">What's Included:</h4>
                      {program.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6">Enroll Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Join hundreds of individuals who have transformed their careers through our programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">Apply Now</Button>
                  <Button size="lg" variant="outline">
                    Schedule Consultation
                  </Button>
                  <Button size="lg" variant="outline">
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
