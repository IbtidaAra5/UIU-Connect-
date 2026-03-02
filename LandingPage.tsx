import { Link } from "react-router";
import { GraduationCap, Users, MessageCircle, Calendar, Briefcase, ShoppingBag, Shield, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                UIU Connect+
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="ghost" className="text-gray-700">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                  🎓 For UIU Community
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Connect, Collaborate,
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Grow Together
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A professional social networking platform designed exclusively for the United International University community. Connect with students, faculty, and alumni.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto">
                    Join UIU Connect+
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">10K+</div>
                  <div className="text-gray-600">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-gray-600">Clubs & Groups</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270705482-cee87ea98738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjb2xsYWJvcmF0aW9uJTIwY2FtcHVzfGVufDF8fHx8MTc3MjQ1MDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="University students collaborating"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features for Everyone</h2>
            <p className="text-xl text-gray-600">Everything you need to connect and collaborate with your university community</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Social Networking",
                description: "Connect with students, faculty, and alumni. Share posts, like, comment, and build your professional network.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: MessageCircle,
                title: "Real-time Messaging",
                description: "Direct messaging with instant notifications. Chat with individuals or create group conversations.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Calendar,
                title: "Events & Activities",
                description: "Stay updated with campus events, workshops, and activities. RSVP and manage your schedule.",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: Briefcase,
                title: "Job Board",
                description: "Explore internships, career opportunities, and job postings tailored for UIU students.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: ShoppingBag,
                title: "Marketplace",
                description: "Buy and sell items within the UIU community. Books, electronics, and more.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Shield,
                title: "Secure & Moderated",
                description: "Admin-approved content ensures a safe, professional environment for all members.",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((feature, idx) => (
              <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Role-Based Access */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built for Every Role</h2>
            <p className="text-xl text-gray-600">Tailored experiences for students, faculty, alumni, staff, and clubs</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { role: "Students", icon: "🎓", color: "from-blue-500 to-cyan-500" },
              { role: "Faculty", icon: "👨‍🏫", color: "from-purple-500 to-pink-500" },
              { role: "Alumni", icon: "🎯", color: "from-green-500 to-emerald-500" },
              { role: "Staff", icon: "💼", color: "from-orange-500 to-red-500" },
              { role: "Clubs", icon: "🎪", color: "from-indigo-500 to-purple-500" }
            ].map((item, idx) => (
              <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white cursor-pointer overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 overflow-hidden">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center text-white">
                <div>
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-4xl font-bold mb-2">10,000+</div>
                  <div className="text-blue-100">Active Members</div>
                </div>
                <div>
                  <Users className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-blue-100">Active Clubs</div>
                </div>
                <div>
                  <Calendar className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-4xl font-bold mb-2">200+</div>
                  <div className="text-blue-100">Monthly Events</div>
                </div>
                <div>
                  <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-blue-100">Job Postings</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-600">Hear from students, faculty, and alumni who use UIU Connect+ daily</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Ahmed",
                role: "CSE Student, Batch 54",
                image: "https://images.unsplash.com/photo-1758270705641-acf09b68a91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29sbGVnZSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NzI0NTA3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
                quote: "UIU Connect+ made it so easy to find study groups and connect with seniors. The marketplace feature helped me buy all my textbooks!"
              },
              {
                name: "Dr. Rahman",
                role: "Faculty, EEE Department",
                image: "https://images.unsplash.com/photo-1768508948485-a7adc1f3427f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBuZXR3b3JraW5nJTIwZXZlbnQlMjBwZW9wbGV8ZW58MXx8fHwxNzcyMzg5NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
                quote: "A fantastic platform for sharing course materials and staying connected with students. The document management system is excellent."
              },
              {
                name: "Karim Hassan",
                role: "Alumni, Software Engineer",
                image: "https://images.unsplash.com/photo-1760131556605-7f2e63d00385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcyNDQxNzMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
                quote: "Even after graduation, I stay connected with my juniors and colleagues. The job board feature is great for posting opportunities!"
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 overflow-hidden">
            <CardContent className="p-12 text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Ready to Join UIU Connect+?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of UIU community members who are already connected and collaborating.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                    Create Account
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Sign In
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-8 h-8" />
                <span className="text-xl font-bold">UIU Connect+</span>
              </div>
              <p className="text-gray-400">
                Connecting the UIU community for collaboration and growth.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 UIU Connect+. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
