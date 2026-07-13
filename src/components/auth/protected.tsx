"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, ShieldAlert } from "lucide-react";
import { useAuth } from "@/components/auth/auth-provider";
import type { Role } from "@/types";
import { Button } from "@/components/ui/button";

export function ProtectedRoute({
  children,
  allow,
}: {
  children: React.ReactNode;
  allow?: Role[];
}) {
  const { user, role, loading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth/login?redirect=" + encodeURIComponent(window.location.pathname));
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) return null;

  if (allow && role && !allow.includes(role)) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <ShieldAlert className="h-12 w-12 text-destructive" />
        <h1 className="text-xl font-semibold">Access Denied</h1>
        <p className="max-w-sm text-sm text-muted-foreground">
          Your role ({role}) does not have permission to view this page.
        </p>
        <Button asChild variant="gradient">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  return <>{children}</>;
}
