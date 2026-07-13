"use client";

import * as React from "react";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/toast";

type AttendanceStatus = "present" | "late" | "absent" | "leave";

const students: { roll: string; name: string; status: AttendanceStatus }[] = [
  { roll: "CSE2001", name: "Karthik Nair", status: "present" },
  { roll: "CSE2002", name: "Lakshmi Rao", status: "present" },
  { roll: "CSE2003", name: "Rohan Mehta", status: "absent" },
  { roll: "CSE2004", name: "Anjali Das", status: "late" },
  { roll: "CSE2005", name: "Vikram Singh", status: "present" },
];

export default function MarkAttendancePage() {
  const { toast } = useToast();
  const [state, setState] = React.useState(students);
  const [date] = React.useState(new Date().toISOString().slice(0, 10));

  const set = (i: number, status: AttendanceStatus) =>
    setState((prev) => prev.map((s, idx) => (idx === i ? { ...s, status } : s)));

  const present = state.filter((s) => s.status === "present" || s.status === "late").length;

  return (
    <>
      <PageHeader title="Mark Attendance" description={`Data Structures · ${date}`}>
        <Badge variant="secondary">{present}/{state.length} present</Badge>
        <Button variant="gradient" size="sm" onClick={() => toast({ title: "Attendance saved", variant: "success" })}>
          Save
        </Button>
      </PageHeader>
      <Card className="divide-y">
        {state.map((s, i) => (
          <div key={s.roll} className="flex items-center justify-between gap-4 p-4">
            <div>
              <p className="font-medium">{s.name}</p>
              <p className="text-xs text-muted-foreground">{s.roll}</p>
            </div>
            <div className="flex gap-2">
              {(["present", "late", "absent", "leave"] as const).map((opt) => (
                <Button
                  key={opt}
                  size="sm"
                  variant={s.status === opt ? "gradient" : "outline"}
                  onClick={() => set(i, opt)}
                  className="capitalize"
                >
                  {opt}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </Card>
    </>
  );
}
