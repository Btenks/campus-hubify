
import { useState } from "react";
import { Search, Filter, Grid3X3, List, ShoppingCart, DollarSign, Book, Laptop, Tag, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  { id: "all", name: "All Items", icon: ShoppingCart },
  { id: "textbooks", name: "Textbooks", icon: Book },
  { id: "electronics", name: "Electronics", icon: Laptop },
  { id: "furniture", name: "Furniture", icon: DollarSign },
  { id: "clothing", name: "Clothing", icon: Tag }
];

const items = [
  {
    id: 1,
    title: "Calculus Textbook",
    price: "$45",
    condition: "Like New",
    seller: "Alex J.",
    category: "textbooks",
    image: "/lovable-uploads/01f0565d-8875-4e9a-b259-d3412a42a264.png",
    location: "Campus Library",
    listed: "2 days ago"
  },
  {
    id: 2,
    title: "Desk Lamp",
    price: "$15",
    condition: "Good",
    seller: "Jamie S.",
    category: "furniture",
    image: "/lovable-uploads/80aae0b1-6a90-49f5-8f08-0fbc87e7e62e.png",
    location: "North Dorm",
    listed: "1 week ago"
  },
  {
    id: 3,
    title: "Scientific Calculator",
    price: "$25",
    condition: "Used",
    seller: "Taylor W.",
    category: "electronics",
    image: "/lovable-uploads/dde4d6eb-fc51-4e41-be03-fe12e36ad649.png",
    location: "Engineering Building",
    listed: "3 days ago"
  },
  {
    id: 4,
    title: "Computer Science Textbook",
    price: "$50",
    condition: "New",
    seller: "Casey B.",
    category: "textbooks",
    image: "/lovable-uploads/6107d683-e902-4bac-a382-ee797f404b1b.png",
    location: "South Campus",
    listed: "5 days ago"
  },
  {
    id: 5,
    title: "Bluetooth Headphones",
    price: "$35",
    condition: "Like New",
    seller: "Jordan L.",
    category: "electronics",
    image: "/lovable-uploads/32eca6a6-6af4-4912-a87c-2cd04c0bdadc.png",
    location: "Student Center",
    listed: "1 day ago"
  },
  {
    id: 6,
    title: "University Hoodie",
    price: "$20",
    condition: "Good",
    seller: "Riley P.",
    category: "clothing",
    image: "/lovable-uploads/2ebfe90c-a7e7-4485-960f-8044d93b5ca7.png",
    location: "Athletics Building",
    listed: "4 days ago"
  }
];

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const filteredItems = selectedCategory === "all" 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <main className="ml-16 md:ml-64 p-4 md:p-8 animate-fade-in">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Campus Marketplace</h1>
            <p className="text-muted-foreground mt-1">Buy and sell items within your campus community</p>
          </div>
          <Button className="self-start md:self-auto">
            <Tag className="mr-2 h-4 w-4" /> List an Item
          </Button>
        </div>
        
        <div className="glass p-6 rounded-lg mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search for items..." 
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Filters
              </Button>
              <Button variant="outline">
                <ArrowUpDown className="mr-2 h-4 w-4" /> Sort
              </Button>
              <div className="border border-border rounded-md flex">
                <Button
                  variant={viewMode === "grid" ? "secondary" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "secondary" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex overflow-x-auto pb-2 mb-6 gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className="rounded-full px-4"
                onClick={() => setSelectedCategory(category.id)}
              >
                <category.icon className="mr-2 h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>
          
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-muted relative">
                    <img 
                      src={item.image || "/placeholder.svg"} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded font-medium">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">Condition: {item.condition} • Seller: {item.seller}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{item.listed}</span>
                      <Button size="sm">Contact Seller</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <div key={item.id} className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-48 bg-muted relative">
                      <img 
                        src={item.image || "/placeholder.svg"} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded font-medium">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">Condition: {item.condition} • Seller: {item.seller}</p>
                      <p className="text-sm text-muted-foreground mb-1">Location: {item.location}</p>
                      <p className="text-sm text-muted-foreground">Listed: {item.listed}</p>
                      <div className="mt-auto pt-4 flex justify-end">
                        <Button>Contact Seller</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Marketplace;
