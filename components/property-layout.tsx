import type React from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

interface PropertyLayoutProps {
  title: string
  description: string
  heroImage: string
  gallery: string[]
  amenities: Array<{
    icon: React.ReactNode
    name: string
  }>
  features: string[]
  price: string
  capacity: string
  location: string
  detailedDescription: string
  locationMap?: string
}

export function PropertyLayout({
  title,
  description,
  heroImage,
  gallery,
  amenities,
  features,
  price,
  capacity,
  location,
  locationMap: LocationMap,
  detailedDescription,
}: PropertyLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <img src={heroImage || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
          <p className="text-xl text-gray-200">{description}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">About This Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{detailedDescription}</p>
              </CardContent>
            </Card>

            {/* Features */}
            {/* <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card> */}

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 text-primary">{amenity.icon}</div>
                      <span className="text-foreground">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gallery */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gallery.map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-lg">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${title} gallery ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className=" top-24 mb-5">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Enquire Your Stay</CardTitle>
                <CardDescription>Reserve this beautiful property today</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {/* <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Price per night</span>
                    <span className="text-2xl font-bold text-primary">{price}</span>
                  </div> */}
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Capacity</span>
                    <span className="font-semibold">{capacity}</span>
                  </div>
                  {/* <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-semibold">{location}</span>
                  </div> */}
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <Link href="/contact">Enquire Now</Link>
                  </Button>
                  {/* <Button variant="outline" className="w-full bg-transparent" size="lg">
                    Check Availability
                  </Button> */}
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold mb-3">Contact Information</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+91 8600210629</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>thamosastays@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="relative w-full overflow-hidden rounded-xl border aspect-video">
              <iframe
                src={LocationMap}
                title="Map"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Book Your Stay?</h3>
          <p className="text-primary-foreground/80 mb-6">
            Contact us today to reserve this beautiful property and create unforgettable memories.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </footer>
    </div>
  )
}
