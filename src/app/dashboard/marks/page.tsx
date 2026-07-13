"use client";

import * as React from "react";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";

const rows = [
  { roll: "CSE2001", name: "Karthik Nair", ia1: 18, ia2: 20 },
  { roll: "CSE2002", name: "Lakshmi Rao", ia1: 22, ia2: 24 },
  { roll: "CSE2003", name: "Rohan Mehta", ia1: 14, ia2: 16 },
  { roll: "CSE2004", name: "Anjali Das", ia1: 19, ia2: 21 },
];

export default function MarksEntryPage() {
  const { toast } = useToast();
  const [marks, setMarks] = React.useState(rows);

  const update = (i: number, key: "ia1" | "ia2", v: string) =>
    setMarks((prev) => prev.map((r, idx) => (idx === i ? { ...r, [key]: Number(v) || 0 } : r)));

  const save = () => toast({ title: "Marks saved", variant: "success" });

  return (
    <>
      <PageHeader title="Marks Entry" description="Internal assessment for Data Structures (CS301).">
        <Button variant="gradient" size="sm" onClick={save}>Save</Button>
      </PageHeader>
      <Card className="overflow-x-auto p-4">
        <table className="w-full min-w-[480px]">
          <thead>
            <tr className="border-b text-left text-xs uppercase text-muted-foreground">
              <th className="p-3">Roll</th>
              <th className="p-3">Name</th>
              <th className="p-3">IA-1 /25</th>
              <th className="p-3">IA-2 /25</th>
              <th className="p-3">Total</th>
            </tr>
          </thead>
          <tbody>
            {marks.map((r, i) => (
              <tr key={r.roll} className="border-b">
                <td className="p-3 text-sm">{r.roll}</td>
                <td className="p-3 text-sm">{r.name}</td>
                <td className="p-3">
                  <Input
                    type="number"
                    value={r.ia1}
                    onChange={(e) => update(i, "ia1", e.target.value)}
                    className="w-20"
                  />
                </td>
                <td className="p-3">
                  <Input
                    type="number"
                    value={r.ia2}
                    onChange={(e) => update(i, "ia2", e.target.value)}
                    className="w-20"
                  />
                </td>
                <td className="p-3 text-sm font-semibold">{r.ia1 + r.ia2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
}
