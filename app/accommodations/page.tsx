"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, Users, MapPin, Star, Wifi, Car, Coffee, Utensils } from "lucide-react"

export default function AccommodationsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [priceFilter, setPriceFilter] = useState("all")

  const properties = [
    {
      title: "DIVINE STAY – Feel at Home",
      description: "Divine Stay offers 12 modern studios with a spacious terrace overlooking the city skyline and Aravalli Hills.",
      image: "/DivineStaysHero.jpeg",
      href: "/properties/divine-stays",
      features: ["Luxury Amenities", "Mountain View", "Private Balcony", "Premium Service"],
      price: "₹4,500",
      capacity: "2-4 Guests",
      category: "luxury",
      priceRange: "premium",
      amenities: ["WiFi", "Parking", "Kitchen", "AC",],
      rating: 4.9,
      reviews: 127,
    },
    {
      title: "RATAN STUDIO HOMESTAYS",
      description: "Ratan Studios are designed with a minimalistic yet stylish approach—clean, comfortable, and affordable.",
      image: "/RATANhero.jpeg",
      href: "/properties/ratan-studio",
      features: ["Studio Layout", "Kitchenette", "WiFi", "AC"],
      price: "₹2,200",
      capacity: "1-2 Guests",
      category: "studio",
      priceRange: "mid",
      amenities: ["WiFi", "Kitchen", "AC", "TV"],
      rating: 4.7,
      reviews: 89,
    },
    {
      title: "Budget Bliss Compact Studio",
      description: "Welcome to Budget Bliss Compact Studio, a thoughtfully designed urban stay located in Jaipur.",
      image: "/Budgethero.jpeg",
      href: "/properties/budget-studio",
      features: ["Studio Layout", "Kitchenette", "WiFi", "AC"],
      price: "₹1,200",
      capacity: "1-2 Guests",
      category: "studio",
      priceRange: "budget",
     amenities: ["WiFi", "Kitchen", "AC", "TV"],
      rating: 4.5,
      reviews: 156,
    },
    {
      title: "4pods (1BHK)",
      description: "Welcome to Four Pods, a collection of beautifully designed 1BHK private stays.",
      image: "/4podshero.jpeg",
      href: "/properties/4pods-1bhk",
      features: ["1 Bedroom", "Living Area", "Kitchen", "Family Friendly"],
      price: "₹3,200",
      capacity: "2-4 Guests",
      category: "apartment",
      priceRange: "mid",
      amenities: ["WiFi", "Parking", "Kitchen", "AC", ],
      rating: 4.8,
      reviews: 94,
    },
    {
      title: "THAMOSA 2BHK",
      description: "We have 6 uniquely designed 2BHK units with a minimalistic yet stylish approach—clean.",
      image: "/THAMOSA2BHKhero.jpeg",
      href: "/properties/premium-2bhks",
      features: ["2 Bedrooms", "Spacious", "Premium Interiors", "Group Friendly"],
      price: "₹5,500",
      capacity: "4-6 Guests",
      category: "apartment",
      priceRange: "premium",
      amenities: ["WiFi", "Parking", "Kitchen", "AC", ],
      rating: 4.9,
      reviews: 73,
    },
    {
      title: "The Baggan Farmstay",
      description: "Escape the noise of the city and immerse yourself in nature at The Baggan",
      image: "/TheBagganhero.jpeg",
      href: "/properties/bagaan-farm-villa",
      features: ["Farm Experience", "Organic Garden", "Nature Views", "Unique Stay"],
      price: "₹4,000",
      capacity: "4-8 Guests",
      category: "villa",
      priceRange: "premium",
      amenities: ["WiFi", "Parking", "Kitchen", "Pool"],
      rating: 5.0,
      reviews: 42,
    },
  ]

  const filteredProperties = properties.filter((property) => {
    const categoryMatch = selectedFilter === "all" || property.category === selectedFilter
    const priceMatch = priceFilter === "all" || property.priceRange === priceFilter
    return categoryMatch && priceMatch
  })

  const amenityIcons = {
    WiFi: <Wifi className="w-4 h-4" />,
    Parking: <Car className="w-4 h-4" />,
    Kitchen: <Utensils className="w-4 h-4" />,
    AC: <Coffee className="w-4 h-4" />,
    TV: <Coffee className="w-4 h-4" />,
    Nature: <Coffee className="w-4 h-4" />,
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/RATAN2.jpeg" alt="Our Accommodations" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Accommodations</h1>
          <p className="text-xl text-gray-200">
            Discover the perfect stay for your needs - from luxury retreats to budget-friendly options
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filters */}
        {/* <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Filter className="w-5 h-5" />
                Filter Accommodations
              </CardTitle>
              <CardDescription>Find the perfect property for your stay</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Property Type</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: "all", label: "All Properties" },
                      { value: "luxury", label: "Luxury" },
                      { value: "studio", label: "Studios" },
                      { value: "apartment", label: "Apartments" },
                      { value: "villa", label: "Farm Villa" },
                    ].map((filter) => (
                      <Button
                        key={filter.value}
                        variant={selectedFilter === filter.value ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedFilter(filter.value)}
                        className={
                          selectedFilter === filter.value ? "bg-primary hover:bg-primary/90" : "bg-transparent"
                        }
                      >
                        {filter.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Price Range</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: "all", label: "All Prices" },
                      { value: "budget", label: "Budget (₹1,000-2,000)" },
                      { value: "mid", label: "Mid-range (₹2,000-4,000)" },
                      { value: "premium", label: "Premium (₹4,000+)" },
                    ].map((filter) => (
                      <Button
                        key={filter.value}
                        variant={priceFilter === filter.value ? "default" : "outline"}
                        size="sm"
                        onClick={() => setPriceFilter(filter.value)}
                        className={priceFilter === filter.value ? "bg-primary hover:bg-primary/90" : "bg-transparent"}
                      >
                        {filter.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section> */}

        {/* Properties Grid */}
        <section className="mb-16">
          {/* <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-primary">Available Properties ({filteredProperties.length})</h2>
            <div className="text-muted-foreground">
              Showing {filteredProperties.length} of {properties.length} properties
            </div>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {/* <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">{property.price}/night</Badge>
                  </div> */}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-primary">{property.title}</CardTitle>
                    {/* <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{property.rating}</span>
                      <span className="text-sm text-muted-foreground">({property.reviews})</span>
                    </div> */}
                  </div>
                  <CardDescription className="text-muted-foreground">{property.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{property.capacity}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {property.amenities.slice(0, 4).map((amenity, i) => (
                        <div key={i} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded">
                          {amenityIcons[amenity as keyof typeof amenityIcons]}
                          <span>{amenity}</span>
                        </div>
                      ))}
                      {property.amenities.length > 4 && (
                        <div className="text-xs bg-muted px-2 py-1 rounded">+{property.amenities.length - 4} more</div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button asChild className="flex-1">
                        <a href={property.href}>View Details</a>
                      </Button>
                      {/* <Button variant="outline" className="flex-1 bg-transparent">
                        Book Now
                      </Button> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Our Accommodations */}
        <section>
          <Card className="bg-card">
            <CardHeader className="text-center py-10">
              <CardTitle className="text-3xl text-primary ">Why Choose Our Accommodations?</CardTitle>
              <CardDescription className="text-lg">
                Every property in our portfolio is carefully selected and maintained to ensure exceptional experiences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Quality Assured</h3>
                  <p className="text-muted-foreground">
                    Every property meets our strict standards for cleanliness, comfort, and amenities.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Prime Locations</h3>
                  <p className="text-muted-foreground">
                    Strategically located properties offering easy access to attractions and natural beauty.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Personal Service</h3>
                  <p className="text-muted-foreground">
                    Dedicated hosts and 24/7 support ensure your stay is comfortable and memorable.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
