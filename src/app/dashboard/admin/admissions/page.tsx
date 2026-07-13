"use client";

import { PageHeader } from "@/components/page-header";
import { DataTable, type Column } from "@/components/data-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { applications, courses } from "@/lib/sample-data";
import type { Application } from "@/types";

const statusVariant: Record<Application["status"], "secondary" | "warning" | "success" | "danger" | "default"> = {
  submitted: "secondary",
  under_review: "warning",
  approved: "success",
  rejected: "danger",
  waitlisted: "default",
};

export default function AdminAdmissionsPage() {
  const columns: Column<Application>[] = [
    { key: "fullName", header: "Applicant" },
    { key: "courseId", header: "Course", render: (a) => courses.find((c) => c.id === a.courseId)?.title ?? a.courseId },
    {
      key: "meritScore",
      header: "Merit",
      render: (a) => (a.meritScore != null ? a.meritScore : "—"),
    },
    {
      key: "status",
      header: "Status",
      render: (a) => (
        <Badge variant={statusVariant[a.status]} className="capitalize">
          {a.status.replace("_", " ")}
        </Badge>
      ),
    },
    {
      key: "createdAt",
      header: "Applied",
      render: (a) => new Date(a.createdAt).toLocaleDateString("en-IN"),
    },
    {
      key: "id",
      header: "Actions",
      render: () => (
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Review</Button>
          <Button variant="gradient" size="sm">Approve</Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <PageHeader title="Admissions" description="Track and approve applications with the workflow.">
        <Button variant="outline" size="sm">Merit List</Button>
        <Button variant="gradient" size="sm">Generate Letters</Button>
      </PageHeader>
      <DataTable
        columns={columns}
        data={applications}
        searchPlaceholder="Search applications…"
        filter={{
          key: "status",
          placeholder: "Status",
          options: [
            { label: "Submitted", value: "submitted" },
            { label: "Under Review", value: "under_review" },
            { label: "Approved", value: "approved" },
            { label: "Waitlisted", value: "waitlisted" },
            { label: "Rejected", value: "rejected" },
          ],
        }}
      />
    </>
  );
}
