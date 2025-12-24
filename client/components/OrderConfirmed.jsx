"use client";

import { CheckCircle, Truck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export const OrderConfirmed = () =>  {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center  text-black px-4">
      
      <Card className="max-w-md w-full p-8 border border-white/20 shadow text-center">
        <CardHeader className="flex flex-col items-center gap-4">
          <CheckCircle className="w-20 h-20 text-black " />
          <CardTitle className="text-3xl font-bold">Order Confirmed</CardTitle>
          <CardDescription className="text-gray-600">
            Thank you! Your order has been successfully placed.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-6 mt-6">
          {/* Order steps */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <CreditCard className="w-10 h-10 text-black" />
              <span className="text-gray-600 text-sm">Payment</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-10 h-10 text-black" />
              <span className="text-gray-600 text-sm">Shipping</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="w-10 h-10 text-black" />
              <span className="text-gray-600 text-sm">Delivered</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <Link href="/pages/Products">
              <Button className="w-full md:w-auto bg-white text-black border hover:bg-gray-200">
                Continue Shopping
              </Button>
            </Link>
            <Link href="/pages/Profile">
              <Button className="w-full md:w-auto border border-white hover:bg-white hover:border hover:text-black">
                View My Orders
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Optional blurred accents */}
      <div className="absolute top-10 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
    </main>
  );
}
