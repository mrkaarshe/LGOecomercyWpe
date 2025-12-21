"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Truck,
  HeadphonesIcon,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

const services = [
  {
    title: "Free Shipping",
    desc: "Enjoy free shipping on all orders over $50. Fast and reliable delivery to your doorstep.",
    icon: Truck,
  },
  {
    title: "24/7 Customer Support",
    desc: "Our support team is here to help you anytime, anywhere. Contact us for any assistance you need.",
    icon: HeadphonesIcon,
  },
  {
    title: "Money-Back Guarantee",
    desc: "Not satisfied with your purchase? We offer a 30-day money-back guarantee for your peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "Easy Returns",
    desc: "Return or exchange items within 30 days. Hassle-free process, no questions asked.",
    icon: RotateCcw,
  },
];

export default function Services() {
  return (
    <section className="bg-black text-white  px-4 md:px-6 py-10">
        <h1 className="text-white text-4xl text-center font-bold py-10">services</h1>
      <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.title}
              className="group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur transition hover:bg-white/10"
            >
              <CardHeader className="items-center pb-3">
                <div className="mb-3 rounded-full bg-white/10 p-3 group-hover:bg-white/20">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-center text-lg text-white font-semibold tracking-tight">
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-gray-300">{s.desc}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}