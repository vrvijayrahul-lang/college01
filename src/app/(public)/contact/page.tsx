"use client";

import * as React from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { CONTACT } from "@/lib/constants";

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent", description: "We'll get back to you shortly.", variant: "success" });
      (e.target as HTMLFormElement).reset();
    }, 900);
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        description="We're here to help with admissions, academics, and more."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="container section-pad">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Get in touch" title="Reach the Admissions Team" align="left" />
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Address", value: CONTACT.address },
                { icon: Phone, label: "Phone", value: CONTACT.phone },
                { icon: Mail, label: "Email", value: CONTACT.email },
              ].map((c) => (
                <Card key={c.label} className="flex items-start gap-4 p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">{c.label}</p>
                    <p className="text-sm text-muted-foreground">{c.value}</p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border">
              <iframe
                title="Campus location"
                className="h-64 w-full"
                loading="lazy"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${CONTACT.lng - 0.02}%2C${CONTACT.lat - 0.02}%2C${CONTACT.lng + 0.02}%2C${CONTACT.lat + 0.02}&layer=mapnik&marker=${CONTACT.lat}%2C${CONTACT.lng}`}
              />
            </div>
          </div>

          <Card className="p-6">
            <h3 className="text-lg font-semibold">Send a Message</h3>
            <form onSubmit={onSubmit} className="mt-4 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required placeholder="you@email.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" required placeholder="How can we help?" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required rows={5} placeholder="Write your message…" />
              </div>
              <Button type="submit" variant="gradient" disabled={loading} className="w-full">
                {loading ? "Sending…" : <>Send Message <Send className="h-4 w-4" /></>}
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
}
