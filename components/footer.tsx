import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Thamosa Stays</h3>
            <p className="text-primary-foreground/90">
              Your home away from home. Experience authentic hospitality in our carefully curated homestays and farm
              villas.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/about" className="block hover:text-accent transition-colors">
                About Us
              </Link>
              <Link href="/accommodations" className="block hover:text-accent transition-colors">
                Accommodations
              </Link>
              <Link href="/nearby-places" className="block hover:text-accent transition-colors">
                Nearby Places
              </Link>
              <Link href="/contact" className="block hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Properties */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Properties</h4>
            <div className="space-y-2">
              <Link href="/properties/divine-stays" className="block hover:text-accent transition-colors">
                Divine Stays
              </Link>
              <Link href="/properties/ratan-studio" className="block hover:text-accent transition-colors">
                Ratan Studio
              </Link>
              <Link href="/properties/budget-studio" className="block hover:text-accent transition-colors">
                Budget Studio
              </Link>
              <Link href="/properties/4pods-1bhk" className="block hover:text-accent transition-colors">
                4Pods 1BHK
              </Link>
              <Link href="/properties/premium-2bhks" className="block hover:text-accent transition-colors">
                Premium 2BHKs
              </Link>
              <Link href="/properties/bagaan-farm-villa" className="block hover:text-accent transition-colors">
                Bagaan Farm Villa
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90">First Floor, Third floor, 5/5, Shaheed Amit Bhardwaj Marg, Sector 5, </p>
                  <p className="text-primary-foreground/90">Malviya Nagar, Jaipur, Rajasthan 302017
</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p className="text-primary-foreground/90">+91-8600-210629</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p className="text-primary-foreground/90">thamosastays@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/90">
            © 2025 Thamosa Stays. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
