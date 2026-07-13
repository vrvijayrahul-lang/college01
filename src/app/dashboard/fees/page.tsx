"use client";

import * as React from "react";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { formatCurrency, formatDate } from "@/lib/utils";

const items = [
  { id: 1, category: "Tuition (Sem 1)", amount: 62500, due: "2026-07-15", paid: false },
  { id: 2, category: "Exam Fee", amount: 2500, due: "2026-07-10", paid: false },
  { id: 3, category: "Tuition (Sem 0)", amount: 62500, due: "2026-01-15", paid: true, paidOn: "2026-01-02" },
];

export default function StudentFeesPage() {
  const { toast } = useToast();
  const [paying, setPaying] = React.useState<number | null>(null);

  const pay = (id: number) => {
    setPaying(id);
    setTimeout(() => {
      setPaying(null);
      toast({ title: "Payment successful", description: "Receipt generated.", variant: "success" });
    }, 1200);
  };

  return (
    <>
      <PageHeader title="Fee Payments" description="View dues and pay securely online." />
      <div className="space-y-3">
        {items.map((f) => (
          <Card key={f.id} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <p className="font-medium">{f.category}</p>
                <Badge variant={f.paid ? "success" : "warning"}>
                  {f.paid ? "Paid" : "Due"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {f.paid ? `Paid on ${formatDate(f.paidOn)}` : `Due ${formatDate(f.due)}`}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold">{formatCurrency(f.amount)}</span>
              {f.paid ? (
                <Button variant="outline" size="sm">Download</Button>
              ) : (
                <Button variant="gradient" size="sm" onClick={() => pay(f.id)} disabled={paying === f.id}>
                  {paying === f.id ? "Processing…" : "Pay Now"}
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
