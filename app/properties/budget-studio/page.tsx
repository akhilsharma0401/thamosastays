import { PropertyLayout } from "@/components/property-layout"
import { Wifi, Coffee, Tv, Wind, Car, CheckCircle } from "lucide-react"

export default function BudgetStudioPage() {
  const propertyData = {
    title: "Budget Bliss Compact Studio",
    description: "Welcome to Budget Bliss Compact Studio, a thoughtfully designed urban stay located in the heart of Jaipur’s well-connected and secure neighbourhood.",
    heroImage: "/Budgethero.jpeg",
    gallery: ["/Budget4.jpeg","/Budget3.jpeg", "/Budget2.jpeg", ],
    amenities: [
      { icon: <Wifi className="w-full h-full" />, name: "Free WiFi" },
      { icon: <Coffee className="w-full h-full" />, name: "Coffee/Tea" },
      { icon: <Tv className="w-full h-full" />, name: "TV" },
      { icon: <Wind className="w-full h-full" />, name: "Fan/AC" },
      { icon: <Car className="w-full h-full" />, name: "Free Parking" },
      { icon: <CheckCircle className="w-full h-full" />, name: "Clean & Safe" },
    ],
    features: [
      "Budget Friendly",
      "Clean & Comfortable",
      "Basic Amenities",
      "Great Value",
      "Safe Environment",
      "Friendly Service",
      "Central Location",
      "Easy Check-in",
    ],
    price: "₹1,200",
    capacity: "1-2 Guests",
    location: "Malviya Nagar, Jaipur",
    detailedDescription: `Welcome to Budget Bliss Compact Studio, a thoughtfully designed urban stay located in the heart of Jaipur’s well-connected and secure neighbourhood. Whether you're a solo traveller, remote worker, business guest, or medical visitor, this compact living experience offers privacy, comfort, and convenience without stretching your budget. We ensuring you to complete privacy, and a feeling of personal space that’s rare in typical budget accommodations.
    Restaurants, Street food, Uber, Ola, Swiggy, Zomato and Blinkit easily available
`,
  }

  return <PropertyLayout {...propertyData} />
}
