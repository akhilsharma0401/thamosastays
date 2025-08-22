import { PropertyLayout } from "@/components/property-layout"
import { Wifi, Car, Coffee, Utensils, TreePine, Flower, Bird, Sun, Leaf } from "lucide-react"

export default function BagaanFarmVillaPage() {
  const propertyData = {
    title: "The Baggan Farmstay",
    description: "Escape the noise of the city and immerse yourself in nature at The Baggan",
    heroImage: "/TheBagganhero.jpeg",
    gallery: ["/TheBaggan2.jpeg", "/TheBaggan3.jpeg", "/TheBaggan4.jpeg"],
    amenities: [
      { icon: <Wifi className="w-full h-full" />, name: "WiFi Available" },
      { icon: <Car className="w-full h-full" />, name: "Farm Parking" },
      { icon: <Coffee className="w-full h-full" />, name: "Fresh Coffee" },
      { icon: <Utensils className="w-full h-full" />, name: "Farm Kitchen" },
      { icon: <TreePine className="w-full h-full" />, name: "Nature Walks" },
      { icon: <Flower className="w-full h-full" />, name: "Organic Garden" },
      { icon: <Bird className="w-full h-full" />, name: "Bird Watching" },
      { icon: <Sun className="w-full h-full" />, name: "Sunrise Views" },
      { icon: <Leaf className="w-full h-full" />, name: "Farm Activities" },
    ],
    features: [
      "Farm Experience",
      "Organic Garden",
      "Nature Views",
      "Unique Stay",
      "Farm-to-Table Meals",
      "Outdoor Activities",
      "Peaceful Environment",
      "Educational Tours",
    ],
    price: "₹4,000",
    capacity: "4-8 Guests",
    location: "Vatika, Jaipur",
    detailedDescription: `Escape the noise of the city and immerse yourself in nature at The Baggan, a charming private farm stay villa nestled amidst lush greenery on the serene outskirts of Jaipur. Perfect for families, couples, groups, or solo travellers looking for a peaceful yet luxurious getaway, The Baggan blends rustic charm with modern amenities, offering the perfect balance between nature and comfort.

Whether you're celebrating a weekend escape, a special gathering, or just looking to reconnect with yourself and nature, The Baggan offers a slice of tranquillity with the warmth of Rajasthani hospitality.
`,
  }

  return <PropertyLayout {...propertyData} />
}
