import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

export function NewsCard({
  title,
  date,
  tag,
  href = "/news",
}: {
  title: string;
  date: string;
  tag: string;
  href?: string;
}) {
  return (
    <Link href={href}>
      <Card className="group h-full p-5 transition hover:-translate-y-1 hover:shadow-glow">
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{tag}</Badge>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
        </div>
        <h3 className="mt-3 font-semibold leading-snug">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{formatDate(date)}</p>
      </Card>
    </Link>
  );
}
