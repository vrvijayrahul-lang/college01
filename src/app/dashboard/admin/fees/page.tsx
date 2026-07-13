"use client";

import { PageHeader } from "@/components/page-header";
import { DataTable, type Column } from "@/components/data-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fees, students } from "@/lib/sample-data";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Fee } from "@/types";

const studentName = (id: string) => students.find((s) => s.id === id)?.name ?? id;

export default function AdminFeesPage() {
  const columns: Column<Fee>[] = [
    { key: "studentId", header: "Student", render: (f) => studentName(f.studentId) },
    { key: "category", header: "Category", render: (f) => f.category.toUpperCase() },
    { key: "amount", header: "Amount", render: (f) => formatCurrency(f.amount) },
    { key: "dueDate", header: "Due", render: (f) => formatDate(f.dueDate) },
    {
      key: "paid",
      header: "Status",
      render: (f) =>
        f.paid ? (
          <Badge variant="success">Paid</Badge>
        ) : (
          <Badge variant="warning">Pending</Badge>
        ),
    },
    {
      key: "id",
      header: "Actions",
      render: () => <Button variant="outline" size="sm">Receipt</Button>,
    },
  ];

  const total = fees.reduce((s, f) => s + f.amount, 0);
  const collected = fees.filter((f) => f.paid).reduce((s, f) => s + f.amount, 0);

  return (
    <>
      <PageHeader title="Fee Management" description="Track payments, dues, and generate receipts.">
        <Button variant="outline" size="sm">Send Reminders</Button>
        <Button variant="gradient" size="sm">Collect</Button>
      </PageHeader>
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border p-4">
          <p className="text-sm text-muted-foreground">Total Billed</p>
          <p className="text-xl font-bold">{formatCurrency(total)}</p>
        </div>
        <div className="rounded-2xl border p-4">
          <p className="text-sm text-muted-foreground">Collected</p>
          <p className="text-xl font-bold text-emerald-500">{formatCurrency(collected)}</p>
        </div>
        <div className="rounded-2xl border p-4">
          <p className="text-sm text-muted-foreground">Outstanding</p>
          <p className="text-xl font-bold text-amber-500">{formatCurrency(total - collected)}</p>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={fees}
        searchPlaceholder="Search fees…"
        filter={{
          key: "paid",
          placeholder: "Status",
          options: [
            { label: "Paid", value: "true" },
            { label: "Pending", value: "false" },
          ],
        }}
      />
    </>
  );
}
