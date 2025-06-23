"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Briefcase, ArrowRight } from "lucide-react"

const opportunities = [
  {
    title: "Board of Directors",
    description: "Strategic oversight and governance of Chamber operations",
    requirements: ["10+ years leadership experience", "Industry expertise", "Community commitment"],
    commitment: "Quarterly meetings + events",
    icon: Award,
  },
  {
    title: "Advisory Council",
    description: "Provide strategic guidance and industry expertise",
    requirements: ["Subject matter expertise", "Professional network", "Mentorship experience"],
    commitment: "Monthly consultations",
    icon: Users,
  },
  {
    title: "Program Leadership",
    description: "Lead specific programs and initiatives",
    requirements: ["Program management experience", "Community engagement", "Results-driven approach"],
    commitment: "Weekly involvement",
    icon: Briefcase,
  },
]

export function LeadershipJoin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    interest: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Leadership application submitted:", formData)
    // Handle form submission
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Join Our <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be part of a dynamic leadership team that's making a real difference in African diaspora communities
            worldwide.
          </p>
        </div>

        {/* Leadership Opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity) => (
            <Card key={opportunity.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <opportunity.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                <CardDescription>{opportunity.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {opportunity.requirements.map((req) => (
                        <li key={req} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Time Commitment:</h4>
                    <Badge variant="outline">{opportunity.commitment}</Badge>
                  </div>
                  <Button className="w-full">Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Leadership Application</CardTitle>
              <CardDescription>
                Tell us about your background and interest in joining our leadership team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <Label htmlFor="position">Current Position/Title</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => handleInputChange("position", e.target.value)}
                    placeholder="CEO, Director, etc."
                  />
                </div>
                <div>
                  <Label htmlFor="interest">Leadership Interest *</Label>
                  <Select value={formData.interest} onValueChange={(value) => handleInputChange("interest", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="board">Board of Directors</SelectItem>
                      <SelectItem value="advisory">Advisory Council</SelectItem>
                      <SelectItem value="program">Program Leadership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="experience">Relevant Experience</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    placeholder="Describe your leadership experience and relevant background..."
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Why do you want to join our leadership team?</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your motivation and what you hope to contribute..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Submit Application <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Leadership Benefits */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Leadership Benefits</CardTitle>
                <CardDescription>What you gain as a Chamber leader</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Professional Development</div>
                    <div className="text-sm text-muted-foreground">
                      Access to exclusive training and development programs
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Global Network</div>
                    <div className="text-sm text-muted-foreground">
                      Connect with leaders across the African diaspora
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Impact Recognition</div>
                    <div className="text-sm text-muted-foreground">
                      Recognition for your contributions to community development
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Strategic Influence</div>
                    <div className="text-sm text-muted-foreground">Shape the future direction of our organization</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-accent text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Ready to Lead?</h3>
                <p className="mb-4 opacity-90">
                  Join a team of visionary leaders making a real difference in communities worldwide.
                </p>
                <Button variant="secondary" className="w-full">
                  Schedule Leadership Interview
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Openings</CardTitle>
                <CardDescription>Immediate leadership opportunities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">Program Director - Youth</div>
                    <div className="text-sm text-muted-foreground">Lead youth development initiatives</div>
                  </div>
                  <Badge className="bg-accent text-white">Urgent</Badge>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">Advisory Board Member</div>
                    <div className="text-sm text-muted-foreground">Financial services expertise needed</div>
                  </div>
                  <Badge variant="outline">Open</Badge>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">Regional Coordinator</div>
                    <div className="text-sm text-muted-foreground">West Coast operations</div>
                  </div>
                  <Badge variant="outline">Open</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
