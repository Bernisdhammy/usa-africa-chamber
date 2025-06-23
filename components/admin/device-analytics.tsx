"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Monitor, Smartphone, Tablet, Globe, MapPin, Clock } from "lucide-react"

const deviceStats = [
  {
    title: "Desktop Users",
    value: "0",
    percentage: "0%",
    icon: Monitor,
    color: "text-blue-500",
  },
  {
    title: "Mobile Users",
    value: "0",
    percentage: "0%",
    icon: Smartphone,
    color: "text-green-500",
  },
  {
    title: "Tablet Users",
    value: "0",
    percentage: "0%",
    icon: Tablet,
    color: "text-purple-500",
  },
  {
    title: "Total Sessions",
    value: "0",
    percentage: "0%",
    icon: Globe,
    color: "text-orange-500",
  },
]

const ticketPurchases = [
  {
    id: "ticket-1",
    customerName: "John Doe",
    email: "john.doe@example.com",
    ticketType: "Summit Pass",
    quantity: 1,
    amount: "$400",
    device: "Desktop - Chrome",
    browser: "Chrome 120.0",
    os: "Windows 11",
    location: "New York, NY",
    ip: "192.168.1.100",
    timestamp: "2024-01-15 2:30 PM",
    status: "completed",
  },
  {
    id: "ticket-2",
    customerName: "Sarah Johnson",
    email: "sarah.j@company.com",
    ticketType: "Business Forum Pass",
    quantity: 2,
    amount: "$400",
    device: "Mobile - Safari",
    browser: "Safari 17.1",
    os: "iOS 17.2",
    location: "Los Angeles, CA",
    ip: "192.168.1.101",
    timestamp: "2024-01-14 10:15 AM",
    status: "completed",
  },
  {
    id: "ticket-3",
    customerName: "Michael Chen",
    email: "m.chen@startup.io",
    ticketType: "Exhibitor Pass",
    quantity: 1,
    amount: "$500",
    device: "Tablet - iPad",
    browser: "Safari 17.0",
    os: "iPadOS 17.1",
    location: "San Francisco, CA",
    ip: "192.168.1.102",
    timestamp: "2024-01-13 4:45 PM",
    status: "pending",
  },
]

const browserData = [
  { name: "Chrome", users: 0, percentage: 0 },
  { name: "Safari", users: 0, percentage: 0 },
  { name: "Firefox", users: 0, percentage: 0 },
  { name: "Edge", users: 0, percentage: 0 },
  { name: "Other", users: 0, percentage: 0 },
]

const locationData = [
  { city: "New York, NY", users: 0, tickets: 0 },
  { city: "Los Angeles, CA", users: 0, tickets: 0 },
  { city: "Chicago, IL", users: 0, tickets: 0 },
  { city: "Washington, DC", users: 0, tickets: 0 },
  { city: "Atlanta, GA", users: 0, tickets: 0 },
]

export function DeviceAnalytics() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "pending":
        return "bg-yellow-500"
      case "failed":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Device & Purchase Analytics</h2>
        <p className="text-muted-foreground">Track user devices, locations, and ticket purchases across platforms</p>
      </div>

      {/* Device Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {deviceStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.percentage} of total traffic</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="purchases" className="space-y-6">
        <TabsList>
          <TabsTrigger value="purchases">Ticket Purchases</TabsTrigger>
          <TabsTrigger value="devices">Device Breakdown</TabsTrigger>
          <TabsTrigger value="locations">Geographic Data</TabsTrigger>
          <TabsTrigger value="browsers">Browser Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="purchases" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Ticket Purchases by Device</CardTitle>
              <CardDescription>Track ticket sales across different devices and platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Ticket Details</TableHead>
                    <TableHead>Device Info</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Purchase Time</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ticketPurchases.map((purchase) => (
                    <TableRow key={purchase.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{purchase.customerName}</div>
                          <div className="text-sm text-muted-foreground">{purchase.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{purchase.ticketType}</div>
                          <div className="text-sm text-muted-foreground">
                            Qty: {purchase.quantity} • {purchase.amount}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{purchase.device}</div>
                          <div className="text-sm text-muted-foreground">{purchase.browser}</div>
                          <div className="text-sm text-muted-foreground">{purchase.os}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {purchase.location}
                          </div>
                          <div className="text-sm text-muted-foreground">{purchase.ip}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {purchase.timestamp}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(purchase.status)}>{purchase.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="devices" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Device Distribution</CardTitle>
                <CardDescription>User traffic by device type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Monitor className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Desktop</span>
                    </div>
                    <span className="text-sm font-medium">0%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Mobile</span>
                    </div>
                    <span className="text-sm font-medium">0%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Tablet className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">Tablet</span>
                    </div>
                    <span className="text-sm font-medium">0%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Operating Systems</CardTitle>
                <CardDescription>Most popular OS among users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Windows</span>
                    <span className="text-sm font-medium">0 users</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">macOS</span>
                    <span className="text-sm font-medium">0 users</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">iOS</span>
                    <span className="text-sm font-medium">0 users</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Android</span>
                    <span className="text-sm font-medium">0 users</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Screen Resolutions</CardTitle>
                <CardDescription>Common screen sizes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">1920x1080</span>
                    <span className="text-sm font-medium">0%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">1366x768</span>
                    <span className="text-sm font-medium">0%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">375x667</span>
                    <span className="text-sm font-medium">0%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">414x896</span>
                    <span className="text-sm font-medium">0%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="locations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Geographic Distribution</CardTitle>
              <CardDescription>User locations and ticket purchases by city</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Location</TableHead>
                    <TableHead>Total Users</TableHead>
                    <TableHead>Tickets Purchased</TableHead>
                    <TableHead>Conversion Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {locationData.map((location) => (
                    <TableRow key={location.city}>
                      <TableCell>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                          {location.city}
                        </div>
                      </TableCell>
                      <TableCell>{location.users}</TableCell>
                      <TableCell>{location.tickets}</TableCell>
                      <TableCell>0%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="browsers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Browser Analytics</CardTitle>
              <CardDescription>User preferences by browser</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {browserData.map((browser) => (
                  <div key={browser.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{browser.name}</span>
                      <span className="text-sm text-muted-foreground">{browser.users} users</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: `${browser.percentage}%` }} />
                    </div>
                    <div className="text-sm text-muted-foreground">{browser.percentage}% of total users</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
