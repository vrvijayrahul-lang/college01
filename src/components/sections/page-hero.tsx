import * as React from "react";
import { Breadcrumbs, type Crumb } from "@/components/breadcrumbs";
import { cn } from "@/lib/utils";

export function PageHero({
  title,
  description,
  crumbs,
  className,
}: {
  title: string;
  description?: string;
  crumbs: Crumb[];
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden border-b", className)}>
      <div className="hero-grid absolute inset-0 -z-10 opacity-60" />
      <div className="absolute inset-0 -z-10 bg-radial-fade" />
      <div className="container py-12 lg:py-16">
        <Breadcrumbs items={crumbs} className="mb-4" />
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>
        )}
      </div>
    </section>
  );
}
