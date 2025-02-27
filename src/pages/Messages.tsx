
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { 
  Search, 
  Edit, 
  Phone, 
  Video, 
  Paperclip, 
  Image as ImageIcon, 
  Send, 
  Info, 
  MoreVertical,
  UserCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sidebar } from "@/components/Sidebar";

const Messages = () => {
  const { user } = useUser();
  const [message, setMessage] = useState("");

  const contacts = [
    { id: 1, name: "Alex Johnson", status: "online", avatar: "/lovable-uploads/dde4d6eb-fc51-4e41-be03-fe12e36ad649.png", lastMessage: "Hey, how's your project going?" },
    { id: 2, name: "Jamie Smith", status: "offline", avatar: "/lovable-uploads/2ebfe90c-a7e7-4485-960f-8044d93b5ca7.png", lastMessage: "Can we meet at the library tomorrow?" },
    { id: 3, name: "Taylor Williams", status: "online", avatar: "", lastMessage: "Don't forget the group presentation!" },
    { id: 4, name: "Casey Brown", status: "online", avatar: "", lastMessage: "Thanks for your help!" },
    { id: 5, name: "Jordan Lee", status: "offline", avatar: "", lastMessage: "See you at the study session" }
  ];

  const messages = [
    { id: 1, senderId: 1, text: "Hey there! How's your day going?", time: "10:30 AM" },
    { id: 2, senderId: "me", text: "Pretty good, thanks! Just working on the assignment for Prof. Williams.", time: "10:32 AM" },
    { id: 3, senderId: 1, text: "Oh, the one due next week? How's it coming along?", time: "10:35 AM" },
    { id: 4, senderId: "me", text: "Almost done with the first part. It's pretty challenging but interesting!", time: "10:36 AM" },
    { id: 5, senderId: 1, text: "Nice! Would you be up for a study session this weekend? I'm stuck on a few concepts.", time: "10:40 AM" },
    { id: 6, senderId: "me", text: "Sure, that sounds good. How about Saturday afternoon at the library?", time: "10:41 AM" },
    { id: 7, senderId: 1, text: "Perfect! Let's meet at 2pm. I'll bring my notes and we can go through everything together.", time: "10:45 AM" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-16 md:ml-64 p-4 md:p-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">Messages</h1>
        
        <div className="glass rounded-lg overflow-hidden border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 h-[70vh]">
            {/* Contacts sidebar */}
            <div className="border-r border-border md:col-span-1 flex flex-col">
              <div className="p-4 border-b border-border">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="Search contacts..." 
                    className="pl-9"
                  />
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                {contacts.map((contact) => (
                  <div 
                    key={contact.id} 
                    className={`p-4 border-b border-border flex items-center gap-3 hover:bg-accent/40 cursor-pointer transition-colors ${contact.id === 1 ? 'bg-accent/60' : ''}`}
                  >
                    <div className="relative flex-shrink-0">
                      {contact.avatar ? (
                        <img 
                          src={contact.avatar} 
                          alt={contact.name} 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <UserCircle className="w-10 h-10 text-muted-foreground" />
                      )}
                      <span 
                        className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${contact.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}
                      ></span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-medium truncate">{contact.name}</h3>
                        <span className="text-xs text-muted-foreground">
                          {contact.id === 1 ? 'Now' : '2h ago'}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-border mt-auto">
                <Button className="w-full">
                  <Edit className="mr-2 h-4 w-4" /> New Message
                </Button>
              </div>
            </div>
            
            {/* Chat area */}
            <div className="md:col-span-2 flex flex-col">
              {/* Chat header */}
              <div className="p-4 border-b border-border flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img 
                    src={contacts[0].avatar} 
                    alt={contacts[0].name} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{contacts[0].name}</h3>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> Online
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Info className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex ${msg.senderId === "me" ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[70%] px-4 py-2 rounded-lg ${
                        msg.senderId === "me" 
                          ? 'bg-primary text-primary-foreground rounded-br-none' 
                          : 'bg-accent rounded-bl-none'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <span className={`text-xs block mt-1 ${msg.senderId === "me" ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Message input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ImageIcon className="h-5 w-5" />
                  </Button>
                  <Input 
                    placeholder="Type your message..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Messages;
