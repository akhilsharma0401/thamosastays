"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import axios from "axios"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {}

    const res = await axios.post(`/save`, payload, {
      headers: {
        "x-secret-key": process.env.NEXT_PUBLIC_API_KEY,
      },
    });
    if (!res.data.status) {
      toast.error("Something went wrong. Please try again later");
      return;
    }

    const contactInfo = [
      {
        icon: <Phone className="w-6 h-6" />,
        title: "Phone",
        details: ["+91 8600-210629"],
      },
      {
        icon: <Mail className="w-6 h-6" />,
        title: "Email",
        details: ["thamosastays@gmail.com"],

      },
      {
        icon: <MapPin className="w-6 h-6" />,
        title: "Location",
        details: ["First Floor, Third floor, 5/5, Shaheed Amit Bhardwaj Marg, Sector 5, Malviya Nagar, Jaipur, Rajasthan 302017"],
      },

    ]

    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <img src="/DivineStay4.jpeg" alt="Contact Thamosa Stays" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-200">We're here to help you plan your perfect stay</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We're always happy to help you plan your perfect stay. Reach out to us through any of the following
                  channels, and our friendly team will assist you with bookings, questions, or special requests.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6">
                    <CardContent className="pt-0">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                          <div className="space-y-1 mb-2">
                            {info.details.map((detail, i) => (
                              <p key={i} className="text-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              {/* <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: +91 98765 43210
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Email: info@thamosastays.com
                </Button>
                <Button className="w-full justify-start bg-primary hover:bg-primary/90">
                  <MapPin className="w-4 h-4 mr-2" />
                  View All Properties
                </Button>
              </CardContent>
            </Card> */}
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader className="py-2 md:py-5">
                  <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 8600-210629"
                          className="bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="property">Interested Property</Label>
                        <select
                          id="property"
                          name="property"
                          value={formData.property}
                          onChange={handleInputChange}
                          className="w-full px-3 py-1.5 border border-border rounded-md bg-background text-foreground"
                        >
                          <option value="">Select a property</option>
                          <option value="divine-stays">Divine Stays</option>
                          <option value="ratan-studio">Ratan Studio</option>
                          <option value="budget-studio">Budget Studio</option>
                          <option value="4pods-1bhk">4Pods 1BHK</option>
                          <option value="premium-2bhks">Premium 2BHKs</option>
                          <option value="bagaan-farm-villa">The Bagaan Farm Villa</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="checkIn">Check-in Date</Label>
                        <Input
                          id="checkIn"
                          name="checkIn"
                          type="date"
                          value={formData.checkIn}
                          onChange={handleInputChange}
                          className="bg-white w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="checkOut">Check-out Date</Label>
                        <Input
                          id="checkOut"
                          name="checkOut"
                          type="date"
                          value={formData.checkOut}
                          onChange={handleInputChange}
                          className="bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guests">Number of Guests</Label>
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          className="w-full px-3 py-1.5 border border-border rounded-md bg-background text-foreground"
                        >
                          <option value="">Select guests</option>
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5">5 Guests</option>
                          <option value="6+">6+ Guests</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your requirements, special requests, or any questions you have..."
                        rows={8}
                        className="resize-none h-20 bg-white"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16">
            <Card>
              <CardHeader className="text-center py-2 md:py-8">
                <CardTitle className="text-2xl text-primary">Frequently Asked Questions</CardTitle>
                <CardDescription>Quick answers to common questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">How do I make a booking?</h4>
                      <p className="text-muted-foreground text-sm">
                        You can book directly through our website, call us, or send an email with your requirements.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">What is your cancellation policy?</h4>
                      <p className="text-muted-foreground text-sm">
                        We offer flexible cancellation policies. Please contact us for specific terms based on your
                        booking.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Do you provide airport transfers?</h4>
                      <p className="text-muted-foreground text-sm">
                        Yes, we can arrange airport transfers for our guests. Please mention this when booking.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Are meals included?</h4>
                      <p className="text-muted-foreground text-sm">
                        Meal options vary by property. Some include breakfast, while others have kitchen facilities.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Is WiFi available?</h4>
                      <p className="text-muted-foreground text-sm">
                        Yes, all our properties offer complimentary high-speed WiFi for guests.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Can I bring pets?</h4>
                      <p className="text-muted-foreground text-sm">
                        Pet policies vary by property. Please contact us to discuss your specific requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    )
  }
