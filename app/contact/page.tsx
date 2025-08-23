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
import toast from "react-hot-toast"

type FormDataShape = {
  name: string;
  email: string;
  phone: string;
  otp?: string;
  property: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  message: string;
};

const isValidEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

const validate = (d: FormDataShape): string | null => {
  if (!d.name.trim()) return "Full name is required.";
  // if (!isValidEmail(d.email)) return "Please enter a valid email address.";
  const digits = d.phone.replace(/\D/g, "");
  if (digits.length !== 10) return "Phone number must be exactly 10 digits.";
  if (!d.otp) return "Please verify your phone number.";
  if (!d.property) return "Please select a property.";
  if (!d.checkIn) return "Check-in date is required.";
  if (!d.checkOut) return "Check-out date is required.";
  if (!d.guests) return "Please select number of guests.";
  if (new Date(d.checkOut) <= new Date(d.checkIn)) return "Check-out must be after check-in.";
  // if (!d.message.trim()) return "Message is required.";
  return null;
};


export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
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
  const [otp, setOtp] = useState<{
    otp: string,
    isVerify: boolean,
    phone: string
  }>({
    otp: "",
    isVerify: false,
    phone: ""
  })
  const [enteredOtp, setEnteredOtp] = useState("")

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setFormData((p: FormDataShape) => ({ ...p, phone: digits }));
      return;
    }

    setFormData((p: FormDataShape) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    const error = validate({ ...formData, otp: otp.isVerify ? "valid" : "" });
    if (error) {
      toast.error(error);
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.replace(/\D/g, ""),
        property: formData.property,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        noOfGuest: formData.guests,
        message: formData.message.trim(),
      };

      const res = await axios.post(`/api/save`, payload, {
        headers: {
          "x-secret-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      });

      if (!res.data?.status) {
        toast.error(res.data?.message || "Something went wrong. Please try again.");
        return;
      }

      toast.success("Enquiry submitted successfully.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        property: "",
        checkIn: "",
        checkOut: "",
        guests: "",
        message: "",
      })
      setOtp({
        otp: "",
        isVerify: false,
        phone: "",
      })
      setEnteredOtp("")
    } catch (err: any) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSentOtp = async () => {
    if (!formData.phone || formData.phone.length !== 10) {
      toast.error("Enter a valid 10-digit phone number.");
      return;
    }

    const generatedOtp = Math.floor(100000 + Math.random() * 900000);
    setOtpLoading(true);

    try {
      const payload = {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: `91${formData.phone}`,
        type: "template",
        template: {
          name: "otp",
          language: {
            code: "en",
          },
          components: [
            {
              type: "body",
              parameters: [
                {
                  type: "text",
                  text: String(generatedOtp),
                },
              ],
            },
            {
              type: "button",
              sub_type: "url",
              index: "0",
              parameters: [
                {
                  type: "text",
                  text: String(generatedOtp),
                },
              ],
            },
          ],
        },
      };

      const res = await axios.post(
        "https://api.celitix.com/wrapper/waba/message",
        payload,
        {
          headers: {
            key: "8c86a97c5bXX",
            wabaNumber: "919799009134",
          },
        }
      );

      if (Array.isArray(res?.data?.messages) && res?.data?.contacts?.length > 0) {
        setOtp({
          otp: String(generatedOtp),
          phone: formData.phone,
          isVerify: false,
        });
        toast.success("OTP sent to your phone.");
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending OTP.");
    } finally {
      setOtpLoading(false);
    }
  };

  const handleVerify = () => {
    if (enteredOtp === otp.otp) {
      setOtp({
        otp: "",
        isVerify: true,
        phone: "",
      });
      toast.success("Phone number verified successfully.");
    } else {
      toast.error("Invalid OTP");
    }
  };
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
              <button onClick={handleSentOtp}>
                generarte
              </button>
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
                        {/* <p className="text-sm text-muted-foreground">{info.details}</p> */}
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
                        className="bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="flex gap-2">
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="10-digit mobile number"
                          className="bg-white flex-1"
                          inputMode="numeric"
                          maxLength={10}
                        />
                        {!otp.isVerify ? (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={handleSentOtp}
                            disabled={!formData.phone || formData.phone.length !== 10 || otpLoading}
                          >
                            {otpLoading ? "Sending..." : "Send OTP"}
                          </Button>
                        ) : (
                          <span className="text-green-600 font-medium self-center"></span>
                        )}
                      </div>

                      {!otp.isVerify && otp.otp && (
                        <div className="flex gap-2 mt-2">
                          <Input
                            type="text"
                            placeholder="Enter OTP"
                            value={enteredOtp}
                            onChange={(e) => setEnteredOtp(e.target.value)}
                            className="bg-white flex-1"
                            maxLength={6}
                            inputMode="numeric"
                          />
                          <Button type="button" onClick={handleVerify}>
                            Verify
                          </Button>
                        </div>
                      )}
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
                      placeholder="Tell us about your requirements..."
                      rows={8}
                      className="resize-none h-20 bg-white"

                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg" disabled={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
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
