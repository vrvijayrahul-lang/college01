import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import type { Course } from "@/types";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-glow">
      <div className="gradient-bg border-b p-5">
        <Badge variant="secondary">{course.level}</Badge>
        <h3 className="mt-3 text-lg font-semibold leading-tight">{course.title}</h3>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="line-clamp-2 text-sm text-muted-foreground">{course.description}</p>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" /> {course.durationYears} yrs
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-4 w-4" /> {course.intake} seats
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-xs text-muted-foreground">Per year</p>
            <p className="font-semibold">{formatCurrency(course.feePerYear)}</p>
          </div>
          <Link
            href="/courses"
            className="flex items-center gap-1 text-sm font-medium text-primary transition group-hover:gap-2"
          >
            Details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
