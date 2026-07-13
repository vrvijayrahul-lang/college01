"use client";

import { PageHeader } from "@/components/page-header";
import { DataTable, type Column } from "@/components/data-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { courses, departments } from "@/lib/sample-data";
import { formatCurrency } from "@/lib/utils";
import type { Course } from "@/types";

const deptName = (id: string) => departments.find((d) => d.id === id)?.code ?? id;

export default function AdminCoursesPage() {
  const columns: Column<Course>[] = [
    { key: "title", header: "Course" },
    { key: "departmentId", header: "Dept", render: (c) => deptName(c.departmentId) },
    { key: "level", header: "Level", render: (c) => <Badge variant="secondary">{c.level}</Badge> },
    { key: "durationYears", header: "Duration", render: (c) => `${c.durationYears} yrs` },
    { key: "intake", header: "Intake" },
    { key: "feePerYear", header: "Fee/yr", render: (c) => formatCurrency(c.feePerYear) },
    { key: "id", header: "Actions", render: () => <Button variant="outline" size="sm">Edit</Button> },
  ];

  return (
    <>
      <PageHeader title="Courses" description="Manage programs, intake, and fees.">
        <Button variant="gradient" size="sm">Add Course</Button>
      </PageHeader>
      <DataTable
        columns={columns}
        data={courses}
        searchPlaceholder="Search courses…"
        filter={{
          key: "level",
          placeholder: "Level",
          options: [
            { label: "UG", value: "UG" },
            { label: "PG", value: "PG" },
          ],
        }}
      />
    </>
  );
}
