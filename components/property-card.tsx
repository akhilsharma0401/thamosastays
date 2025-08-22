import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PropertyCardProps {
  title: string
  description: string
  image: string
  href: string
  bookNow: string
  features: string[]
}

export function PropertyCard({ title, description, image, href, bookNow, features }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-primary">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-sm rounded-md">
                {feature}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <Button asChild className="flex-1">
              <Link href={href}>View Details</Link>
            </Button>
            {/* <Button variant="outline" className="flex-1 bg-transparent">
              <Link href={bookNow}>Book Now</Link>
            </Button> */}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
