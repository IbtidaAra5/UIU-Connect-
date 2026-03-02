import { Heart, MessageCircle, Share2, Bookmark, MoreVertical, Image as ImageIcon, Video, FileText, Smile } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function FeedPage() {
  const posts = [
    {
      id: 1,
      author: {
        name: "Sarah Ahmed",
        role: "CSE Student, Batch 54",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      },
      timestamp: "2 hours ago",
      content: "Just finished my Machine Learning project! 🎉 Big thanks to Dr. Rahman for the guidance. Here's a quick demo of the face recognition system we built. #UIU #MachineLearning #CSE",
      image: "https://images.unsplash.com/photo-1686543971025-15aa01b5f7c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbGUlMjBzdHVkZW50JTIwcHJvZ3JhbW1lcnxlbnwxfHx8fDE3NzI0NTA4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 124,
      comments: 28,
      shares: 12,
      tags: ["Machine Learning", "Project"]
    },
    {
      id: 2,
      author: {
        name: "Dr. Karim Rahman",
        role: "Assistant Professor, EEE",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=karim",
      },
      timestamp: "5 hours ago",
      content: "Exciting news! Our department is organizing a robotics workshop next week. Students from all batches are welcome to participate. Registration link in the events section. 🤖 #Robotics #UIU #Workshop",
      likes: 89,
      comments: 15,
      shares: 34,
      tags: ["Workshop", "Robotics"]
    },
    {
      id: 3,
      author: {
        name: "Ayesha Khan",
        role: "BBA Student, Batch 52",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ayesha",
      },
      timestamp: "1 day ago",
      content: "Looking for team members for the Business Plan Competition! We need someone with marketing and finance background. DM me if interested! 💼 #UIU #BusinessCompetition #TeamBuilding",
      image: "https://images.unsplash.com/photo-1702047135360-e549c2e1f7df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzIzNzE1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 67,
      comments: 22,
      shares: 8,
      tags: ["Competition", "Team"]
    },
    {
      id: 4,
      author: {
        name: "UIU Career Services",
        role: "Official Account",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=uiu",
      },
      timestamp: "1 day ago",
      content: "🎯 Job Alert: Software Engineering Internship at Tech Solutions Ltd. Requirements: Strong knowledge in React, Node.js. Apply before March 10th. Full details in the Jobs section.",
      likes: 156,
      comments: 43,
      shares: 89,
      tags: ["Job Alert", "Internship"]
    }
  ];

  const trendingTopics = [
    { tag: "#UIUTechFest2026", posts: 234 },
    { tag: "#MachineLearning", posts: 189 },
    { tag: "#CareerFair", posts: 156 },
    { tag: "#CampusLife", posts: 142 },
    { tag: "#AlumniMeet", posts: 98 }
  ];

  const suggestedConnections = [
    { name: "Rafiq Hassan", role: "Alumni, Software Engineer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rafiq" },
    { name: "Nadia Ahmed", role: "Faculty, CS Department", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=nadia" },
    { name: "Tech Club UIU", role: "Student Organization", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=techclub" }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-6">
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Main Feed - Center */}
        <div className="lg:col-span-8 space-y-6">
          {/* Create Post Card */}
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-4">
                  <Textarea
                    placeholder="What's on your mind, John?"
                    className="min-h-[100px] resize-none border-gray-200 focus:border-blue-400"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-blue-600">
                        <ImageIcon className="w-4 h-4 mr-2" />
                        Photo
                      </Button>
                      <Button variant="ghost" size="sm" className="text-green-600">
                        <Video className="w-4 h-4 mr-2" />
                        Video
                      </Button>
                      <Button variant="ghost" size="sm" className="text-orange-600">
                        <FileText className="w-4 h-4 mr-2" />
                        Document
                      </Button>
                      <Button variant="ghost" size="sm" className="text-yellow-600">
                        <Smile className="w-4 h-4 mr-2" />
                        Emoji
                      </Button>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Posts */}
          {posts.map((post) => (
            <Card key={post.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Post Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{post.author.name}</div>
                      <div className="text-sm text-gray-500">{post.author.role} • {post.timestamp}</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </div>

                {/* Post Content */}
                <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>

                {/* Tags */}
                {post.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Post Image */}
                {post.image && (
                  <ImageWithFallback
                    src={post.image}
                    alt="Post content"
                    className="w-full rounded-xl mb-4 max-h-96 object-cover"
                  />
                )}

                {/* Engagement Stats */}
                <div className="flex items-center justify-between py-3 border-t border-b border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{post.likes} likes</span>
                    <span>{post.comments} comments</span>
                    <span>{post.shares} shares</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-3">
                  <Button variant="ghost" className="flex-1 text-gray-700 hover:text-blue-600">
                    <Heart className="w-5 h-5 mr-2" />
                    Like
                  </Button>
                  <Button variant="ghost" className="flex-1 text-gray-700 hover:text-blue-600">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Comment
                  </Button>
                  <Button variant="ghost" className="flex-1 text-gray-700 hover:text-blue-600">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-700 hover:text-blue-600">
                    <Bookmark className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block lg:col-span-4 space-y-6">
          {/* Trending Topics */}
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Trending Topics</h3>
              <div className="space-y-4">
                {trendingTopics.map((topic, idx) => (
                  <div key={idx} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition-colors">
                    <div>
                      <div className="font-semibold text-blue-600">{topic.tag}</div>
                      <div className="text-sm text-gray-500">{topic.posts} posts</div>
                    </div>
                    <div className="text-2xl">{idx === 0 ? "🔥" : idx === 1 ? "⭐" : "📈"}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Suggested Connections */}
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Suggested Connections</h3>
              <div className="space-y-4">
                {suggestedConnections.map((person, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={person.avatar} />
                      <AvatarFallback>{person.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm truncate">{person.name}</div>
                      <div className="text-xs text-gray-500 truncate">{person.role}</div>
                    </div>
                    <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      Connect
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="border-0 shadow-md bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Your Activity</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-100">Profile Views</span>
                  <span className="font-semibold">234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Post Impressions</span>
                  <span className="font-semibold">1.2K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Connections</span>
                  <span className="font-semibold">458</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
