"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Eye, EyeOff, Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const API = "https://lgoecomercywpe.onrender.com/api";

export default function AuthPage() {
  const [mode, setMode] = useState("login");            // "login" | "register"
  const [form, setForm] = useState({ email: "", password: "", username: "" });
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function submit(e) {
    e.preventDefault();
    setLoading(true);

    const endpoint = mode === "login" ? "/Login" : "/Register";
    const body =
      mode === "login"
        ? { email: form.email, password: form.password }
        : { email: form.email, password: form.password, name: form.username };

    try {
      const res = await fetch(`${API}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success(mode === "login" ? "Welcome back!" : "Account created");
      router.push("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <main className="min-h-[70vh] grid place-items-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{mode === "login" ? "Welcome back" : "Create account"}</CardTitle>
          <CardDescription>{mode === "login" ? "Sign in to continue" : "Join us today"}</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={submit} className="space-y-4">
            {mode === "register" && (
              <div className="space-y-2">
                <Label>Username</Label>
                <Input
                  required
                  placeholder="johndoe"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                />
              </div>
            )}

            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <div className="relative">
                <Input
                  type={show ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="absolute right-2 top-0"
                  onClick={() => setShow((s) => !s)}
                >
                  {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Please wait…" : mode === "login" ? "Login" : "Register"}
            </Button>
          </form>

          <Separator className="my-4" />

          <Button variant="outline" className="w-full gap-2">
            <Chrome className="h-4 w-4" />
            Continue with Google
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-4">
            {mode === "login" ? "No account yet?" : "Already registered?"}{" "}
            <Button
              variant="link"
              className="p-0 h-auto"
              onClick={() => {
                setMode(mode === "login" ? "register" : "login");
                setForm({ email: "", password: "", username: "" });
              }}
            >
              {mode === "login" ? "Create one" : "Login here"}
            </Button>
          </p>
        </CardContent>
      </Card>
    </main>
     </>
  );
}