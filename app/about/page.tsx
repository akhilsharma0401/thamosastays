import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Award, Leaf, Star, MapPin } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Warm Hospitality",
      description: "We treat every guest like family, ensuring personalized care and attention to detail.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Connection",
      description: "We connect travelers with local culture and authentic experiences.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Every property meets our high standards of cleanliness, comfort, and safety.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Tourism",
      description: "We promote eco-friendly practices and support local communities.",
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      comment:
        "Thamosa Stays exceeded our expectations! The Divine Stays property was absolutely beautiful, and the hosts were incredibly welcoming. It truly felt like a home away from home.",
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      comment:
        "The Bagaan Farm Villa was a unique experience for our family. Kids loved the farm activities, and we enjoyed the fresh, organic meals. Highly recommended!",
    },
    {
      name: "Sarah Johnson",
      location: "UK",
      rating: 5,
      comment:
        "As a solo traveler, I felt completely safe and comfortable at Ratan Studio. The location was perfect, and the amenities were exactly what I needed.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/4podshero.jpeg" alt="About Thamosa Stays" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Thamosa Stays</h1>
          <p className="text-xl text-gray-200">
            Creating memorable experiences through authentic hospitality and comfortable accommodations
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Thamosa Stays was born from a simple belief: that travel should feel like coming home, not just
                  visiting a place. Founded with the vision of creating authentic homestay experiences, we have
                  carefully curated a collection of properties that offer comfort, warmth, and genuine hospitality.
                </p>
                <p>
                  Our journey began with a single property and a commitment to providing travelers with more than just
                  accommodation. We wanted to create spaces where memories are made, connections are formed, and every
                  guest feels valued and cared for.
                </p>
                <p>
                  Today, Thamosa Stays has grown to include six unique properties, each with its own character and
                  charm. From luxury accommodations to budget-friendly options, from urban studios to rural farm
                  experiences, we offer something special for every type of traveler.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/Budgethero.jpeg"
                alt="Thamosa Stays Interior"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape the experience we create for our guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What Makes Us Special */}
        <section className="mb-16">
          <Card className="bg-card">
            <CardHeader className="text-center py-4 md:py-10">
              <CardTitle className="text-3xl text-primary">What Makes Us Special</CardTitle>
              <CardDescription className="text-lg">
                Discover the Thamosa Stays difference that keeps our guests coming back
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Diverse Property Portfolio</h4>
                  <p className="text-muted-foreground text-sm">
                    From luxury divine stays to unique farm experiences, we offer accommodations for every preference
                    and budget.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Local Expertise</h4>
                  <p className="text-muted-foreground text-sm">
                    Our team provides insider knowledge about local attractions, dining, and hidden gems in the area.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">24/7 Support</h4>
                  <p className="text-muted-foreground text-sm">
                    Round-the-clock assistance ensures your stay is comfortable and any concerns are addressed promptly.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Flexible Booking</h4>
                  <p className="text-muted-foreground text-sm">
                    Easy booking process with flexible cancellation policies to accommodate your travel plans.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Authentic Experiences</h4>
                  <p className="text-muted-foreground text-sm">
                    We connect you with local culture, traditions, and experiences that create lasting memories.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Sustainable Practices</h4>
                  <p className="text-muted-foreground text-sm">
                    Committed to eco-friendly operations and supporting local communities through responsible tourism.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Guest Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What Our Guests Say</h2>
            <p className="text-lg text-muted-foreground">Real experiences from travelers who have stayed with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Commitment */}
        <section>
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                At Thamosa Stays, we are committed to providing exceptional hospitality that goes beyond accommodation.
                We strive to create experiences that enrich your journey and leave you with cherished memories. Your
                comfort, safety, and satisfaction are our top priorities, and we continuously work to exceed your
                expectations.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
