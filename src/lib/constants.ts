import type { Role } from "@/types";

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Vidya University";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const ROLES: { value: Role; label: string; dashboard: string }[] = [
  { value: "super_admin", label: "Super Admin", dashboard: "/dashboard/admin" },
  { value: "principal", label: "Principal", dashboard: "/dashboard/principal" },
  { value: "vice_principal", label: "Vice Principal", dashboard: "/dashboard/principal" },
  { value: "hod", label: "HOD", dashboard: "/dashboard/faculty" },
  { value: "faculty", label: "Faculty", dashboard: "/dashboard/faculty" },
  { value: "staff", label: "Staff", dashboard: "/dashboard/admin" },
  { value: "student", label: "Student", dashboard: "/dashboard/student" },
  { value: "parent", label: "Parent", dashboard: "/dashboard/parent" },
  { value: "accountant", label: "Accountant", dashboard: "/dashboard/admin" },
  { value: "librarian", label: "Librarian", dashboard: "/dashboard/admin" },
  { value: "placement_officer", label: "Placement Officer", dashboard: "/dashboard/admin" },
  { value: "admission_officer", label: "Admission Officer", dashboard: "/dashboard/admin" },
];

export const ROLE_LABELS: Record<Role, string> = ROLES.reduce(
  (acc, r) => ({ ...acc, [r.value]: r.label }),
  {} as Record<Role, string>,
);

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Courses", href: "/courses" },
  { label: "Faculty", href: "/faculty" },
  { label: "Admissions", href: "/admission" },
  { label: "Placements", href: "/placements" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { label: "Students", value: 12000, suffix: "+" },
  { label: "Faculty", value: 650, suffix: "+" },
  { label: "Programs", value: 84, suffix: "" },
  { label: "Recruiters", value: 320, suffix: "+" },
  { label: "Alumni", value: 45000, suffix: "+" },
  { label: "Placement %", value: 94, suffix: "%" },
];

export const CONTACT = {
  email: "info@vidyauniversity.edu",
  phone: "+91 90000 00000",
  address: "Vidya Nagar, Knowledge Park, Bangalore 560001, India",
  lat: 12.9716,
  lng: 77.5946,
};
