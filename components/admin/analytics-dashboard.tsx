"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Users, DollarSign, Clock } from "lucide-react"

const overviewStats = [
  {
    title: "Total Revenue",
    value: "$0",
    change: "0%",
    trend: "up",
    icon: DollarSign,
    description: "Total event revenue this month",
  },
  {
    title: "Active Registrations",
    value: "0",
    change: "0%",
    trend: "up",
    icon: Users,
    description: "Currently registered attendees",
  },
  {
    title: "Conversion Rate",
    value: "0%",
    change: "0%",
    trend: "up",
    icon: TrendingUp,
    description: "Visitor to registration conversion",
  },
  {
    title: "Avg. Session Duration",
    value: "0m 0s",
    change: "0%",
    trend: "up",
    icon: Clock,
    description: "Average time spent on site",
  },
]

const ticketSales = [
  { type: "Summit Pass", sold: 0, total: 150, revenue: 0, percentage: 0 },
  { type: "Business Forum Pass", sold: 0, total: 200, revenue: 0, percentage: 0 },
  { type: "Dinner & Awards Gala", sold: 0, total: 100, revenue: 0, percentage: 0 },
  { type: "Exhibitor Pass", sold: 0, total: 30, revenue: 0, percentage: 0 },
]

const topSessions = [
  { name: "Opening Keynote: Unity in Action", registrations: 0, capacity: 500, percentage: 0 },
  { name: "Investment Pitch Competition", registrations: 0, capacity: 300, percentage: 0 },
  { name: "B2B Matchmaking Sessions", registrations: 0, capacity: 200, percentage: 0 },
  { name: "Women Empowerment Panel", registrations: 0, capacity: 250, percentage: 0 },
]

const recentActivity = [
  { action: "Event created", user: "Admin", time: "1 hour ago", type: "system" },
  { action: "Sessions configured", user: "Admin", time: "2 hours ago", type: "system" },
  { action: "Venue confirmed", user: "Admin", time: "1 day ago", type: "venue" },
  { action: "Sponsors invited", user: "Admin", time: "2 days ago", type: "sponsor" },
  { action: "Registration opened", user: "Admin", time: "3 days ago", type: "system" },
]

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
        <p className="text-muted-foreground">Real-time insights into your events and registrations</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span className={`flex items-center ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {stat.change}
                </span>
                <span>from last month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="sales" className="space-y-6">
        <TabsList>
          <TabsTrigger value="sales">Ticket Sales</TabsTrigger>
          <TabsTrigger value="sessions">Session Analytics</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Ticket Sales Overview</CardTitle>
                <CardDescription>Current sales performance by ticket type</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {ticketSales.map((ticket) => (
                  <div key={ticket.type} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{ticket.type}</span>
                      <span className="text-sm text-muted-foreground">
                        {ticket.sold}/{ticket.total} sold
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: `${ticket.percentage}%` }} />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{ticket.percentage}% sold</span>
                      <span className="font-medium">${ticket.revenue.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>Revenue distribution by ticket type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">$0</div>
                    <div className="text-sm text-muted-foreground">Total Revenue</div>
                  </div>
                  <div className="space-y-3">
                    {ticketSales.map((ticket) => (
                      <div key={ticket.type} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-primary" />
                          <span className="text-sm">{ticket.type}</span>
                        </div>
                        <span className="text-sm font-medium">${ticket.revenue.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Session Popularity</CardTitle>
              <CardDescription>Most popular sessions by registration count</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topSessions.map((session, index) => (
                  <div key={session.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">#{index + 1}</Badge>
                        <span className="font-medium">{session.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {session.registrations}/{session.capacity}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: `${session.percentage}%` }} />
                    </div>
                    <div className="text-sm text-muted-foreground">{session.percentage}% capacity filled</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions and updates from your events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="flex-1">
                      <div className="text-sm">
                        <span className="font-medium">{activity.action}</span> by{" "}
                        <span className="font-medium">{activity.user}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{activity.time}</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {activity.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Attendee Demographics</CardTitle>
                <CardDescription>Breakdown by industry and role</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Technology</span>
                      <span className="text-sm font-medium">32%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "32%" }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Finance</span>
                      <span className="text-sm font-medium">24%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: "24%" }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Healthcare</span>
                      <span className="text-sm font-medium">18%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: "18%" }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Other</span>
                      <span className="text-sm font-medium">26%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-muted-foreground h-2 rounded-full" style={{ width: "26%" }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Attendees by location</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Washington DC</span>
                    <span className="text-sm font-medium">0 attendees</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">New York</span>
                    <span className="text-sm font-medium">0 attendees</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Chicago</span>
                    <span className="text-sm font-medium">0 attendees</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Atlanta</span>
                    <span className="text-sm font-medium">0 attendees</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Other</span>
                    <span className="text-sm font-medium">0 attendees</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
