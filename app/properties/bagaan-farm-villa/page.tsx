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
    locationMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.1983879167124!2d75.8334747!3d26.7675978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc902b6c7b4c1%3A0xfd3c1a7ddab7fe78!2sThe%20Bagaan!5e1!3m2!1sen!2sin!4v1756190164972!5m2!1sen!2sin",
    detailedDescription: `Escape the noise of the city and immerse yourself in nature at The Baggan, a charming private farm stay villa nestled amidst lush greenery on the serene outskirts of Jaipur. Perfect for families, couples, groups, or solo travellers looking for a peaceful yet luxurious getaway, The Baggan blends rustic charm with modern amenities, offering the perfect balance between nature and comfort.

Whether you're celebrating a weekend escape, a special gathering, or just looking to reconnect with yourself and nature, The Baggan offers a slice of tranquillity with the warmth of Rajasthani hospitality.
`,
  }

  return <PropertyLayout {...propertyData} />
}
