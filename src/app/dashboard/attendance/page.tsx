"use client";

import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const subjects = [
  { name: "Data Structures", attended: 40, total: 44, faculty: "Dr. Sharma" },
  { name: "Database Systems", attended: 38, total: 42, faculty: "Dr. Kumar" },
  { name: "Operating Systems", attended: 41, total: 44, faculty: "Dr. Nair" },
  { name: "Discrete Math", attended: 35, total: 44, faculty: "Dr. Pillai" },
  { name: "Aptitude", attended: 20, total: 22, faculty: "Dr. Rao" },
];

export default function AttendancePage() {
  const overall = Math.round(
    (subjects.reduce((s, x) => s + x.attended, 0) /
      subjects.reduce((s, x) => s + x.total, 0)) *
      100,
  );

  return (
    <>
      <PageHeader title="Attendance" description="Your attendance across subjects." />
      <Card className="mb-6 flex items-center gap-6 p-5">
        <div className="text-center">
          <p className="text-3xl font-bold gradient-text">{overall}%</p>
          <p className="text-xs text-muted-foreground">Overall</p>
        </div>
        <div className="flex-1">
          <Progress value={overall} />
          <p className="mt-2 text-sm text-muted-foreground">
            Minimum required: 75%. You are {overall >= 75 ? "eligible" : "at risk"} for exams.
          </p>
        </div>
      </Card>

      <div className="space-y-3">
        {subjects.map((s) => {
          const pct = Math.round((s.attended / s.total) * 100);
          return (
            <Card key={s.name} className="flex items-center justify-between gap-4 p-4">
              <div>
                <p className="font-medium">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.faculty}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-40">
                  <Progress value={pct} />
                </div>
                <Badge variant={pct >= 90 ? "success" : pct >= 75 ? "warning" : "danger"}>
                  {pct}%
                </Badge>
                <span className="w-20 text-right text-sm text-muted-foreground">
                  {s.attended}/{s.total}
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
