"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventManagement } from "./event-management"
import { AttendeeManagement } from "./attendee-management"
import { AnalyticsDashboard } from "./analytics-dashboard"
import { ContentManagement } from "./content-management"
import { MessagesManagement } from "./messages-management"
import { DeviceAnalytics } from "./device-analytics"
import { Users, Calendar, BarChart3, FileText, DollarSign, Award, MessageSquare, Monitor } from "lucide-react"

const stats = [
  {
    title: "Total Registrations",
    value: "0",
    change: "0%",
    icon: Users,
    color: "text-primary",
  },
  {
    title: "Revenue Generated",
    value: "$0",
    change: "0%",
    icon: DollarSign,
    color: "text-secondary",
  },
  {
    title: "Active Sessions",
    value: "0",
    change: "0",
    icon: Calendar,
    color: "text-accent",
  },
  {
    title: "Sponsor Partners",
    value: "0",
    change: "0",
    icon: Award,
    color: "text-primary",
  },
]

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage your Unity Feast and Chamber operations</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="analytics" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="analytics" className="flex items-center space-x-2">
            <BarChart3 className="h-4 w-4" />
            <span>Analytics</span>
          </TabsTrigger>
          <TabsTrigger value="events" className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Events</span>
          </TabsTrigger>
          <TabsTrigger value="attendees" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Attendees</span>
          </TabsTrigger>
          <TabsTrigger value="messages" className="flex items-center space-x-2">
            <MessageSquare className="h-4 w-4" />
            <span>Messages</span>
          </TabsTrigger>
          <TabsTrigger value="devices" className="flex items-center space-x-2">
            <Monitor className="h-4 w-4" />
            <span>Devices</span>
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>Content</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="analytics">
          <AnalyticsDashboard />
        </TabsContent>

        <TabsContent value="events">
          <EventManagement />
        </TabsContent>

        <TabsContent value="attendees">
          <AttendeeManagement />
        </TabsContent>

        <TabsContent value="messages">
          <MessagesManagement />
        </TabsContent>

        <TabsContent value="devices">
          <DeviceAnalytics />
        </TabsContent>

        <TabsContent value="content">
          <ContentManagement />
        </TabsContent>
      </Tabs>
    </div>
  )
}
