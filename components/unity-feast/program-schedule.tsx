import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Users } from "lucide-react"

const day1Schedule = [
  {
    time: "08:00-09:00",
    title: "Registration & Welcome Coffee",
    description: "Check-in, networking, and continental breakfast",
    location: "Main Lobby",
    type: "registration",
  },
  {
    time: "09:00-10:30",
    title: "Opening Keynote: Unity in Action",
    description: "Setting the vision for African diaspora unity and collaboration",
    speaker: "Gladys Loggin-Folormaio",
    location: "Main Auditorium",
    type: "keynote",
  },
  {
    time: "10:30-11:00",
    title: "Networking Break",
    description: "Coffee and connections",
    location: "Exhibition Hall",
    type: "break",
  },
  {
    time: "11:00-12:30",
    title: "B2B Matchmaking Sessions",
    description: "Structured networking for business partnerships",
    speaker: "Multiple Facilitators",
    location: "Breakout Rooms A-D",
    type: "workshop",
  },
  {
    time: "12:30-13:30",
    title: "Lunch & Cultural Showcase",
    description: "African cuisine and cultural performances",
    location: "Grand Ballroom",
    type: "meal",
  },
  {
    time: "14:00-15:30",
    title: "Mobilizing Community Leaders",
    description: "Women empowerment and digital skills development",
    speaker: "W.E. Da'Cruz",
    location: "Conference Room 1",
    type: "panel",
  },
  {
    time: "16:00-17:30",
    title: "Investment Pitch Competition",
    description: "Startups pitch to panel of investors",
    speaker: "Panel of Investors",
    location: "Main Auditorium",
    type: "competition",
  },
  {
    time: "18:00-21:00",
    title: "Welcome Gala Dinner",
    description: "Formal dinner with awards ceremony",
    location: "Grand Ballroom",
    type: "gala",
  },
]

const day2Schedule = [
  {
    time: "08:30-09:00",
    title: "Morning Coffee & Networking",
    description: "Start the day with connections",
    location: "Main Lobby",
    type: "networking",
  },
  {
    time: "09:00-10:30",
    title: "Trade & Commerce Panel",
    description: "Opportunities in US-Africa trade relations",
    speaker: "Trade Experts Panel",
    location: "Main Auditorium",
    type: "panel",
  },
  {
    time: "11:00-12:30",
    title: "Technology & Innovation Workshop",
    description: "Digital transformation in African markets",
    speaker: "Tech Leaders",
    location: "Tech Lab",
    type: "workshop",
  },
  {
    time: "12:30-13:30",
    title: "Networking Lunch",
    description: "Continue conversations over lunch",
    location: "Exhibition Hall",
    type: "meal",
  },
  {
    time: "14:00-15:30",
    title: "Youth Leadership Forum",
    description: "Next generation of African diaspora leaders",
    speaker: "Young Leaders Panel",
    location: "Conference Room 2",
    type: "forum",
  },
  {
    time: "16:00-17:00",
    title: "Closing Ceremony & Next Steps",
    description: "Summit wrap-up and future initiatives",
    speaker: "Organizing Committee",
    location: "Main Auditorium",
    type: "closing",
  },
]

const getTypeColor = (type: string) => {
  const colors = {
    keynote: "bg-primary text-white",
    panel: "bg-accent text-white",
    workshop: "bg-secondary text-black",
    competition: "bg-orange-500 text-white",
    gala: "bg-purple-500 text-white",
    meal: "bg-green-500 text-white",
    break: "bg-gray-500 text-white",
    networking: "bg-blue-500 text-white",
    forum: "bg-indigo-500 text-white",
    closing: "bg-red-500 text-white",
    registration: "bg-teal-500 text-white",
  }
  return colors[type as keyof typeof colors] || "bg-gray-500 text-white"
}

export function ProgramSchedule() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Summit <span className="gradient-text">Program</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Two days packed with keynotes, panels, workshops, and networking opportunities designed to empower and unite
            our community.
          </p>
        </div>

        <Tabs defaultValue="day1" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="day1" className="text-lg py-3">
              Day 1 - March 15
            </TabsTrigger>
            <TabsTrigger value="day2" className="text-lg py-3">
              Day 2 - March 16
            </TabsTrigger>
          </TabsList>

          <TabsContent value="day1">
            <div className="space-y-4">
              {day1Schedule.map((session, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="flex-shrink-0">
                        <Badge className={getTypeColor(session.type)}>{session.time}</Badge>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
                        <p className="text-muted-foreground mb-3">{session.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          {session.speaker && (
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {session.speaker}
                            </div>
                          )}
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {session.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="day2">
            <div className="space-y-4">
              {day2Schedule.map((session, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="flex-shrink-0">
                        <Badge className={getTypeColor(session.type)}>{session.time}</Badge>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
                        <p className="text-muted-foreground mb-3">{session.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          {session.speaker && (
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {session.speaker}
                            </div>
                          )}
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {session.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
