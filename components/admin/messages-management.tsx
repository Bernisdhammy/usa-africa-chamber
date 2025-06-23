"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Reply, Archive, MessageSquare, Mail, Phone, Clock } from "lucide-react"

const messages = [
  {
    id: "msg-1",
    name: "Sarah Johnson",
    email: "sarah.j@company.com",
    phone: "(555) 123-4567",
    company: "Global Solutions Ltd",
    subject: "Partnership Inquiry",
    message:
      "Hi, I'm interested in exploring partnership opportunities for the Unity Feast event. Could we schedule a call to discuss potential collaboration?",
    inquiryType: "partnership",
    urgency: "normal",
    timestamp: "2024-01-15 10:30 AM",
    status: "unread",
    preferredContact: "email",
    device: "Desktop - Chrome",
    location: "New York, NY",
  },
  {
    id: "msg-2",
    name: "Michael Chen",
    email: "m.chen@startup.io",
    phone: "(555) 987-6543",
    company: "African Tech Startup",
    subject: "Exhibitor Package Questions",
    message:
      "I have questions about the exhibitor package. What are the exact dimensions of the display space and what's included in the setup?",
    inquiryType: "unity-feast",
    urgency: "high",
    timestamp: "2024-01-14 2:15 PM",
    status: "replied",
    preferredContact: "phone",
    device: "Mobile - Safari",
    location: "San Francisco, CA",
  },
  {
    id: "msg-3",
    name: "Amara Okafor",
    email: "amara@diasporagroup.org",
    phone: "(555) 456-7890",
    company: "Diaspora Investment Group",
    subject: "Speaking Opportunity",
    message:
      "I would like to inquire about speaking opportunities at the Unity Feast. I have expertise in diaspora investment strategies.",
    inquiryType: "services",
    urgency: "normal",
    timestamp: "2024-01-13 9:45 AM",
    status: "archived",
    preferredContact: "either",
    device: "Tablet - iPad",
    location: "Washington, DC",
  },
  {
    id: "msg-4",
    name: "David Wilson",
    email: "david.wilson@media.com",
    phone: "(555) 321-0987",
    company: "African Media Network",
    subject: "Media Coverage Request",
    message:
      "We would like to cover the Unity Feast event. Can you provide media accreditation information and press kit?",
    inquiryType: "media",
    urgency: "urgent",
    timestamp: "2024-01-12 4:20 PM",
    status: "unread",
    preferredContact: "email",
    device: "Desktop - Firefox",
    location: "Atlanta, GA",
  },
]

const messageStats = [
  { label: "Total Messages", value: 4, change: "+2 today" },
  { label: "Unread Messages", value: 2, change: "Needs attention" },
  { label: "Replied Today", value: 1, change: "Response rate: 75%" },
  { label: "Avg Response Time", value: "4.2 hrs", change: "Within SLA" },
]

export function MessagesManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "unread":
        return "bg-red-500"
      case "replied":
        return "bg-green-500"
      case "archived":
        return "bg-gray-500"
      default:
        return "bg-blue-500"
    }
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "urgent":
        return "bg-red-500 text-white"
      case "high":
        return "bg-orange-500 text-white"
      case "normal":
        return "bg-blue-500 text-white"
      case "low":
        return "bg-gray-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.company.toLowerCase().includes(searchTerm.toLowerCase())

    if (selectedFilter === "all") return matchesSearch
    if (selectedFilter === "unread") return matchesSearch && message.status === "unread"
    if (selectedFilter === "urgent")
      return matchesSearch && (message.urgency === "urgent" || message.urgency === "high")
    if (selectedFilter === "partnership") return matchesSearch && message.inquiryType === "partnership"

    return matchesSearch
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Messages Management</h2>
          <p className="text-muted-foreground">Manage contact form submissions and user inquiries</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Archive className="h-4 w-4 mr-2" />
            Archive Selected
          </Button>
          <Button>
            <Reply className="h-4 w-4 mr-2" />
            Reply All
          </Button>
        </div>
      </div>

      {/* Message Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {messageStats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="messages" className="space-y-6">
        <TabsList>
          <TabsTrigger value="messages">All Messages</TabsTrigger>
          <TabsTrigger value="analytics">Message Analytics</TabsTrigger>
          <TabsTrigger value="templates">Reply Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="messages" className="space-y-6">
          {/* Search and Filters */}
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex space-x-2">
              <Button
                variant={selectedFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("all")}
              >
                All
              </Button>
              <Button
                variant={selectedFilter === "unread" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("unread")}
              >
                Unread
              </Button>
              <Button
                variant={selectedFilter === "urgent" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("urgent")}
              >
                Urgent
              </Button>
              <Button
                variant={selectedFilter === "partnership" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("partnership")}
              >
                Partnership
              </Button>
            </div>
          </div>

          {/* Messages Table */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Messages</CardTitle>
              <CardDescription>
                {filteredMessages.length} of {messages.length} messages shown
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contact Info</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Inquiry Type</TableHead>
                    <TableHead>Urgency</TableHead>
                    <TableHead>Device/Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMessages.map((message) => (
                    <TableRow key={message.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{message.name}</div>
                          <div className="text-sm text-muted-foreground">{message.email}</div>
                          <div className="text-sm text-muted-foreground">{message.company}</div>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            {message.timestamp}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs">
                          <div className="font-medium">{message.subject}</div>
                          <div className="text-sm text-muted-foreground truncate">{message.message}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{message.inquiryType}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getUrgencyColor(message.urgency)}>{message.urgency}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{message.device}</div>
                          <div className="text-muted-foreground">{message.location}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(message.status)}>{message.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Reply className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            {message.preferredContact === "phone" ? (
                              <Phone className="h-4 w-4" />
                            ) : (
                              <Mail className="h-4 w-4" />
                            )}
                          </Button>
                          <Button size="sm" variant="outline">
                            <Archive className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Message Sources</CardTitle>
                <CardDescription>Where messages are coming from</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Contact Form</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Direct Email</span>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Phone Inquiries</span>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Performance</CardTitle>
                <CardDescription>Message handling metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Avg Response Time</span>
                    <span className="text-sm font-medium">4.2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Response Rate</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Customer Satisfaction</span>
                    <span className="text-sm font-medium">4.8/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Reply Templates</CardTitle>
              <CardDescription>Pre-written responses for common inquiries</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="h-20 flex-col" variant="outline">
                  <Mail className="h-6 w-6 mb-2" />
                  Partnership Inquiry
                </Button>
                <Button className="h-20 flex-col" variant="outline">
                  <MessageSquare className="h-6 w-6 mb-2" />
                  Event Information
                </Button>
                <Button className="h-20 flex-col" variant="outline">
                  <Phone className="h-6 w-6 mb-2" />
                  Schedule Meeting
                </Button>
                <Button className="h-20 flex-col" variant="outline">
                  <Archive className="h-6 w-6 mb-2" />
                  Thank You Response
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
