import { PropertyLayout } from "@/components/property-layout"
import { Wifi, Coffee, Utensils, Tv, Wind, Home, Car,Refrigerator,Sofa  } from "lucide-react"

export default function RatanStudioPage() {
  const propertyData = {
    title: "RATAN STUDIO HOMESTAYS",
    description: "Ratan Studios are designed with a minimalistic yet stylish approach—clean, comfortable, and affordable. ",
    heroImage: "/RATAN2.jpeg",
    gallery: ["/RATAN2.jpeg", "/RATAN3.jpeg", "/RATAN4.jpeg"],
    amenities: [
      { icon: <Wifi className="w-full h-full" />, name: "High-Speed WiFi" },
      { icon: <Coffee className="w-full h-full" />, name: "Coffee/Tea" },
      { icon: <Utensils className="w-full h-full" />, name: "Kitchenette" },
      { icon: <Tv className="w-full h-full" />, name: "Smart TV" },
      { icon: <Wind className="w-full h-full" />, name: "Air Conditioning" },
      { icon: <Home className="w-full h-full" />, name: "Cozy Interiors" },
       { icon: <Car className="w-full h-full" />, name: "Free Parking" },
       { icon: <Refrigerator className="w-full h-full" />, name: "Mini Fridge" },
       { icon: <Sofa  className="w-full h-full" />, name: "Sofa & table" },
    ],
    features: [
      "Studio Layout",
      "Kitchenette",
      "WiFi",
      "AC",
      "Cozy Ambiance",
      "Perfect for Couples",
      "Reading Corner",
      "Modern Amenities",
    ],
    price: "₹2,200",
    capacity: "1-2 Guests",
    location: "Malviya Nagar, Jaipur",
    detailedDescription: `Ratan Studios are designed with a minimalistic yet stylish approach—clean, comfortable, and affordable. 
The property features 3 studios, one on each floor: Topaz, Sapphire, and Emerald, each with vibrant color schemes. 
Rooms are spacious, filled with natural light, and ideal for both short stays and long-term rentals.
Restaurants, Street food, Uber, Ola, Swiggy, Zomato and Blinkit easily available.
`,
  }

  return <PropertyLayout {...propertyData} />
}
