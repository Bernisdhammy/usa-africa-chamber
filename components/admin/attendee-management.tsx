"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Download, Mail, QrCode, UserCheck, Users, CreditCard } from "lucide-react"

const attendees = [
  {
    id: "att-1",
    name: "John Doe",
    email: "john.doe@example.com",
    company: "Tech Innovations Inc",
    ticketType: "VIP Experience",
    registrationDate: "2024-01-15",
    checkInStatus: "checked-in",
    paymentStatus: "completed",
    sessions: ["session-1", "session-2"],
  },
  {
    id: "att-2",
    name: "Sarah Johnson",
    email: "sarah.j@company.com",
    company: "Global Solutions Ltd",
    ticketType: "Summit Pass",
    registrationDate: "2024-01-18",
    checkInStatus: "not-checked-in",
    paymentStatus: "completed",
    sessions: ["session-1", "session-3"],
  },
  {
    id: "att-3",
    name: "Michael Chen",
    email: "m.chen@startup.io",
    company: "African Tech Startup",
    ticketType: "Exhibitor Package",
    registrationDate: "2024-01-20",
    checkInStatus: "checked-in",
    paymentStatus: "pending",
    sessions: ["session-1", "session-2", "session-3"],
  },
  {
    id: "att-4",
    name: "Amara Okafor",
    email: "amara@diasporagroup.org",
    company: "Diaspora Investment Group",
    ticketType: "VIP Experience",
    registrationDate: "2024-01-22",
    checkInStatus: "not-checked-in",
    paymentStatus: "completed",
    sessions: ["session-1"],
  },
]

const registrationStats = [
  { label: "Total Registrations", value: 342, change: "+12%" },
  { label: "Checked In", value: 156, change: "+45%" },
  { label: "VIP Tickets", value: 89, change: "+8%" },
  { label: "Pending Payments", value: 23, change: "-15%" },
]

export function AttendeeManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "checked-in":
        return "bg-green-500"
      case "not-checked-in":
        return "bg-yellow-500"
      case "completed":
        return "bg-green-500"
      case "pending":
        return "bg-orange-500"
      case "failed":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const filteredAttendees = attendees.filter((attendee) => {
    const matchesSearch =
      attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attendee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attendee.company.toLowerCase().includes(searchTerm.toLowerCase())

    if (selectedFilter === "all") return matchesSearch
    if (selectedFilter === "checked-in") return matchesSearch && attendee.checkInStatus === "checked-in"
    if (selectedFilter === "vip") return matchesSearch && attendee.ticketType === "VIP Experience"
    if (selectedFilter === "pending") return matchesSearch && attendee.paymentStatus === "pending"

    return matchesSearch
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Attendee Management</h2>
          <p className="text-muted-foreground">Manage registrations, check-ins, and attendee communications</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline">
            <Mail className="h-4 w-4 mr-2" />
            Send Email
          </Button>
          <Button>
            <QrCode className="h-4 w-4 mr-2" />
            Generate QR Codes
          </Button>
        </div>
      </div>

      {/* Registration Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {registrationStats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from last week
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="attendees" className="space-y-6">
        <TabsList>
          <TabsTrigger value="attendees">All Attendees</TabsTrigger>
          <TabsTrigger value="checkin">Check-in</TabsTrigger>
          <TabsTrigger value="communications">Communications</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="attendees" className="space-y-6">
          {/* Search and Filters */}
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search attendees..."
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
                variant={selectedFilter === "checked-in" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("checked-in")}
              >
                Checked In
              </Button>
              <Button
                variant={selectedFilter === "vip" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("vip")}
              >
                VIP
              </Button>
              <Button
                variant={selectedFilter === "pending" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("pending")}
              >
                Pending Payment
              </Button>
            </div>
          </div>

          {/* Attendees Table */}
          <Card>
            <CardHeader>
              <CardTitle>Registered Attendees</CardTitle>
              <CardDescription>
                {filteredAttendees.length} of {attendees.length} attendees shown
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Ticket Type</TableHead>
                    <TableHead>Registration Date</TableHead>
                    <TableHead>Check-in Status</TableHead>
                    <TableHead>Payment Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAttendees.map((attendee) => (
                    <TableRow key={attendee.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{attendee.name}</div>
                          <div className="text-sm text-muted-foreground">{attendee.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>{attendee.company}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{attendee.ticketType}</Badge>
                      </TableCell>
                      <TableCell>{attendee.registrationDate}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(attendee.checkInStatus)}>
                          {attendee.checkInStatus === "checked-in" ? "Checked In" : "Not Checked In"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(attendee.paymentStatus)}>{attendee.paymentStatus}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <UserCheck className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Mail className="h-4 w-4" />
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

        <TabsContent value="checkin" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Check-in Management</CardTitle>
              <CardDescription>Manage attendee check-ins and generate QR codes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-green-600">156</CardTitle>
                    <CardDescription>Checked In</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-yellow-600">186</CardTitle>
                    <CardDescription>Not Checked In</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-blue-600">45.6%</CardTitle>
                    <CardDescription>Check-in Rate</CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <div className="flex space-x-4">
                <Button>
                  <QrCode className="h-4 w-4 mr-2" />
                  Generate All QR Codes
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Check-in List
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Communications</CardTitle>
              <CardDescription>Send targeted emails to attendees</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="h-20 flex-col">
                  <Mail className="h-6 w-6 mb-2" />
                  Welcome Email
                </Button>
                <Button className="h-20 flex-col" variant="outline">
                  <Mail className="h-6 w-6 mb-2" />
                  Event Reminder
                </Button>
                <Button className="h-20 flex-col" variant="outline">
                  <Mail className="h-6 w-6 mb-2" />
                  Check-in Instructions
                </Button>
                <Button className="h-20 flex-col" variant="outline">
                  <Mail className="h-6 w-6 mb-2" />
                  Thank You Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Registration Report</CardTitle>
                <CardDescription>Detailed registration analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Payment Report</CardTitle>
                <CardDescription>Revenue and payment status overview</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
