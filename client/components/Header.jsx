"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const IMAGES = [
  "https://i.pinimg.com/1200x/cc/b8/a1/ccb8a11d7f936ee401459aee31fff9e3.jpg",
  "https://i.pinimg.com/474x/89/ad/0a/89ad0adfaf7a2b5ad81f07bdd51a8b49.jpg",
  "https://i.pinimg.com/1200x/d8/61/59/d861596e77d84dd2333181493ab928b5.jpg",
];

export const Header = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden text-white font-sans">
      {/* Background sliding images */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover  transition-all duration-1000"
        style={{ backgroundImage: `url(${IMAGES[idx]}) ` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 md:px-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
          Ultimate Gaming & Electronics <br /> For Every Setup
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6 text-gray-300">
          Explore top-tier gaming peripherals, laptops, monitors & more. 
          Elevate your setup with style and performance.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/pages/Products">
            <button className="px-8 py-3 font-semibol bg-black text-white rounded-lg shadow-lg hover:scale-105 transform transition">
              Shop Now
            </button>
          </Link>
          <Link href="#learn">
            <button className="px-8 py-3 font-semibold border rounded-lg text-white hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === idx ? "w-8 bg-white shadow-lg" : "w-3 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Optional Gaming Accent Shapes */}
      <div className="absolute top-10 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
};
