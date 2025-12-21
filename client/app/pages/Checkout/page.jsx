"use client";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useSelector ,useDispatch } from "react-redux";
import {
increaseQuantity,
decreaseQuantity,
removeFromCart,
} from "@/app/Store/cartSlice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
export default function CheckoutPage() {
const dispatch = useDispatch();
const items = useSelector((s) => s.cart.items ?? []);
const subTotal = items.reduce((sum, it) => sum + it.price * it.quantity, 0);
const tax      = subTotal * 0.08;
const shipping = subTotal > 0 ? 5 : 0;
const total    = subTotal + tax + shipping;
return (
<main className="max-w-6xl mx-auto px-4 py-30 ">
  <h1 className="text-3xl font-bold tracking-tight"></h1>
 <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    
    <Card>
      <CardHeader>
        <CardTitle>Shipping details</CardTitle>
        <CardDescription>We&rsquo;ll use this to deliver your order</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" placeholder="John Doe" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@example.com" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" placeholder="123 Main St" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="New York" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="postal">Postal code</Label>
            <Input id="postal" placeholder="10001" />
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full">Place order</Button>
      </CardFooter>
    </Card>

    {/* --------- Order Summary --------- */}
    <Card>
      <CardHeader>
        <CardTitle>Order summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <ScrollArea className="h-72 rounded-md border px-3 py-2">
          {items.length === 0 && (
            <p className="text-sm text-muted-foreground">Your cart is empty</p>
          )}

          {items.map((item) => (
            <div key={item.id} className="flex items-start gap-3 pb-3 mb-3 border-b last:border-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />

              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-xs text-muted-foreground">{item.category}</p>

                <div className="flex items-center gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>

                  <Badge variant="secondary">{item.quantity}</Badge>

                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto h-7 w-7 text-destructive"
                    onClick={() => dispatch(removeFromCart({ id: item.id }))}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <p className="font-semibold">${item.price.toFixed(2)}</p>
            </div>
          ))}
        </ScrollArea>

        <Separator />

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  </section>
</main>

)
}