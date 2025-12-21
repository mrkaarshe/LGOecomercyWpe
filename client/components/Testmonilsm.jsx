"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  { name: "Sarah L.", text: "Amazing products and lightning-fast shipping. The quality exceeded my expectations!" },
  { name: "John D.", text: "Great customer service and quality items. Will definitely shop here again!" },
  { name: "Emily R.", text: "Wide selection and a super-smooth checkout process. Love this store!" },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Loved by customers worldwide
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          Thousands of people trust us — here’s what a few have to say.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <Card
              key={r.name}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/60 shadow-lg backdrop-blur transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <CardContent className="flex h-full flex-col p-6">
                <Quote className="mb-4 h-8 w-8 text-muted-foreground/20" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary drop-shadow"
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 italic text-foreground/90">
                  “{r.text}”
                </p>
                <p className="mt-6 text-sm font-semibold tracking-wide text-accent-foreground">
                  – {r.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}