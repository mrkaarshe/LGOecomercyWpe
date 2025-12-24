"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Filter, Loader2 } from "lucide-react";
import { UseSelector,useDispatch } from "react-redux";
import { addToCart } from "@/app/Store/cartSlice";
import products from "@/products.json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categories = ["All", "Electronics",  "Storage","Gaming", "Audio", "Wearables"];

export default function ProductsPage() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);

  const filtered = filter === "All" ? products : products.filter((p) => p.category === filter);
  
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, [filter]);

  const handleAddToCart = (product: typeof products[0]) => {
    dispatch(addToCart(product));
  };

  return (
    <main className="container mx-auto mt-20 py-10 px-3">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Our Products</h1>
        <p className="text-muted-foreground">Explore our range of innovative products.</p>
      </header>

      {/* Filter */}
      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
        {categories.map((cat) => (
          <Button
            key={cat}
            size="sm"
            variant={filter === cat ? "default" : "outline"}
            onClick={() => setFilter(cat)}
          >
            {cat === "All" && <Filter className="mr-2 h-4 w-4" />}
            {cat}
          </Button>
        ))}
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid place-content-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <Card key={p.id} className="overflow-hidden">
              <Link className="" href={`/pages/Detail/${p.id}`}>
              <div className="flex justify-center items-center">
                   <img
                  src={p.image}
                  alt={p.name}
                  className="h-68 w-86 bg-cover  bg-center"
                />
              </div>
             

              <CardHeader>
                <CardTitle className="line-clamp-1">{p.name}</CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-2">{p.description}</p>
              </CardHeader>

              <CardContent className="flex items-center justify-between">
                <span className="text-lg font-semibold">${p.price.toFixed(2)}</span>
                <Badge>{p.stock} in stock</Badge>
              </CardContent>

              <CardContent>
                <Button
                  size="sm"
                  className="w-full"
                  onClick={() => handleAddToCart(p)}
                >
                  Add to Cart
                </Button>
              </CardContent>
               </Link>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}