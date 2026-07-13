"use client";

import { PageHeader } from "@/components/page-header";
import { DataTable, type Column } from "@/components/data-table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { students, departments } from "@/lib/sample-data";
import { initials } from "@/lib/utils";
import type { Student } from "@/types";

const deptName = (id: string) => departments.find((d) => d.id === id)?.name ?? id;

export default function AdminStudentsPage() {
  const columns: Column<Student>[] = [
    {
      key: "name",
      header: "Student",
      render: (s) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{initials(s.name)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{s.name}</p>
            <p className="text-xs text-muted-foreground">{s.rollNumber}</p>
          </div>
        </div>
      ),
    },
    { key: "departmentId", header: "Department", render: (s) => deptName(s.departmentId) },
    { key: "semester", header: "Semester" },
    { key: "cgpa", header: "CGPA" },
    {
      key: "attendancePct",
      header: "Attendance",
      render: (s) => (
        <Badge variant={s.attendancePct >= 90 ? "success" : s.attendancePct >= 75 ? "warning" : "danger"}>
          {s.attendancePct}%
        </Badge>
      ),
    },
    {
      key: "id",
      header: "Actions",
      render: () => <Button variant="outline" size="sm">View</Button>,
    },
  ];

  return (
    <>
      <PageHeader title="Students" description="Manage student records, attendance, and performance.">
        <Button variant="gradient" size="sm">Add Student</Button>
        <Button variant="outline" size="sm">Export CSV</Button>
      </PageHeader>
      <DataTable
        columns={columns}
        data={students}
        searchPlaceholder="Search students…"
        filter={{
          key: "departmentId",
          placeholder: "Department",
          options: departments.map((d) => ({ label: d.name, value: d.id })),
        }}
        empty={{ title: "No students found" }}
      />
    </>
  );
}
