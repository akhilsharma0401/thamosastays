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
    locationMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.819050976012!2d75.8252325!3d26.896412599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db695cee65813%3A0xcf0cbc152a1fa9f8!2sDivine%20Stays!5e1!3m2!1sen!2sin!4v1756189041626!5m2!1sen!2sin",
    detailedDescription: `Divine Stay offers 12 modern studios with a spacious terrace overlooking the city skyline and Aravalli Hills. Designed to be minimal, clean, and comfortable, it is affordable, female-friendly, and surrounded by local cafés, street vendors, and nightlife—just 4 km from the city center. Restaurants, Street food, Uber, Ola, Swiggy, Zomato and Blinkit easily available.`,
  }

  return <PropertyLayout {...propertyData} />
}
