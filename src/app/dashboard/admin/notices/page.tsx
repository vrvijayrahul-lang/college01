"use client";

import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

const notices = [
  { id: 1, title: "Semester exams commence 20 Jul", audience: "Students", published: true, date: "2026-07-01" },
  { id: 2, title: "Faculty Development Program", audience: "Faculty", published: true, date: "2026-06-28" },
  { id: 3, title: "Hostel refund window open", audience: "Students", published: false, date: "2026-06-25" },
  { id: 4, title: "Parent-Teacher Meeting", audience: "Parents", published: true, date: "2026-06-20" },
];

export default function AdminNoticesPage() {
  return (
    <>
      <PageHeader title="Notices & Announcements" description="Publish notices to students, faculty, and parents.">
        <Button variant="gradient" size="sm">New Notice</Button>
      </PageHeader>
      <div className="space-y-3">
        {notices.map((n) => (
          <Card key={n.id} className="flex items-center justify-between gap-4 p-4">
            <div>
              <div className="flex items-center gap-2">
                <p className="font-medium">{n.title}</p>
                <Badge variant={n.published ? "success" : "warning"}>
                  {n.published ? "Published" : "Draft"}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                {n.audience} · {formatDate(n.date)}
              </p>
            </div>
            <Button variant="outline" size="sm">Edit</Button>
          </Card>
        ))}
      </div>
    </>
  );
}
