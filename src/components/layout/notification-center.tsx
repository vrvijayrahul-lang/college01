"use client";

import * as React from "react";
import Link from "next/link";
import { Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SAMPLE = [
  { id: 1, title: "New assignment posted", body: "Data Structures — Due Fri", time: "10m" },
  { id: 2, title: "Fee reminder", body: "Semester fee due in 5 days", time: "1h" },
  { id: 3, title: "Event tomorrow", body: "Tech Fest 2026 inauguration", time: "3h" },
];

export function NotificationCenter() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -right-0.5 -top-0.5 h-4 min-w-4 justify-center bg-destructive p-0 px-1 text-[10px] text-destructive-foreground">
            {SAMPLE.length}
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between text-sm">
          Notifications
          <Link href="/dashboard/notices" className="text-xs font-normal text-primary">
            View all
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {SAMPLE.map((n) => (
          <div key={n.id} className="flex flex-col gap-0.5 rounded-lg px-3 py-2 hover:bg-secondary">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{n.title}</p>
              <span className="text-xs text-muted-foreground">{n.time}</span>
            </div>
            <p className="text-xs text-muted-foreground">{n.body}</p>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
