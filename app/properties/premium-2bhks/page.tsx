import { PropertyLayout } from "@/components/property-layout"
import { Wifi, Car, Coffee, Utensils, Tv, Wind, Sofa, Bath, Star } from "lucide-react"

export default function Premium2BHKsPage() {
  const propertyData = {
    title: "THAMOSA 2BHK",
    description: "We have 6 uniquely designed 2BHK units with a minimalistic yet stylish approach—clean, comfortable, and affordable.",
    heroImage: "/THAMOSA2BHKhero.jpeg",
    gallery: ["/THAMOSABHK2.jpeg", "/THAMOSABHK3.jpeg", "/THAMOSABHK4.jpeg"],
    amenities: [
      { icon: <Wifi className="w-full h-full" />, name: "High-Speed WiFi" },
      { icon: <Car className="w-full h-full" />, name: "Dedicated Parking" },
      { icon: <Coffee className="w-full h-full" />, name: "Coffee/Tea" },
      { icon: <Utensils className="w-full h-full" />, name: "Modern Kitchen" },
      { icon: <Tv className="w-full h-full" />, name: "Smart TV" },
      { icon: <Wind className="w-full h-full" />, name: "Central AC" },
      { icon: <Sofa className="w-full h-full" />, name: "Spacious Living" },
      { icon: <Bath className="w-full h-full" />, name: "2 Bathrooms" },
      { icon: <Star className="w-full h-full" />, name: "Premium Interiors" },
    ],
    features: [
      "2 Bedrooms",
      "Spacious",
      "Premium Interiors",
      "Group Friendly",
      "Modern Kitchen",
      "2 Bathrooms",
      "Large Living Area",
      "Premium Amenities",
    ],
    price: "₹5,500",
    capacity: "4-6 Guests",
    location: "Malviya Nagar, Jaipur",
    locationMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.17593123208!2d75.8059705!3d26.8447593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5dd3f973d95%3A0x57248c000e60610b!2sThamosa%20Stays!5e1!3m2!1sen!2sin!4v1756189893640!5m2!1sen!2sin",
    detailedDescription: `We have 6 uniquely designed 2BHK units with a minimalistic yet stylish approach—clean, comfortable, and affordable.
The Property Features 6 units two on each floor with different & thoughtful theme. We have both balcony & non-balcony rooms. Rooms are spacious, filled with natural light, and experience a home like stay. Each unit is fully furnished, thoughtfully styled, and perfect for families, corporate stays, or long weekends.
Restaurants, Street food, Uber, Ola, Swiggy, Zomato and Blinkit easily available
`,
  }

  return <PropertyLayout {...propertyData} />
}
