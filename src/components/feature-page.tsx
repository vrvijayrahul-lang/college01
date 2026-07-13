import * as React from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface QuickLink {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export function FeaturePage({
  title,
  description,
  icon: Icon,
  actions,
  quickLinks,
  children,
}: {
  title: string;
  description?: string;
  icon?: LucideIcon;
  actions?: React.ReactNode;
  quickLinks?: QuickLink[];
  children?: React.ReactNode;
}) {
  return (
    <>
      <PageHeader title={title} description={description}>
        {actions}
      </PageHeader>
      {quickLinks && quickLinks.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {quickLinks.map((q) => (
            <Link
              key={q.href}
              href={q.href}
              className="inline-flex items-center gap-2 rounded-xl border bg-card px-3 py-2 text-sm font-medium transition hover:bg-secondary"
            >
              {q.icon && <q.icon className="h-4 w-4 text-primary" />}
              {q.label}
              <ArrowRight className="h-3.5 w-3.5 opacity-60" />
            </Link>
          ))}
        </div>
      )}
      {children}
    </>
  );
}

export function PlaceholderCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <Card className="flex flex-col items-center justify-center p-10 text-center">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{text}</p>
    </Card>
  );
}
