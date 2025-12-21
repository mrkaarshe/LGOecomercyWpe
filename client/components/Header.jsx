"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const IMAGES = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.pinimg.com/1200x/19/ba/7c/19ba7c5d7972d930b3b011e0b80e6cc9.jpg",
  "https://i.pinimg.com/1200x/f1/d1/24/f1d1246feb161df07575c46967d31119.jpg",
  "https://i.pinimg.com/1200x/5f/41/9d/5f419ddbbf75d98176783987e3439465.jpg",
];

export const  Header = ()  =>{
  const [idx, setIdx] = useState(0);

  
  useEffect(() => {
    const t = setInterval(() => 
      setIdx((i) => (i + 1) % IMAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[92vh] grid place-items-center overflow-hidden text-white">
      {/* background sliding image */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${IMAGES[idx]})` }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-xs" />
      </div>

      {/* foreground content */}
      <div className="relative z-10 text-center px-6 max-w-7xl">
        <h1 className="text-7xl md:text-9xl font-extrabold mb-4">
          Discover Quality Products For  <br /> Evry Need
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Shop smartphones, laptops, cameras & more with free shipping and
          secure checkout.
           Shop smartphones, laptops, cameras & more with free shipping and
          secure checkout.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/pages/Products">
            <button className="rounded-lg bg-black px-6 py-3 font-semibold hover:bg-gray-800">
              Shop Now
            </button>
          </Link>
          <button className="rounded-lg px-6 py-3 font-semibold border border-white hover:bg-white hover:text-black">
            Learn More
          </button>
        </div>
      </div>

      {/* simple dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2 rounded-full transition-all ${
              i === idx ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}