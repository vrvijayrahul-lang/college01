"use client";

import { PageHeader } from "@/components/page-header";
import { DataTable, type Column } from "@/components/data-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { companies as seed } from "@/lib/sample-data-companies";
import type { Company } from "@/types";

export default function PlacementPage() {
  const columns: Column<Company>[] = [
    { key: "name", header: "Company" },
    { key: "role", header: "Role" },
    {
      key: "packageLPA",
      header: "Package",
      render: (c) => `₹${c.packageLPA} LPA`,
    },
    {
      key: "id",
      header: "Status",
      render: () => <Badge variant="warning">Apply by 15 Jul</Badge>,
    },
    {
      key: "id",
      header: "Actions",
      render: () => <Button variant="gradient" size="sm">Apply</Button>,
    },
  ];

  return (
    <>
      <PageHeader title="Placement Portal" description="Browse openings and track your applications.">
        <Button variant="outline" size="sm">Upload Resume</Button>
      </PageHeader>
      <DataTable columns={columns} data={seed} searchPlaceholder="Search companies…" />
    </>
  );
}
