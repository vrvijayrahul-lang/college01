"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SearchInput } from "@/components/search-input";
import { Pagination } from "@/components/pagination";
import { EmptyState } from "@/components/empty-state";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export interface Column<T> {
  key: string;
  header: string;
  render?: (row: T) => React.ReactNode;
  className?: string;
  searchable?: boolean;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  pageSize?: number;
  searchPlaceholder?: string;
  searchKeys?: (keyof T)[];
  filter?: {
    key: keyof T;
    placeholder: string;
    options: { label: string; value: string }[];
  };
  empty?: { title: string; description?: string };
}

export function DataTable<T extends { id?: string | number }>({
  columns,
  data,
  loading,
  pageSize = 8,
  searchPlaceholder = "Search…",
  filter,
  empty,
}: DataTableProps<T>) {
  const [query, setQuery] = React.useState("");
  const [filterValue, setFilterValue] = React.useState("all");
  const [page, setPage] = React.useState(1);

  // Filtering combines free-text search across string fields + dropdown filter.
  const rows = React.useMemo(() => {
    let result = [...data];
    const q = query.trim().toLowerCase();
    if (q) {
      result = result.filter((row) =>
        columns.some(
          (c) =>
            c.searchable !== false &&
            String((row as any)[c.key] ?? "")
              .toLowerCase()
              .includes(q),
        ),
      );
    }
    if (filter && filterValue !== "all") {
      result = result.filter((row) => String((row as any)[filter.key]) === filterValue);
    }
    return result;
  }, [data, query, filter, filterValue, columns]);

  const pageCount = Math.max(1, Math.ceil(rows.length / pageSize));
  const current = Math.min(page, pageCount);
  const paged = rows.slice((current - 1) * pageSize, current * pageSize);

  React.useEffect(() => setPage(1), [query, filterValue]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="sm:max-w-xs sm:flex-1">
          <SearchInput placeholder={searchPlaceholder} onValueChange={setQuery} />
        </div>
        {filter && (
          <Select value={filterValue} onValueChange={setFilterValue}>
            <SelectTrigger className="sm:w-48">
              <SelectValue placeholder={filter.placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {filter.options.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      <div className={cn("rounded-2xl border bg-card")}>
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((c) => (
                <TableHead key={c.key} className={c.className}>
                  {c.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              Array.from({ length: pageSize > 6 ? 6 : pageSize }).map((_, i) => (
                <TableRow key={i}>
                  {columns.map((c) => (
                    <TableCell key={c.key}>
                      <Skeleton className="h-5 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : paged.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <EmptyState
                    title={empty?.title ?? "No records found"}
                    description={empty?.description}
                  />
                </TableCell>
              </TableRow>
            ) : (
              paged.map((row, i) => (
                <TableRow key={row.id ?? i}>
                  {columns.map((c) => (
                    <TableCell key={c.key} className={c.className}>
                      {c.render ? c.render(row) : String((row as any)[c.key] ?? "—")}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {rows.length} record{rows.length === 1 ? "" : "s"}
        </p>
        <Pagination page={current} pageCount={pageCount} onPageChange={setPage} />
      </div>
    </div>
  );
}
