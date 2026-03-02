import { Briefcase, MapPin, Clock, DollarSign, Search, Filter, BookmarkPlus, ExternalLink, Building } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

export function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Tech Solutions Ltd",
      logo: "https://api.dicebear.com/7.x/shapes/svg?seed=tech",
      location: "Dhaka, Bangladesh",
      type: "Internship",
      salary: "25,000 - 35,000 BDT",
      posted: "2 days ago",
      deadline: "March 10, 2026",
      description: "We are looking for passionate software engineering interns to join our development team. You will work on real-world projects using React, Node.js, and cloud technologies.",
      requirements: ["React", "Node.js", "JavaScript", "Git"],
      category: "Tech"
    },
    {
      id: 2,
      title: "UI/UX Design Intern",
      company: "Creative Studio",
      logo: "https://api.dicebear.com/7.x/shapes/svg?seed=creative",
      location: "Remote",
      type: "Internship",
      salary: "20,000 - 30,000 BDT",
      posted: "5 days ago",
      deadline: "March 15, 2026",
      description: "Join our design team and help create beautiful user experiences. You'll work on mobile and web applications for various clients.",
      requirements: ["Figma", "Adobe XD", "UI Design", "Prototyping"],
      category: "Design"
    },
    {
      id: 3,
      title: "Marketing Coordinator",
      company: "E-Commerce Hub",
      logo: "https://api.dicebear.com/7.x/shapes/svg?seed=ecommerce",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      salary: "45,000 - 60,000 BDT",
      posted: "1 week ago",
      deadline: "March 8, 2026",
      description: "We're seeking a creative marketing coordinator to help grow our e-commerce business through digital marketing campaigns.",
      requirements: ["Digital Marketing", "SEO", "Content Writing", "Social Media"],
      category: "Marketing"
    },
    {
      id: 4,
      title: "Data Analyst Intern",
      company: "Analytics Corp",
      logo: "https://api.dicebear.com/7.x/shapes/svg?seed=analytics",
      location: "Dhaka, Bangladesh",
      type: "Internship",
      salary: "30,000 - 40,000 BDT",
      posted: "3 days ago",
      deadline: "March 12, 2026",
      description: "Help us analyze large datasets and provide insights. Perfect opportunity to work with Python, SQL, and data visualization tools.",
      requirements: ["Python", "SQL", "Excel", "Data Analysis"],
      category: "Data"
    }
  ];

  const jobTypes = ["All", "Internship", "Full-time", "Part-time", "Remote"];

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Job Board</h1>
          <p className="text-gray-600">Find internships and career opportunities for UIU students</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <BookmarkPlus className="w-5 h-5" />
            Saved Jobs
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search by job title, company, or skills..."
                className="pl-10 bg-gray-50"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {jobTypes.map((type) => (
              <Badge
                key={type}
                variant="secondary"
                className="cursor-pointer hover:bg-blue-100 hover:text-blue-700 px-4 py-2"
              >
                {type}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: "Total Jobs", value: "500+", icon: Briefcase, color: "from-blue-500 to-cyan-500" },
          { label: "Internships", value: "234", icon: Clock, color: "from-purple-500 to-pink-500" },
          { label: "Full-time", value: "156", icon: Building, color: "from-green-500 to-emerald-500" },
          { label: "Remote", value: "89", icon: MapPin, color: "from-orange-500 to-red-500" }
        ].map((stat, idx) => (
          <Card key={idx} className="border-0 shadow-md overflow-hidden">
            <CardContent className="p-6">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Job Listings */}
      <div className="grid lg:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <Card key={job.id} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-6 space-y-4">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <Avatar className="w-full h-full">
                    <AvatarImage src={job.logo} />
                    <AvatarFallback>{job.company[0]}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="font-semibold text-gray-700">{job.company}</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge className="bg-blue-100 text-blue-700">{job.type}</Badge>
                    <Badge className="bg-green-100 text-green-700">{job.category}</Badge>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <BookmarkPlus className="w-5 h-5" />
                </Button>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {job.description}
              </p>

              {/* Requirements */}
              <div>
                <div className="text-sm font-semibold text-gray-700 mb-2">Required Skills:</div>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-700">
                      {req}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <DollarSign className="w-4 h-4 text-blue-600" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Posted {job.posted}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-4 h-4 text-red-600" />
                  <span className="text-red-600">Due: {job.deadline}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-gray-100">
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Apply Now
                </Button>
                <Button variant="outline" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg" className="border-2">
          Load More Jobs
        </Button>
      </div>
    </div>
  );
}
