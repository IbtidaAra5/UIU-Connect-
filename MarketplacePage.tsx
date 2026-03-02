import { ShoppingBag, Search, Filter, Heart, MessageCircle, Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function MarketplacePage() {
  const items = [
    {
      id: 1,
      title: "Data Structures Textbook",
      price: "1,200 BDT",
      condition: "Like New",
      seller: "Sarah Ahmed",
      sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      image: "https://images.unsplash.com/photo-1758270705482-cee87ea98738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjb2xsYWJvcmF0aW9uJTIwY2FtcHVzfGVufDF8fHx8MTc3MjQ1MDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Books",
      posted: "2 hours ago"
    },
    {
      id: 2,
      title: "MacBook Pro 2023",
      price: "95,000 BDT",
      condition: "Excellent",
      seller: "Karim Hassan",
      sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=karim",
      image: "https://images.unsplash.com/photo-1686543971025-15aa01b5f7c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbGUlMjBzdHVkZW50JTIwcHJvZ3JhbW1lcnxlbnwxfHx8fDE3NzI0NTA4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Electronics",
      posted: "1 day ago"
    },
    {
      id: 3,
      title: "Scientific Calculator",
      price: "800 BDT",
      condition: "Good",
      seller: "Ayesha Khan",
      sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ayesha",
      image: "https://images.unsplash.com/photo-1702047135360-e549c2e1f7df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzIzNzE1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Stationery",
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Study Table & Chair",
      price: "5,500 BDT",
      condition: "Good",
      seller: "Rafiq Hassan",
      sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rafiq",
      image: "https://images.unsplash.com/photo-1768508948485-a7adc1f3427f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBuZXR3b3JraW5nJTIwZXZlbnQlMjBwZW9wbGV8ZW58MXx8fHwxNzcyMzg5NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Furniture",
      posted: "5 days ago"
    },
    {
      id: 5,
      title: "Engineering Graphics Set",
      price: "1,500 BDT",
      condition: "Like New",
      seller: "Nadia Ahmed",
      sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=nadia",
      image: "https://images.unsplash.com/photo-1758270705641-acf09b68a91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29sbGVnZSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NzI0NTA3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Stationery",
      posted: "1 week ago"
    },
    {
      id: 6,
      title: "Gaming Mouse",
      price: "2,200 BDT",
      condition: "Excellent",
      seller: "Tech Club UIU",
      sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=techclub",
      image: "https://images.unsplash.com/photo-1760131556605-7f2e63d00385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcyNDQxNzMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Electronics",
      posted: "2 days ago"
    }
  ];

  const categories = ["All", "Books", "Electronics", "Furniture", "Stationery", "Other"];

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Marketplace</h1>
          <p className="text-gray-600">Buy and sell items within the UIU community</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2">
          <Plus className="w-5 h-5" />
          List Item
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
                placeholder="Search for items..."
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

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: "Active Listings", value: "234", color: "from-blue-500 to-cyan-500" },
          { label: "Sold Today", value: "12", color: "from-green-500 to-emerald-500" },
          { label: "Your Listings", value: "3", color: "from-purple-500 to-pink-500" },
          { label: "Saved Items", value: "8", color: "from-orange-500 to-red-500" }
        ].map((stat, idx) => (
          <Card key={idx} className="border-0 shadow-md overflow-hidden">
            <CardContent className="p-6">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3`}>
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Item Listings */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item.id} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative h-48 overflow-hidden bg-gray-100">
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3">
                <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white shadow-md">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              <div className="absolute bottom-3 left-3">
                <Badge className="bg-blue-600 text-white">{item.category}</Badge>
              </div>
            </div>
            <CardContent className="p-4 space-y-3">
              <div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <div className="text-2xl font-bold text-blue-600">{item.price}</div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  {item.condition}
                </Badge>
                <span className="text-gray-500">{item.posted}</span>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={item.sellerAvatar} />
                  <AvatarFallback>{item.seller[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold truncate">{item.seller}</div>
                  <div className="text-xs text-gray-500">Seller</div>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Contact
                </Button>
                <Button variant="outline" className="flex-1">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg" className="border-2">
          Load More Items
        </Button>
      </div>
    </div>
  );
}
