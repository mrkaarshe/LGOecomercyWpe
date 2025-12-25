"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LogOut, Package, User } from "lucide-react";
import Orders from '@/components/Orders'
import Link from "next/link";
export default function AccountPage() {
  const [tab, setTab] = useState("profile");
  const [user, setUser] = useState(null);   // start with null

  /* READ localStorage ONLY after mount (hydration-safe) */
  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      setUser(raw ? JSON.parse(raw) : null);
    } catch {}
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);          // optional: clear UI instantly
    window.location.href = "/";
  };

  /* while we wait for mount OR after logout */
  if (!user) {
    return (
      <main className="container mx-auto min-h-[70vh] mt-20 py-10">
        <h1 className="text-3xl font-bold">My Account</h1>
        <p className="mt-4 text-muted-foreground">Please log in to see your account.</p>
      </main>
    );
  }

  /* ------------------  render when we have data  ------------------ */
  return (
    <main className="container mx-auto min-h-[70vh] mt-20 p-3">
      <h1 className="text-3xl font-bold tracking-tight mb-8">My Account</h1>

      {/* Tabs */}
      <div className="flex  gap-2 mb-8">
        <Button
          variant={tab === "profile" ? "default" : "outline"}
          onClick={() => setTab("profile")}
          className="gap-2"
        >
          <User className="h-4 w-4" />
          Profile
        </Button>
        <Button
          variant={tab === "orders" ? "default" : "outline"}
          onClick={() => setTab("orders")}
          className="gap-2"
        >
          <Package className="h-4 w-4" />
          Orders
        </Button>
      </div>

      {tab === "profile" && (
        <Card>
          <CardHeader>
            <CardTitle>Personal Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <p className="font-medium">@{user.name}</p>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>
             <Separator />
             <div>
              {user.Role == 'admin' &&(
                <>
                <p className="text-sm text-muted-foreground">Admin Penal</p>
                <Link href={'/pages/saler'}>
                LGO Admin Saller
                </Link>
               </>
              )}
            
            </div>
            <Separator />
            <Button variant="ghost" className="gap-2" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </CardContent>
        </Card>
      )}

      {tab === "orders" && (
        <Card>
          <CardHeader>
            <CardTitle>My Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Orders/>
          </CardContent>
        </Card>
      )}
    </main>
  );
}