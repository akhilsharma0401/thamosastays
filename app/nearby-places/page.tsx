import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Star, Camera, Mountain, Utensils, ShoppingBag, TreePine } from "lucide-react"

export default function NearbyPlacesPage() {
  const attractions = [
    {
      name: "Jhalana Leopard Safari",
      category: "Viewpoint",
      distance: "2.5 km",
      time: "15 min drive",
      rating: 4.8,
      description: "Jhalana leopard safari is the perfect place for wildlife lovers and safari enthusiasts. With so many leopards living in this small area, they are quite easy to spot during the safari.",
      image: "/jhalana-leopard.jpeg",
      highlights: ["Photography", "Educational", "Hiking Trail"],
    },
    {
      name: "Kulish Biodiversity Park",
      category: "Nature",
      distance: "1.8 km",
      time: "10 min walk",
      rating: 4.6,
      description: "Kulish Smriti Van is famous for its dense vegetation, nature trails and bird watching. It is also a hub for Yoga & other activities. The park is a must visit for its greenery and the beauty of flora and fauna.",
      image: "/kamla_nehru_biodiversity_park.jpg",
      highlights: ["History", "Architecture", "Peaceful"],
    },
    {
      name: "Jawahar Kala Kendra",
      category: "Heritage",
      distance: "3.2 km",
      time: "20 min drive",
      rating: 4.7,
      description: "A multifaceted arts center & cafe with exhibition galleries in a unique building. JKK is focused on the preservation & promotion of the various genres of Indian art & culture; it further embellishes the visual & cultural heritage of Jaipur.",
      image: "/jawahar-kala-kendra.jpg",
      highlights: ["Guided Tours", "Shopping", "Educational"],
    },
    
  ]

  const restaurants = [
    {
      name: "Mountain View Restaurant",
      cuisine: "Multi-cuisine",
      distance: "1.5 km",
      priceRange: "₹₹",
      rating: 4.7,
      specialties: ["Local Thali", "Continental", "Chinese"],
    },
    {
      name: "Organic Farm Kitchen",
      cuisine: "Farm-to-Table",
      distance: "2.8 km",
      priceRange: "₹₹₹",
      rating: 4.9,
      specialties: ["Organic Meals", "Fresh Vegetables", "Healthy Options"],
    },
    {
      name: "Street Food Corner",
      cuisine: "Local Street Food",
      distance: "1.0 km",
      priceRange: "₹",
      rating: 4.3,
      specialties: ["Chaat", "Local Snacks", "Fresh Juices"],
    },
    {
      name: "Heritage Dining Hall",
      cuisine: "Traditional",
      distance: "2.2 km",
      priceRange: "₹₹",
      rating: 4.6,
      specialties: ["Regional Cuisine", "Traditional Recipes", "Cultural Experience"],
    },
  ]

  const categoryIcons = {
    Viewpoint: <Mountain className="w-5 h-5" />,
    Heritage: <Camera className="w-5 h-5" />,
    Nature: <TreePine className="w-5 h-5" />,
    Dining: <Utensils className="w-5 h-5" />,
    Adventure: <Mountain className="w-5 h-5" />,
    Shopping: <ShoppingBag className="w-5 h-5" />,
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/Patrika_gate_Jaipur-banner.jpg" alt="Nearby Places" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Nearby Places</h1>
          <p className="text-xl text-gray-200">
            Discover amazing attractions, dining, and experiences just minutes from your stay
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Overview */}
        <section className="mb-16">
          <Card className="bg-card">
            <CardHeader className="text-center py-2 md:py-8">
              <CardTitle className="text-3xl text-primary">Perfect Location</CardTitle>
              <CardDescription className="text-lg">
                Our properties are strategically located to give you easy access to the best the region has to offer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Attractions Nearby</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-muted-foreground">Dining Options</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5 min</div>
                  <div className="text-muted-foreground">To Town Center</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Local Support</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Attractions */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Top Attractions</h2>
            <p className="text-lg text-muted-foreground">
              Must-visit places that showcase the natural beauty and cultural richness of our region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={attraction.image || "/placeholder.svg"}
                    alt={attraction.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      {categoryIcons[attraction.category as keyof typeof categoryIcons]}
                      <Badge variant="secondary">{attraction.category}</Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{attraction.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary">{attraction.name}</CardTitle>
                  <CardDescription>{attraction.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{attraction.distance}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{attraction.time}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {attraction.highlights.map((highlight, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Dining Options */}
        {/* <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Dining & Restaurants</h2>
            <p className="text-lg text-muted-foreground">
              Savor local flavors and international cuisine at these recommended dining spots
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurants.map((restaurant, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">{restaurant.name}</h3>
                      <p className="text-muted-foreground">{restaurant.cuisine}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{restaurant.rating}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{restaurant.priceRange}</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{restaurant.distance} away</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.map((specialty, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}

        {/* Local Tips */}
        <section>
          <Card className="bg-primary text-primary-foreground">
            <CardHeader className="text-center py-2 md:py-8">
              <CardTitle className="text-3xl">Local Tips & Recommendations</CardTitle>
              <CardDescription className="text-primary-foreground/90 text-lg">
                Insider advice from our local team to make the most of your visit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-5">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">Best Times to Visit</h4>
                  <ul className="space-y-2 text-primary-foreground/90">
                    <li>• Early morning (6-8 AM) for sunrise views and peaceful temple visits</li>
                    <li>• Late afternoon (4-6 PM) for golden hour photography at viewpoints</li>
                    <li>• Evening (7-9 PM) for local market exploration and street food</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">What to Bring</h4>
                  <ul className="space-y-2 text-primary-foreground/90">
                    <li>• Comfortable walking shoes for temple and market visits</li>
                    <li>• Camera for capturing stunning landscapes and architecture</li>
                    <li>• Light jacket for early morning and evening outings</li>
                    <li>• Reusable water bottle to stay hydrated during activities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
