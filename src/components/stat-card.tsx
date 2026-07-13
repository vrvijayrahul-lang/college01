import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: { value: number; label?: string };
  className?: string;
}

export function StatCard({ title, value, icon: Icon, trend, className }: StatCardProps) {
  return (
    <Card className={cn("p-5 transition hover:shadow-glow", className)}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="mt-3 flex items-end gap-2">
        <span className="text-2xl font-bold tracking-tight">{value}</span>
        {trend && (
          <span
            className={cn(
              "mb-1 text-xs font-medium",
              trend.value >= 0 ? "text-emerald-500" : "text-destructive",
            )}
          >
            {trend.value >= 0 ? "▲" : "▼"} {Math.abs(trend.value)}%
            {trend.label && <span className="text-muted-foreground"> {trend.label}</span>}
          </span>
        )}
      </div>
    </Card>
  );
}
