"use client";

import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const results = [
  { code: "CS201", subject: "Data Structures", marks: 88, max: 100, grade: "A" },
  { code: "CS202", subject: "Database Systems", marks: 82, max: 100, grade: "A" },
  { code: "CS203", subject: "Operating Systems", marks: 76, max: 100, grade: "B" },
  { code: "CS151", subject: "Discrete Mathematics", marks: 91, max: 100, grade: "A+" },
  { code: "CS204", subject: "Computer Networks", marks: 69, max: 100, grade: "B" },
];

const gradeVariant: Record<string, "success" | "warning" | "danger"> = {
  "A+": "success",
  A: "success",
  B: "warning",
  C: "warning",
  F: "danger",
};

export default function ResultsPage() {
  const total = results.reduce((s, r) => s + r.marks, 0);
  const max = results.reduce((s, r) => s + r.max, 0);
  const gpa = ((total / max) * 10).toFixed(2);

  return (
    <>
      <PageHeader title="Results & GPA" description="Your internal and semester results." />
      <Card className="mb-6 flex items-center justify-around p-5 text-center">
        <div>
          <p className="text-3xl font-bold gradient-text">{total}</p>
          <p className="text-xs text-muted-foreground">Total Marks</p>
        </div>
        <div>
          <p className="text-3xl font-bold gradient-text">{gpa}</p>
          <p className="text-xs text-muted-foreground">GPA (10)</p>
        </div>
        <div>
          <p className="text-3xl font-bold gradient-text">8.7</p>
          <p className="text-xs text-muted-foreground">CGPA</p>
        </div>
      </Card>

      <div className="space-y-3">
        {results.map((r) => (
          <Card key={r.code} className="flex items-center justify-between gap-4 p-4">
            <div>
              <p className="font-medium">{r.subject}</p>
              <p className="text-xs text-muted-foreground">{r.code}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{r.marks}/{r.max}</span>
              <Badge variant={gradeVariant[r.grade] ?? "secondary"}>{r.grade}</Badge>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
