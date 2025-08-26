import { PropertyLayout } from "@/components/property-layout"
import { Wifi, Car, Coffee, Utensils, Tv, Wind, Shield, Bed,Refrigerator } from "lucide-react"

export default function FourPods1BHKPage() {
  const propertyData = {
    title: "4pods (1BHK)",
    description: "Welcome to Four Pods, a collection of beautifully designed 1BHK private stays",
    heroImage: "/4podshero.jpeg",
    gallery: ["/4pods2.jpeg", "/4pods3.jpeg", "/4pods4.jpeg"],
    amenities: [
      { icon: <Wifi className="w-full h-full" />, name: "High-Speed WiFi" },
      { icon: <Car className="w-full h-full" />, name: "Parking Space" },
      { icon: <Coffee className="w-full h-full" />, name: "Coffee/Tea" },
      { icon: <Utensils className="w-full h-full" />, name: "Full Kitchen" },
      { icon: <Tv className="w-full h-full" />, name: "Smart TV" },
      { icon: <Wind className="w-full h-full" />, name: "Air Conditioning" },
      { icon: <Refrigerator className="w-full h-full" />, name: "Mini Fridge" },
      { icon: <Bed className="w-full h-full" />, name: "Separate Bedroom" },
       { icon: <Shield className="w-full h-full" />, name: "24/7 Security" },
    ],
    features: [
      "1 Bedroom",
      "Living Area",
      "Full Kitchen",
      "Family Friendly",
      "Spacious Layout",
      "Modern Furnishing",
      "Work Space",
      "Balcony Access",
    ],
    price: "₹3,200",
    capacity: "2-4 Guests",
    location: "Malviya Nagar, Jaipur",
    locationMap: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2971.1826270729266!2d75.80306867543715!3d26.84450417668786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUwJzQwLjIiTiA3NcKwNDgnMjAuMyJF!5e1!3m2!1sen!2sin!4v1756190041311!5m2!1sen!2sin",
    detailedDescription: `Welcome to Four Pods, a collection of beautifully designed 1BHK private stays—Charcoal, Sage, Mocha, and Rosewood—crafted for the modern traveller seeking comfort, privacy, and style. Whether you're visiting Jaipur for work, a weekend getaway, or an extended stay, each pod offers a personalized experience in one of the city’s most safe and accessible neighbourhoods.
Restaurants, Street food, Uber, Ola, Swiggy, Zomato and Blinkit easily available
`,
  }

  return <PropertyLayout {...propertyData} />
}
