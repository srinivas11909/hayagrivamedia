// "use client"

// import { useState } from "react"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// //import BrandButton from "@/components/BrandButton"

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })

//   const submit = async (e: any) => {
//     e.preventDefault()
//     await fetch("/api/contact", {
//       method: "POST",
//       body: JSON.stringify(form),
//     })
//     alert("Message sent!")
//     setForm({ name: "", email: "", message: "" })
//   }

//   return (
//     <section className="section">
//       <div className="container max-w-xl">
//         <h1 className="section-title">Contact Us</h1>

//         <form onSubmit={submit} className="mt-8 space-y-4">
//           <Input
//             placeholder="Your Name"
//             value={form.name}
//             onChange={e => setForm({ ...form, name: e.target.value })}
//           />
//           <Input
//             placeholder="Your Email"
//             value={form.email}
//             onChange={e => setForm({ ...form, email: e.target.value })}
//           />
//           <Textarea
//             placeholder="Your Message"
//             rows={5}
//             value={form.message}
//             onChange={e => setForm({ ...form, message: e.target.value })}
//           />
//           {/* <BrandButton className="w-full">
//             Send Message
//           </BrandButton> */}
//         </form>
//       </div>
//     </section>
//   )
// }

'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
//import { useToast } from '@/hooks/use-toast'
import { toast } from "sonner"


export default function ContactPage() {
  //const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {   
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast("Message sent succuess",{
          description: "Your message has been sent successfully.",
        })
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast("Failed",{
        description: "Failed to send message. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us to discuss your event. We'd love to hear from you and help create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 1234567890"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your event..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>
                    Reach out to us through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 90149 70993</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">hayagrivamedia@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Manikonda<br />
                        Hyderabad, Telangana - 500089<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                      <p className="text-muted-foreground">+91 90149 70993</p>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-primary"
                        onClick={() => window.open('https://wa.me/911234567890', '_blank')}
                      >
                        Chat with us
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-card border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Business Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
