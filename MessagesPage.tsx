import { Search, Send, Phone, Video, MoreVertical, Paperclip, Smile, Check, CheckCheck } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { useState } from "react";
import { ScrollArea } from "../components/ui/scroll-area";

export function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(0);

  const conversations = [
    {
      id: 1,
      name: "Sarah Ahmed",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      lastMessage: "Thanks for sharing the notes!",
      timestamp: "2m ago",
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: "Study Group - ML",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=group",
      lastMessage: "Tomorrow's meeting at 3 PM",
      timestamp: "1h ago",
      unread: 5,
      online: false
    },
    {
      id: 3,
      name: "Dr. Rahman",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahman",
      lastMessage: "Your project proposal looks good",
      timestamp: "3h ago",
      unread: 0,
      online: false
    },
    {
      id: 4,
      name: "Ayesha Khan",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ayesha",
      lastMessage: "See you at the event!",
      timestamp: "1d ago",
      unread: 0,
      online: true
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "them",
      content: "Hey! Did you complete the assignment?",
      timestamp: "10:30 AM",
      status: "read"
    },
    {
      id: 2,
      sender: "me",
      content: "Yes! Just finished it. Want me to share my notes?",
      timestamp: "10:32 AM",
      status: "read"
    },
    {
      id: 3,
      sender: "them",
      content: "That would be amazing! Thank you so much 🙏",
      timestamp: "10:33 AM",
      status: "read"
    },
    {
      id: 4,
      sender: "me",
      content: "Here are the notes and some extra resources I found helpful",
      timestamp: "10:35 AM",
      status: "delivered"
    },
    {
      id: 5,
      sender: "them",
      content: "Thanks for sharing the notes!",
      timestamp: "10:36 AM",
      status: "read"
    }
  ];

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Conversations List */}
      <div className="w-full lg:w-80 xl:w-96 border-r border-gray-200 bg-white flex flex-col">
        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search messages..."
              className="pl-10 bg-gray-50"
            />
          </div>
        </div>

        {/* Conversation List */}
        <ScrollArea className="flex-1">
          <div className="divide-y divide-gray-100">
            {conversations.map((conversation, idx) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedChat(idx)}
                className={`p-4 cursor-pointer transition-colors ${
                  selectedChat === idx
                    ? "bg-blue-50 border-l-4 border-blue-600"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex gap-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={conversation.avatar} />
                      <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                    </Avatar>
                    {conversation.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold truncate">{conversation.name}</span>
                      <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                        {conversation.timestamp}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600 truncate flex-1">
                        {conversation.lastMessage}
                      </p>
                      {conversation.unread > 0 && (
                        <Badge className="ml-2 bg-blue-600 text-white">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="hidden lg:flex flex-1 flex-col bg-gray-50">
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar>
                  <AvatarImage src={conversations[selectedChat]?.avatar} />
                  <AvatarFallback>{conversations[selectedChat]?.name[0]}</AvatarFallback>
                </Avatar>
                {conversations[selectedChat]?.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                )}
              </div>
              <div>
                <div className="font-semibold">{conversations[selectedChat]?.name}</div>
                <div className="text-sm text-gray-500">
                  {conversations[selectedChat]?.online ? "Online" : "Offline"}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Phone className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-6">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-md px-4 py-3 rounded-2xl ${
                    message.sender === "me"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-white text-gray-800 shadow-sm"
                  }`}
                >
                  <p className="leading-relaxed">{message.content}</p>
                  <div
                    className={`flex items-center gap-1 mt-1 text-xs ${
                      message.sender === "me" ? "text-blue-100 justify-end" : "text-gray-500"
                    }`}
                  >
                    <span>{message.timestamp}</span>
                    {message.sender === "me" && (
                      <span>
                        {message.status === "delivered" ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <CheckCheck className="w-3 h-3" />
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Smile className="w-5 h-5" />
            </Button>
            <Input
              placeholder="Type a message..."
              className="flex-1 bg-gray-50"
            />
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile View Message */}
      <div className="flex lg:hidden items-center justify-center flex-1 bg-gray-50 p-8">
        <div className="text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-600">Select a conversation to start messaging</p>
        </div>
      </div>
    </div>
  );
}
