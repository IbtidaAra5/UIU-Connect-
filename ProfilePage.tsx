import { Camera, MapPin, Link as LinkIcon, Calendar, Mail, Phone, Edit, Award, Briefcase, GraduationCap, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ProfilePage() {
  const skills = ["React", "TypeScript", "Python", "Machine Learning", "Node.js", "MongoDB"];
  const achievements = [
    { title: "Dean's List", year: "Fall 2025", icon: Award },
    { title: "Hackathon Winner", year: "Spring 2025", icon: Award },
    { title: "Research Paper Published", year: "2025", icon: Award }
  ];

  const posts = [
    {
      id: 1,
      content: "Excited to share that I've completed my Machine Learning course with an A+! 🎉",
      image: "https://images.unsplash.com/photo-1686543971025-15aa01b5f7c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbGUlMjBzdHVkZW50JTIwcHJvZ3JhbW1lcnxlbnwxfHx8fDE3NzI0NTA4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 124,
      comments: 28,
      timestamp: "2 days ago"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 lg:p-6 space-y-6">
      {/* Profile Header */}
      <Card className="border-0 shadow-md overflow-hidden">
        {/* Cover Photo */}
        <div className="relative h-48 lg:h-64 bg-gradient-to-r from-blue-600 to-purple-600">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1702047135360-e549c2e1f7df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzIzNzE1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cover"
            className="w-full h-full object-cover opacity-50"
          />
          <Button size="icon" className="absolute bottom-4 right-4 bg-white text-gray-700 hover:bg-gray-100">
            <Camera className="w-5 h-5" />
          </Button>
        </div>

        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6 -mt-20 lg:-mt-16">
            {/* Avatar */}
            <div className="relative">
              <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button size="icon" className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                <Camera className="w-4 h-4" />
              </Button>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold">John Doe</h1>
                  <p className="text-lg text-gray-600">CSE Student, Batch 54</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      <span>john.doe@uiu.ac.bd</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LinkIcon className="w-4 h-4" />
                      <a href="#" className="text-blue-600 hover:underline">johndoe.dev</a>
                    </div>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2">
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </Button>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed">
                Passionate about AI and Machine Learning. Currently working on deep learning projects and always looking to collaborate on innovative tech solutions. Open to internship opportunities!
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">458</div>
                  <div className="text-sm text-gray-600">Connections</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">234</div>
                  <div className="text-sm text-gray-600">Posts</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-pink-600">1.2K</div>
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs Section */}
      <Tabs defaultValue="about" className="space-y-6">
        <TabsList className="w-full justify-start bg-white border-b border-gray-200 rounded-none p-0">
          <TabsTrigger value="about" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600">
            About
          </TabsTrigger>
          <TabsTrigger value="posts" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600">
            Posts
          </TabsTrigger>
          <TabsTrigger value="connections" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600">
            Connections
          </TabsTrigger>
        </TabsList>

        {/* About Tab */}
        <TabsContent value="about" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Skills */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-600 px-4 py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-blue-600 text-blue-600 hover:bg-blue-50">
                  + Add Skill
                </Button>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">United International University</div>
                      <div className="text-sm text-gray-600">Bachelor of Science in CSE</div>
                      <div className="text-sm text-gray-500">2022 - Present</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  Experience
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Software Engineering Intern</div>
                      <div className="text-sm text-gray-600">Tech Solutions Ltd</div>
                      <div className="text-sm text-gray-500">Summer 2025</div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4 border-blue-600 text-blue-600 hover:bg-blue-50">
                  + Add Experience
                </Button>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <div className="font-semibold">{achievement.title}</div>
                        <div className="text-sm text-gray-500">{achievement.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Posts Tab */}
        <TabsContent value="posts" className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="border-0 shadow-md">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">{post.content}</p>
                {post.image && (
                  <ImageWithFallback
                    src={post.image}
                    alt="Post"
                    className="w-full rounded-xl mb-4"
                  />
                )}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{post.likes} likes</span>
                  <span>{post.comments} comments</span>
                  <span>{post.timestamp}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Connections Tab */}
        <TabsContent value="connections">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, idx) => (
              <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${idx}`} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="font-semibold">Connection {idx + 1}</div>
                  <div className="text-sm text-gray-600 mb-4">CSE Student</div>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
