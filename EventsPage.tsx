import { Calendar, MapPin, Clock, Users, Plus, Filter, Search, Heart, Share2, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function EventsPage() {
  const events = [
    {
      id: 1,
      title: "UIU Tech Fest 2026",
      date: "March 15, 2026",
      time: "10:00 AM - 6:00 PM",
      location: "UIU Main Campus, Auditorium",
      category: "Tech",
      attendees: 234,
      image: "https://images.unsplash.com/photo-1702047135360-e549c2e1f7df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzIzNzE1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Join us for the biggest tech event of the year! Workshops, competitions, and networking opportunities.",
      organizer: "Tech Club UIU",
      isRegistered: false
    },
    {
      id: 2,
      title: "Robotics Workshop",
      date: "March 8, 2026",
      time: "2:00 PM - 5:00 PM",
      location: "EEE Lab, Building 3",
      category: "Workshop",
      attendees: 45,
      image: "https://images.unsplash.com/photo-1686543971025-15aa01b5f7c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbGUlMjBzdHVkZW50JTIwcHJvZ3JhbW1lcnxlbnwxfHx8fDE3NzI0NTA4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Learn the basics of robotics and build your first robot. All materials provided.",
      organizer: "EEE Department",
      isRegistered: true
    },
    {
      id: 3,
      title: "Career Fair 2026",
      date: "March 20, 2026",
      time: "9:00 AM - 4:00 PM",
      location: "UIU Campus Grounds",
      category: "Career",
      attendees: 567,
      image: "https://images.unsplash.com/photo-1768508948485-a7adc1f3427f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBuZXR3b3JraW5nJTIwZXZlbnQlMjBwZW9wbGV8ZW58MXx8fHwxNzcyMzg5NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Meet recruiters from top companies. Bring your resume and be prepared for on-spot interviews!",
      organizer: "Career Services",
      isRegistered: false
    },
    {
      id: 4,
      title: "Alumni Networking Night",
      date: "March 25, 2026",
      time: "7:00 PM - 10:00 PM",
      location: "UIU Cafeteria",
      category: "Networking",
      attendees: 89,
      image: "https://images.unsplash.com/photo-1758270705641-acf09b68a91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29sbGVnZSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NzI0NTA3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Connect with successful alumni and learn from their experiences. Dinner and refreshments provided.",
      organizer: "Alumni Association",
      isRegistered: true
    }
  ];

  const categories = ["All", "Tech", "Workshop", "Career", "Networking", "Social", "Sports"];

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Campus Events</h1>
          <p className="text-gray-600">Discover and join exciting events happening at UIU</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2">
          <Plus className="w-5 h-5" />
          Create Event
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search events..."
                className="pl-10 bg-gray-50"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="cursor-pointer hover:bg-blue-100 hover:text-blue-700 px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList className="bg-white border border-gray-200">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="my-events">My Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{event.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-600">
                      by <span className="font-semibold text-gray-900">{event.organizer}</span>
                    </div>
                    {event.isRegistered ? (
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        ✓ Registered
                      </Badge>
                    ) : (
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Register
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-events">
          <div className="grid md:grid-cols-2 gap-6">
            {events.filter(e => e.isRegistered).map((event) => (
              <Card key={event.id} className="border-0 shadow-md overflow-hidden">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                    Registered
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>{event.date} at {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </Button>
                    <Button variant="outline" className="flex-1 text-red-600 hover:text-red-700 hover:bg-red-50">
                      Cancel Registration
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">No past events to show</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
