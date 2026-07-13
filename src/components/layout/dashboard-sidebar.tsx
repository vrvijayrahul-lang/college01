"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, LogOut, X } from "lucide-react";
import { navForRole } from "@/components/layout/dashboard-nav";
import { useAuth } from "@/components/auth/auth-provider";
import { logout } from "@/lib/auth";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function DashboardSidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  const { role, profile } = useAuth();

  const items = navForRole(role);

  return (
    <aside className="flex h-full w-72 flex-col border-r bg-card/70">
      <div className="flex h-16 items-center justify-between border-b px-5">
        <Link href="/" className="flex items-center gap-2 font-heading font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-indigo text-white">
            <GraduationCap className="h-4 w-4" />
          </span>
          <span className="gradient-text text-base">{SITE_NAME}</span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {items.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
                active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-3">
        <Button
          variant="ghost"
          className="w-full justify-start text-muted-foreground"
          onClick={logout}
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
        {profile?.role && (
          <p className="mt-2 px-3 text-xs text-muted-foreground">
            Signed in as <span className="font-medium text-foreground">{profile.role.replace(/_/g, " ")}</span>
          </p>
        )}
      </div>
    </aside>
  );
}
