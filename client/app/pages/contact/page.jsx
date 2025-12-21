"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 container mx-auto px-6 ">
        <div className="">
            <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
            <p className="text-muted-foreground">We’d love to hear from you.</p>
          </div>
      <div className="c grid md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        
        <div className="space-y-8">
          <div className="space-y-4">
            <Card>
              <CardContent className="flex items-center gap-4 p-4">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <p className="text-sm text-muted-foreground">hello@yourstore.com</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-4">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-semibold text-sm">Phone</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-4">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-semibold text-sm">Address</p>
                  <p className="text-sm text-muted-foreground">123 Business Ave, City, State 12345</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-3">
            {[Github, Twitter, Instagram].map((Icon, i) => (
              <Button key={i} size="icon" variant="outline">
                <Icon className="w-10 h-10" />
              </Button>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Message</Label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>

              {sent && (
                <p className="text-center text-sm text-green-600">Message sent! We’ll get back to you soon.</p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}