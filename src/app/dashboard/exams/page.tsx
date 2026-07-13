"use client";

import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

const exams = [
  { code: "CS301", subject: "Data Structures", date: "2026-07-20", duration: "3 hrs", type: "Semester" },
  { code: "CS302", subject: "Database Systems", date: "2026-07-23", duration: "3 hrs", type: "Semester" },
  { code: "CS303", subject: "Operating Systems", date: "2026-07-26", duration: "3 hrs", type: "Semester" },
  { code: "CS251", subject: "Discrete Mathematics", date: "2026-07-29", duration: "3 hrs", type: "Semester" },
];

export default function ExamsPage() {
  return (
    <>
      <PageHeader title="Examinations" description="Upcoming exams and hall tickets.">
        <Button variant="gradient" size="sm">Download Hall Ticket</Button>
      </PageHeader>
      <div className="grid gap-4 sm:grid-cols-2">
        {exams.map((e) => (
          <Card key={e.code} className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold">{e.subject}</p>
                <p className="text-xs text-muted-foreground">{e.code}</p>
              </div>
              <Badge variant="secondary">{e.type}</Badge>
            </div>
            <div className="mt-4 flex items-center justify-between border-t pt-3 text-sm">
              <span className="text-muted-foreground">{formatDate(e.date)}</span>
              <span className="text-muted-foreground">{e.duration}</span>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
