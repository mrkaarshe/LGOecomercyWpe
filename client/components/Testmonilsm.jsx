"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  { name: "Sarah L.", text: "Amazing products and lightning-fast shipping. The quality exceeded my expectations!" },
  { name: "John D.", text: "Great customer service and quality items. Will definitely shop here again!" },
  { name: "Emily R.", text: "Wide selection and a super-smooth checkout process. Love this store!" },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4">Loved by customers worldwide</h2>
        <p className="text-center text-muted-foreground mb-12">Thousands of people trust us — here’s what a few have to say.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <Card key={r.name} className="relative">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm italic text-muted-foreground">“{r.text}”</p>
                <p className="text-sm font-semibold">- {r.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}