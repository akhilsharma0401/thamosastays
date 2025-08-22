import { Navigation } from "@/components/navigation"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Star } from "lucide-react"

const properties = [
  {
    title: "DIVINE STAY – Feel at Home",
    description:
      "Divine Stay offers 12 modern studios with a spacious terrace overlooking the city skyline and Aravalli Hills.",
    image: "/DivineStaysHero.jpeg",
    href: "/properties/divine-stays",
    bookNow:"/contact",
    features: ["Fully furnished", "Ensuite kitchenette", "Housekeeping", "Induction range"],
  },
  {
    title: "RATAN STUDIO HOMESTAYS",
    description: "Ratan Studios are designed with a minimalistic yet stylish approach—clean, comfortable, and affordable.",
    image: "/RATANhero.jpeg",
    href: "/properties/ratan-studio",
    bookNow:"/contact",
    features: ["Fully furnished A/C rooms ", "Kitchenette", "High-speed Wi-Fi", "Housekeeping & laundry"],
  },
  {
    title: "Budget Bliss Compact Studio",
    description: "Welcome to Budget Bliss Compact Studio, a thoughtfully designed urban stay located in Jaipur.",
    image: "/Budgethero.jpeg",
    href: "/properties/budget-studio",
    bookNow:"/contact",
    features: ["Fully furnished rooms ", "Ensuite kitchenette", "High-speed Wi-Fi", "Housekeeping"],
  },
  {
    title: "4pods (1BHK)",
    description: "Welcome to Four Pods, a collection of beautifully designed 1BHK private stays",
    image: "/4podshero.jpeg",
    href: "/properties/4pods-1bhk",
    bookNow:"/contact",
    features: ["Fully furnished rooms ", "Ensuite kitchenette", "High-speed Wi-Fi", "Housekeeping"],
  },
  {
    title: "THAMOSA 2BHK",
    description: "We have 6 uniquely designed 2BHK units with a minimalistic yet stylish approach—clean.",
    image: "/THAMOSA2BHKhero.jpeg",
    href: "/properties/premium-2bhks",
    bookNow:"/contact",
    features: ["Fully furnished rooms ", "Ensuite kitchenette", "High-speed Wi-Fi", "Housekeeping"],
  },
  {
    title: "The Baggan Farmstay",
    description: "Escape the noise of the city and immerse yourself in nature at The Baggan",
    image: "/TheBagganhero.jpeg",
    href: "/properties/bagaan-farm-villa",
    bookNow:"/contact",
    features: ["Fully furnished rooms ", "Ensuite kitchenette", "High-speed Wi-Fi", "Housekeeping"],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/heroImage.jpeg" alt="Thamosa Stays" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Thamosa Stays</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Your Home Away From Home - Experience Comfort, Warmth, and Authentic Hospitality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-white border-white text-black hover:bg-white hover:text-primary">
              Explore Our Properties
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white border-white text-black hover:bg-white hover:text-primary"
            >
              Book Your Stay
            </Button>
          </div>
        </div>
      </section>

      {/* Properties Showcase */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Accommodations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse range of carefully curated homestays, each offering unique experiences and comfort
            tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Thamosa Stays?</h2>
            <p className="text-lg text-muted-foreground">
              Experience the difference with our personalized hospitality and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-white p-6">
              <CardContent className="pt-6 ">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Each property is carefully maintained to ensure the highest standards of comfort and cleanliness.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
                <p className="text-muted-foreground">
                  Strategically located properties offering easy access to local attractions and natural beauty.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Our dedicated team is always available to ensure your stay is comfortable and memorable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    
    </div>
  )
}
