"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, User, User2, Menu, X } from "lucide-react";

const API = "http://localhost:3232/api";

export default function Nav() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  /* ----------  mount guard & initial reads  ---------- */
  useEffect(() => setMounted(true), []);

  const syncUser = () => {
    try {
      const raw = localStorage.getItem("user");
      setUser(raw ? JSON.parse(raw) : null);
    } catch {
      setUser(null);
    }
  };

  const syncCart = () => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.length);
    } catch {
      setCartCount(0);
    }
  };

  useEffect(() => {
    if (!mounted) return;
    syncUser();
    syncCart();
  }, [mounted]);

  /* ----------  keep in sync  ---------- */
  useEffect(() => {
    if (!mounted) return;
    window.addEventListener("focus", syncUser);
    window.addEventListener("focus", syncCart);
    window.addEventListener("visibilitychange", syncUser);
    window.addEventListener("visibilitychange", syncCart);
    const id = setInterval(() => {
      syncUser();
      syncCart();
    }, 2000);
    return () => {
      window.removeEventListener("focus", syncUser);
      window.removeEventListener("focus", syncCart);
      window.removeEventListener("visibilitychange", syncUser);
      window.removeEventListener("visibilitychange", syncCart);
      clearInterval(id);
    };
  }, [mounted]);

  /* ----------  scroll shadow  ---------- */
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  /* ----------  logout  ---------- */
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  /* ----------  nav data  ---------- */
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/pages/Products" },
    { title: "Contact", href: "/pages/contact" },
  ];

  /* ----------  render  ---------- */
  return (
    <>
      <div className="h-20 " />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-black text-white shadow-md" : "bg-background text-black shadow-md"
        }`}
      >
        <div className="container mx-auto h-20 flex items-center justify-between px-3 md:px-0">
          <Link href="/" className="text-xl font-bold">
            LGO
          </Link>

          {/* desktop links + icons */}
          <div className="items-center flex justify-center gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm hidden md:flex font-medium hover:text-primary transition-colors"
              >
                {l.title}
              </Link>
            ))}

            {/* cart */}
            <Link href="/pages/Cart">
              <Button size="icon" variant="ghost" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {mounted && cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* user */}
            {mounted &&
              (user ? (
                <Button size="sm" variant="outline">
                  <Link href={'/pages/Profile'} className="flex text-black justify-center items-center ">
                     <User2 className=" h-4 w-4" />
                  @{user.name}
                  </Link>

                </Button>
              ) : (
                <Link href="/pages/Auth">
                  <Button size="sm">
                    <User className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                </Link>
              ))}

            {/* mobile menu toggler */}
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen((o) => !o)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={30} />}
            </Button>
          </div>
        </div>

        {/* mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t px-4 py-4 space-y-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {l.title}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}