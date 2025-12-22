"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Products from "@/products.json";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/Store/cartSlice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = Products.find((p) => p.id.toString() === id);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState("");

  useEffect(() => {
    if (product) setActiveImg(product.image);
  }, [product]);

  if (!product)
    return (
      <div className="container py-10">
        <p className="text-muted-foreground">Product not found.</p>
      </div>
    );

  const handleAdd = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        category: product.category,
        price: product.price,
        quantity: qty,
      })
    );
    toast.success(`${product.name} added to cart!`)
    // alert(`${product.name} added to cart!`);
  };

  return (
    <main className="container mx-auto px-2 min-h-[70vh] py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gallery */}
        <Card className="border-0 shadow">
          <CardContent className="p-2 space-y-4  ">
            <img src={activeImg} alt={product.name} className="w-full h-60 md:h-150  bg-cover bg-center rounded-xl"/>

            <div className="flex gap-3 overflow-x-auto pb-2">
              {[product.image, ...(product.gallery ?? [])].map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(src)}
                  className={`shrink-0 rounded-lg overflow-hidden border-2 transition ${activeImg === src ? "border-primary" : "border-transparent"}`}
                >
                  <img src={src} alt={`thumb-${idx}`} className="w-20 h-20 object-cover" />
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Details */}
        <Card className="max-h-150">
          <CardHeader>
            <CardTitle className="text-6xl tracking-tight">{product.name}</CardTitle>
            <CardDescription className="text-xl">{product.category}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{product.description}</p>

            <Separator />

            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-semibold">${product.price.toFixed(2)}</span>
              <Badge variant="default">{product.stock} In stock</Badge>
            </div>

            <Separator />

            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Quantity</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  disabled={qty <= 1}
                  onClick={() => setQty((q) => q - 1)}
                >
                  -
                </Button>
                <span className="w-10 text-center font-medium">{qty}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQty((q) => q + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            <Button onClick={handleAdd} className="w-full">
              Add to cart
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}