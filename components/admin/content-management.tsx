"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Users, Award, Building2, Plus, Edit, Trash2, Eye, Save } from "lucide-react"

const contentSections = [
  {
    id: "hero",
    title: "Hero Section",
    description: "Main homepage hero content",
    lastUpdated: "2024-01-20",
    status: "published",
  },
  {
    id: "services",
    title: "Services Section",
    description: "Chamber services and programs",
    lastUpdated: "2024-01-18",
    status: "published",
  },
  {
    id: "leadership",
    title: "Leadership Profiles",
    description: "Leadership team information",
    lastUpdated: "2024-01-15",
    status: "draft",
  },
  {
    id: "unity-first",
    title: "Unity First Event",
    description: "Summit event details and schedule",
    lastUpdated: "2024-01-22",
    status: "published",
  },
]

const speakers = [
  {
    id: "speaker-1",
    name: "Gladys Loggin-Folormaio",
    title: "CEO, USA Africa Chamber",
    bio: "Visionary leader with 20+ years in community development",
    topics: ["Leadership", "Community Building"],
    status: "confirmed",
  },
  {
    id: "speaker-2",
    name: "W.E. Da'Cruz",
    title: "Women Empowerment Advocate",
    bio: "Champion of digital skills development",
    topics: ["Women Empowerment", "Digital Skills"],
    status: "confirmed",
  },
  {
    id: "speaker-3",
    name: "Dr. Amara Okafor",
    title: "Tech Innovation Expert",
    bio: "Leading digital transformation initiatives",
    topics: ["Technology", "Innovation"],
    status: "pending",
  },
]

const sponsors = [
  {
    id: "sponsor-1",
    name: "Unity Partners LLC",
    tier: "Unity Partner",
    amount: 20000,
    status: "confirmed",
    logo: "/placeholder.svg",
  },
  {
    id: "sponsor-2",
    name: "African Development Bank",
    tier: "Gold Sponsor",
    amount: 10000,
    status: "confirmed",
    logo: "/placeholder.svg",
  },
  {
    id: "sponsor-3",
    name: "Diaspora Investment Group",
    tier: "Silver Sponsor",
    amount: 5000,
    status: "pending",
    logo: "/placeholder.svg",
  },
]

export function ContentManagement() {
  const [selectedContent, setSelectedContent] = useState(contentSections[0])
  const [isEditing, setIsEditing] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-500"
      case "draft":
        return "bg-yellow-500"
      case "confirmed":
        return "bg-green-500"
      case "pending":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Content Management</h2>
          <p className="text-muted-foreground">Manage website content, speakers, and sponsor information</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Content
        </Button>
      </div>

      <Tabs defaultValue="pages" className="space-y-6">
        <TabsList>
          <TabsTrigger value="pages" className="flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>Pages</span>
          </TabsTrigger>
          <TabsTrigger value="speakers" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Speakers</span>
          </TabsTrigger>
          <TabsTrigger value="sponsors" className="flex items-center space-x-2">
            <Building2 className="h-4 w-4" />
            <span>Sponsors</span>
          </TabsTrigger>
          <TabsTrigger value="leadership" className="flex items-center space-x-2">
            <Award className="h-4 w-4" />
            <span>Leadership</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pages" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Content List */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Website Sections</CardTitle>
                  <CardDescription>Manage your website content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {contentSections.map((section) => (
                    <div
                      key={section.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        selectedContent.id === section.id ? "bg-primary/10 border-primary" : "hover:bg-muted"
                      }`}
                      onClick={() => setSelectedContent(section)}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{section.title}</h4>
                        <Badge className={getStatusColor(section.status)}>{section.status}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{section.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">Updated: {section.lastUpdated}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Content Editor */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Edit: {selectedContent.title}</CardTitle>
                      <CardDescription>{selectedContent.description}</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                        <Edit className="h-4 w-4 mr-2" />
                        {isEditing ? "Cancel" : "Edit"}
                      </Button>
                      {isEditing && (
                        <Button>
                          <Save className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title">Section Title</Label>
                        <Input id="title" defaultValue={selectedContent.title} />
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Input id="description" defaultValue={selectedContent.description} />
                      </div>
                      <div>
                        <Label htmlFor="content">Content</Label>
                        <Textarea
                          id="content"
                          rows={10}
                          placeholder="Enter your content here..."
                          defaultValue="This is sample content for the selected section. You can edit this content using the rich text editor."
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Preview</h4>
                        <div className="p-4 border rounded-lg bg-muted/30">
                          <p className="text-muted-foreground">
                            This is a preview of the {selectedContent.title.toLowerCase()}. The actual content would be
                            displayed here with proper formatting and styling.
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          Preview Live
                        </Button>
                        <Button variant="outline">Publish Changes</Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="speakers" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Speaker Management</h3>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Speaker
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Event Speakers</CardTitle>
              <CardDescription>Manage speakers for Unity First Summit</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Topics</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {speakers.map((speaker) => (
                    <TableRow key={speaker.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{speaker.name}</div>
                          <div className="text-sm text-muted-foreground">{speaker.title}</div>
                        </div>
                      </TableCell>
                      <TableCell>{speaker.title}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {speaker.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(speaker.status)}>{speaker.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
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

        <TabsContent value="sponsors" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Sponsor Management</h3>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Sponsor
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Event Sponsors</CardTitle>
              <CardDescription>Manage sponsors and partnership tiers</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Tier</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sponsors.map((sponsor) => (
                    <TableRow key={sponsor.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                            <Building2 className="h-4 w-4" />
                          </div>
                          <span className="font-medium">{sponsor.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{sponsor.tier}</Badge>
                      </TableCell>
                      <TableCell>${sponsor.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(sponsor.status)}>{sponsor.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
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

        <TabsContent value="leadership" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Leadership Team</h3>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Leader
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Chamber Leadership</CardTitle>
              <CardDescription>Manage leadership profiles and information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Gladys Loggin-Folormaio</h4>
                          <p className="text-sm text-muted-foreground">CEO & Founder</p>
                          <div className="flex space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              CEO
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Real Estate Broker
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
