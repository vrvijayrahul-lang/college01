"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GraduationCap, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  registerWithEmail,
  signInDemo,
  dashboardForRole,
  isDemoMode,
} from "@/lib/auth";
import { ROLES } from "@/lib/constants";
import type { Role } from "@/types";

export default function RegisterPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);
  const demo = isDemoMode();

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    role: "student" as Role,
  });

  const set = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      toast({ title: "Passwords do not match", variant: "error" });
      return;
    }
    setLoading(true);
    try {
      if (demo) {
        signInDemo(form.role);
        toast({ title: "Account created (demo)", variant: "success" });
        router.replace(dashboardForRole(form.role));
        return;
      }
      await registerWithEmail(form.name, form.email, form.password, form.role);
      toast({ title: "Account created", description: "Verify your email to continue.", variant: "success" });
      router.replace(dashboardForRole(form.role));
    } catch (err: any) {
      toast({ title: "Registration failed", description: err?.message, variant: "error" });
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <Card className="glass-card p-8">
        <div className="mb-6 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-indigo text-white shadow-glow">
            <GraduationCap className="h-6 w-6" />
          </span>
          <h1 className="mt-4 text-2xl font-bold">Create account</h1>
          <p className="text-sm text-muted-foreground">Join the campus ERP</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={form.name} onChange={(e) => set("name", e.target.value)} required placeholder="Jane Doe" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} required placeholder="you@email.com" />
          </div>
          <div>
            <Label>Role</Label>
            <Select value={form.role} onValueChange={(v) => set("role", v)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {ROLES.map((r) => (
                  <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={form.password} onChange={(e) => set("password", e.target.value)} required placeholder="••••••••" />
            </div>
            <div>
              <Label htmlFor="confirm">Confirm</Label>
              <Input id="confirm" type="password" value={form.confirm} onChange={(e) => set("confirm", e.target.value)} required placeholder="••••••••" />
            </div>
          </div>
          <Button type="submit" variant="gradient" className="w-full" disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Create Account"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </Card>
    </div>
  );
}
