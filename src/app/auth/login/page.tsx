"use client";

import * as React from "react";
import { Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { GraduationCap, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  loginWithEmail,
  loginWithGoogle,
  signInDemo,
  dashboardForRole,
  isDemoMode,
} from "@/lib/auth";
import { ROLES } from "@/lib/constants";
import type { Role } from "@/types";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginInner />
    </Suspense>
  );
}

function LoginInner() {
  const router = useRouter();
  const params = useSearchParams();
  const { toast } = useToast();
  const redirect = params.get("redirect");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [googleLoading, setGoogleLoading] = React.useState(false);
  const demo = isDemoMode();

  const finish = (role: Role) => {
    const dest = redirect && redirect.startsWith("/") ? redirect : dashboardForRole(role);
    router.replace(dest);
  };

  const onEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginWithEmail(email, password);
      toast({ title: "Welcome back!", variant: "success" });
    } catch (err: any) {
      toast({ title: "Sign in failed", description: err?.message ?? "Invalid credentials", variant: "error" });
      setLoading(false);
    }
  };

  const onGoogle = async () => {
    setGoogleLoading(true);
    try {
      await loginWithGoogle();
      toast({ title: "Signed in with Google", variant: "success" });
    } catch (err: any) {
      toast({ title: "Google sign-in failed", description: err?.message, variant: "error" });
      setGoogleLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>
      <Card className="glass-card p-8">
        <div className="mb-6 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-indigo text-white shadow-glow">
            <GraduationCap className="h-6 w-6" />
          </span>
          <h1 className="mt-4 text-2xl font-bold">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Sign in to your ERP account</p>
        </div>

        <form onSubmit={onEmail} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="/auth/forgot-password" className="text-xs text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <Button type="submit" variant="gradient" className="w-full" disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign In"}
          </Button>
        </form>

        {!demo && (
          <>
            <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
            </div>
            <Button variant="outline" className="w-full" onClick={onGoogle} disabled={googleLoading}>
              {googleLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Continue with Google"}
            </Button>
          </>
        )}

        {demo && (
          <div className="mt-5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-600 dark:text-amber-400">
            Firebase is not configured. Choose a role to explore the dashboard in demo mode.
          </div>
        )}

        {demo && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {ROLES.map((r) => (
              <Button
                key={r.value}
                variant="secondary"
                size="sm"
                onClick={() => {
                  signInDemo(r.value);
                  finish(r.value);
                }}
              >
                {r.label}
              </Button>
            ))}
          </div>
        )}

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="font-medium text-primary hover:underline">
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
}
