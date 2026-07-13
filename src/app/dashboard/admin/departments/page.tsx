"use client";

import { PageHeader } from "@/components/page-header";
import { DataTable, type Column } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { departments } from "@/lib/sample-data";
import type { Department } from "@/types";

export default function AdminDepartmentsPage() {
  const columns: Column<Department>[] = [
    { key: "name", header: "Department" },
    { key: "code", header: "Code" },
    { key: "description", header: "Description" },
    { key: "establishedYear", header: "Established" },
    { key: "id", header: "Actions", render: () => <Button variant="outline" size="sm">Edit</Button> },
  ];

  return (
    <>
      <PageHeader title="Departments" description="Manage academic departments and HODs.">
        <Button variant="gradient" size="sm">Add Department</Button>
      </PageHeader>
      <DataTable columns={columns} data={departments} searchPlaceholder="Search departments…" />
    </>
  );
}
