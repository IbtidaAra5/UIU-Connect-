import { Users, FileText, Calendar, Briefcase, TrendingUp, AlertCircle, CheckCircle, XCircle, BarChart3, Activity } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

export function AdminDashboard() {
  const pendingApprovals = {
    users: [
      { id: 1, name: "John Smith", email: "john@uiu.ac.bd", role: "Student", batch: "55", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john" },
      { id: 2, name: "Maria Garcia", email: "maria@uiu.ac.bd", role: "Faculty", department: "CSE", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria" }
    ],
    posts: [
      { id: 1, author: "Sarah Ahmed", content: "Check out my new research paper on AI ethics...", time: "2 hours ago" },
      { id: 2, author: "Tech Club", content: "Announcing our upcoming hackathon event...", time: "5 hours ago" }
    ],
    events: [
      { id: 1, title: "Spring Job Fair 2026", organizer: "Career Services", date: "March 25, 2026" },
      { id: 2, title: "AI Workshop", organizer: "CSE Department", date: "March 18, 2026" }
    ],
    jobs: [
      { id: 1, title: "Backend Developer Intern", company: "Software Solutions", type: "Internship" },
      { id: 2, title: "Marketing Manager", company: "Digital Agency", type: "Full-time" }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600">Manage platform content and monitor activity</p>
        </div>
        <Badge className="bg-purple-600 text-white px-4 py-2 text-sm">
          Admin Access
        </Badge>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Total Users",
            value: "10,234",
            change: "+12%",
            icon: Users,
            color: "from-blue-500 to-cyan-500",
            trend: "up"
          },
          {
            title: "Active Posts",
            value: "5,678",
            change: "+8%",
            icon: FileText,
            color: "from-purple-500 to-pink-500",
            trend: "up"
          },
          {
            title: "Pending Approvals",
            value: "24",
            change: "-5%",
            icon: AlertCircle,
            color: "from-orange-500 to-red-500",
            trend: "down"
          },
          {
            title: "Events This Month",
            value: "156",
            change: "+15%",
            icon: Calendar,
            color: "from-green-500 to-emerald-500",
            trend: "up"
          }
        ].map((stat, idx) => (
          <Card key={idx} className="border-0 shadow-md overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <Badge variant="secondary" className={stat.trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}>
                  {stat.change}
                </Badge>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.title}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Activity Chart */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              User Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { month: "January", users: 8500, growth: 12 },
                { month: "February", users: 9300, growth: 9 },
                { month: "March", users: 10234, growth: 10 }
              ].map((data, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{data.month}</span>
                    <span className="text-gray-600">{data.users} users (+{data.growth}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                      style={{ width: `${(data.users / 10500) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600" />
              Platform Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { label: "Posts per Day", value: 234, max: 300 },
                { label: "Comments per Day", value: 567, max: 700 },
                { label: "Messages per Day", value: 1234, max: 1500 }
              ].map((metric, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{metric.label}</span>
                    <span className="text-gray-600">{metric.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                      style={{ width: `${(metric.value / metric.max) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Approval Tabs */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            Pending Approvals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="users">
            <TabsList className="mb-6">
              <TabsTrigger value="users">
                Users <Badge className="ml-2 bg-blue-600">{pendingApprovals.users.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="posts">
                Posts <Badge className="ml-2 bg-blue-600">{pendingApprovals.posts.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="events">
                Events <Badge className="ml-2 bg-blue-600">{pendingApprovals.events.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="jobs">
                Jobs <Badge className="ml-2 bg-blue-600">{pendingApprovals.jobs.length}</Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="users" className="space-y-4">
              {pendingApprovals.users.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{user.name}</div>
                      <div className="text-sm text-gray-600">{user.email}</div>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="secondary">{user.role}</Badge>
                        {user.batch && <Badge variant="secondary">Batch {user.batch}</Badge>}
                        {user.department && <Badge variant="secondary">{user.department}</Badge>}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50 gap-2">
                      <XCircle className="w-4 h-4" />
                      Reject
                    </Button>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="posts" className="space-y-4">
              {pendingApprovals.posts.map((post) => (
                <div key={post.id} className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-semibold">{post.author}</div>
                      <div className="text-sm text-gray-500">{post.time}</div>
                    </div>
                    <Badge variant="secondary">Pending Review</Badge>
                  </div>
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50 gap-2">
                      <XCircle className="w-4 h-4" />
                      Reject
                    </Button>
                    <Button size="sm" variant="outline">View Full Post</Button>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="events" className="space-y-4">
              {pendingApprovals.events.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">{event.title}</div>
                      <div className="text-sm text-gray-600">by {event.organizer}</div>
                      <div className="text-sm text-gray-500">{event.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50 gap-2">
                      <XCircle className="w-4 h-4" />
                      Reject
                    </Button>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="jobs" className="space-y-4">
              {pendingApprovals.jobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold">{job.title}</div>
                      <div className="text-sm text-gray-600">{job.company}</div>
                      <Badge variant="secondary" className="mt-1">{job.type}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50 gap-2">
                      <XCircle className="w-4 h-4" />
                      Reject
                    </Button>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">User Management</h3>
            <p className="text-sm text-gray-600">View and manage all users</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Analytics</h3>
            <p className="text-sm text-gray-600">View detailed analytics</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Content Management</h3>
            <p className="text-sm text-gray-600">Manage all platform content</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
