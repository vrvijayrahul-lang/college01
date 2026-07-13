"use client";

import { PageHeader } from "@/components/page-header";
import { DataTable, type Column } from "@/components/data-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { books as seed } from "@/lib/sample-data-books";
import type { Book } from "@/types";

export default function LibraryPage() {
  const columns: Column<Book>[] = [
    { key: "title", header: "Title" },
    { key: "author", header: "Author" },
    { key: "isbn", header: "ISBN" },
    {
      key: "available",
      header: "Availability",
      render: (b) => (
        <Badge variant={b.available > 0 ? "success" : "danger"}>
          {b.available}/{b.total}
        </Badge>
      ),
    },
    {
      key: "id",
      header: "Actions",
      render: (b) => (
        <Button variant="outline" size="sm" disabled={b.available === 0}>
          {b.available > 0 ? "Issue" : "Waitlist"}
        </Button>
      ),
    },
  ];

  return (
    <>
      <PageHeader title="Library" description="Search the catalog and manage book issues.">
        <Button variant="gradient" size="sm">Scan QR</Button>
      </PageHeader>
      <DataTable columns={columns} data={seed} searchPlaceholder="Search books, authors, ISBN…" />
    </>
  );
}
