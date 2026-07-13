"use client";

import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const slots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00"];
const grid: Record<string, Record<string, { subject: string; room: string } | null>> = {
  Monday: { "09:00": { subject: "Data Structures", room: "A-201" }, "11:00": { subject: "DBMS Lab", room: "Lab-3" }, "14:00": { subject: "Aptitude", room: "B-101" } },
  Tuesday: { "10:00": { subject: "Operating Systems", room: "A-205" }, "15:00": { subject: "Discrete Math", room: "C-110" } },
  Wednesday: { "09:00": { subject: "Data Structures", room: "A-201" }, "12:00": { subject: "Soft Skills", room: "Seminar" } },
  Thursday: { "11:00": { subject: "DBMS Lab", room: "Lab-3" }, "16:00": { subject: "Library", room: "Central Lib" } },
  Friday: { "10:00": { subject: "Operating Systems", room: "A-205" }, "14:00": { subject: "Project", room: "Lab-2" } },
};

export default function TimetablePage() {
  return (
    <>
      <PageHeader title="Timetable" description="Your weekly class schedule." />
      <Card className="overflow-x-auto p-4">
        <table className="w-full min-w-[640px] border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="w-16 text-left text-xs font-semibold uppercase text-muted-foreground">Time</th>
              {days.map((d) => (
                <th key={d} className="text-left text-sm font-semibold">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slots.map((slot) => (
              <tr key={slot}>
                <td className="align-top text-xs font-medium text-muted-foreground">{slot}</td>
                {days.map((d) => {
                  const cell = grid[d]?.[slot];
                  return (
                    <td key={d} className="align-top">
                      {cell ? (
                        <div className="rounded-xl bg-primary/10 p-2">
                          <p className="text-sm font-medium">{cell.subject}</p>
                          <p className="text-xs text-muted-foreground">{cell.room}</p>
                        </div>
                      ) : (
                        <div className="h-12 rounded-xl border border-dashed" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <div className="mt-4 flex gap-2">
        <Badge variant="secondary">A-201 · Block A</Badge>
        <Badge variant="secondary">Lab-3 · CS Labs</Badge>
        <Badge variant="secondary">Seminar · Hall 2</Badge>
      </div>
    </>
  );
}
