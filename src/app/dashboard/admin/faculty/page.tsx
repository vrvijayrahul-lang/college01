"use client";

import { PageHeader } from "@/components/page-header";
import { DataTable, type Column } from "@/components/data-table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { faculty, departments } from "@/lib/sample-data";
import { initials } from "@/lib/utils";
import type { Faculty } from "@/types";

const deptName = (id: string) => departments.find((d) => d.id === id)?.name ?? id;

export default function AdminFacultyPage() {
  const columns: Column<Faculty>[] = [
    {
      key: "name",
      header: "Faculty",
      render: (f) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{initials(f.name)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{f.name}</p>
            <p className="text-xs text-muted-foreground">{f.qualification}</p>
          </div>
        </div>
      ),
    },
    { key: "departmentId", header: "Department", render: (f) => deptName(f.departmentId) },
    { key: "designation", header: "Designation" },
    {
      key: "id",
      header: "Status",
      render: () => <Badge variant="success">Active</Badge>,
    },
    { key: "id", header: "Actions", render: () => <Button variant="outline" size="sm">View</Button> },
  ];

  return (
    <>
      <PageHeader title="Faculty" description="Manage faculty profiles and departments.">
        <Button variant="gradient" size="sm">Add Faculty</Button>
      </PageHeader>
      <DataTable
        columns={columns}
        data={faculty}
        searchPlaceholder="Search faculty…"
        filter={{
          key: "departmentId",
          placeholder: "Department",
          options: departments.map((d) => ({ label: d.name, value: d.id })),
        }}
      />
    </>
  );
}
