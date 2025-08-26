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
    locationMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.1833718298653!2d75.806108!3d26.8444758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5007de913f5%3A0xac499ebccc54bc9a!2sRatan%20Studio!5e1!3m2!1sen!2sin!4v1756189311202!5m2!1sen!2sin",
    detailedDescription: `Ratan Studios are designed with a minimalistic yet stylish approach—clean, comfortable, and affordable. 
The property features 3 studios, one on each floor: Topaz, Sapphire, and Emerald, each with vibrant color schemes. 
Rooms are spacious, filled with natural light, and ideal for both short stays and long-term rentals.
Restaurants, Street food, Uber, Ola, Swiggy, Zomato and Blinkit easily available.
`,
  }

  return <PropertyLayout {...propertyData} />
}
