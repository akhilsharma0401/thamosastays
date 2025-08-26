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
    locationMap: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2971.179955287309!2d75.80326507543712!3d26.84460597668786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUwJzQwLjYiTiA3NcKwNDgnMjEuMCJF!5e1!3m2!1sen!2sin!4v1756190259142!5m2!1sen!2sin",
    detailedDescription: `Welcome to Budget Bliss Compact Studio, a thoughtfully designed urban stay located in the heart of Jaipur’s well-connected and secure neighbourhood. Whether you're a solo traveller, remote worker, business guest, or medical visitor, this compact living experience offers privacy, comfort, and convenience without stretching your budget. We ensuring you to complete privacy, and a feeling of personal space that’s rare in typical budget accommodations.
    Restaurants, Street food, Uber, Ola, Swiggy, Zomato and Blinkit easily available
`,
  }

  return <PropertyLayout {...propertyData} />
}
