import { PropertyLayout } from "@/components/property-layout"
import { Wifi, Car, Coffee, Utensils, Tv, Wind, Sparkles, Refrigerator, Shield } from "lucide-react"

export default function DivineStaysPage() {
  const propertyData = {
    title: "DIVINE STAY – Feel at Home",
    description: "Divine Stay offers 12 modern studios with a spacious terrace overlooking the city skyline and Aravalli Hills",
    heroImage: "/DivineStaysHero.jpeg",
    gallery: ["/DivineStay2.jpeg", "/DivineStay4.jpeg", "/DivineStay5.jpeg"],
    amenities: [
      { icon: <Wifi className="w-full h-full" />, name: "High-Speed WiFi" },
      { icon: <Car className="w-full h-full" />, name: "Free Parking" },
      { icon: <Coffee className="w-full h-full" />, name: "Coffee/Tea" },
      { icon: <Utensils className="w-full h-full" />, name: "Kitchenette" },
      { icon: <Tv className="w-full h-full" />, name: "Smart TV" },
      { icon: <Wind className="w-full h-full" />, name: "Air Conditioning" },
      { icon: <Sparkles className="w-full h-full" />, name: "Premium Service" },
      { icon: <Refrigerator className="w-full h-full" />, name: "Mini Fridge" },
      { icon: <Shield className="w-full h-full" />, name: "24/7 Security" },
    ],
    features: [
      "Luxury Amenities",
      "Mountain View",
      "Private Balcony",
      "Premium Service",
      "Spacious Rooms",
      "Modern Interiors",
      "Complimentary Breakfast",
      "Concierge Service",
    ],
    price: "₹4,500",
    capacity: "2-4 Guests",
    location: "Raja Park, Jaipur",
    detailedDescription: `Divine Stay offers 12 modern studios with a spacious terrace overlooking the city skyline and Aravalli Hills. Designed to be minimal, clean, and comfortable, it is affordable, female-friendly, and surrounded by local cafés, street vendors, and nightlife—just 4 km from the city center. Restaurants, Street food, Uber, Ola, Swiggy, Zomato and Blinkit easily available.`,
  }

  return <PropertyLayout {...propertyData} />
}
