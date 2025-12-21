"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroCards() {
  const cards = [
    { title: "Fast Shipping", desc: "24-h dispatch, worldwide.", icon: "🚚" },
    { title: "Eco Packaging", desc: "100% plastic-free boxes.", icon: "🌱" },
    { title: "24/7 Support", desc: "Real humans, real time.", icon: "💬" },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">

      {/* Big image - left side */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
      >
        <Image
          src="/h.jpeg"   // ← your big photo
          alt="Our workspace"
          fill
          className="object-cover"
        />
        {/* subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>

      {/* Content + cards - right side */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-400">
          Built different.
        </h2>
        <p className="text-white/70 mb-8">
          We are a small team obsessed with quality. Every product is hand-picked,
          packed with care, and shipped carbon-neutral so you can shop guilt-free.
        </p>

        {/* 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="group rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 p-4 text-center
                         hover:border-green-400/50 hover:-translate-y-1 transition"
            >
              <div className="text-3xl mb-2">{c.icon}</div>
              <h3 className="text-sm font-semibold">{c.title}</h3>
              <p className="text-xs text-white/60 mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}