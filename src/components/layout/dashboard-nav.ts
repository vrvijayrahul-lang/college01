import type { Role } from "@/types";
import {
  LayoutDashboard,
  User,
  CalendarCheck,
  CalendarDays,
  FileText,
  NotebookPen,
  BookOpen,
  Video,
  ClipboardCheck,
  GraduationCap,
  LineChart,
  Wallet,
  Receipt,
  Award,
  LogOut,
  Send,
  Bell,
  Building2,
  Users,
  Library,
  BedDouble,
  Bus,
  Briefcase,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  roles: Role[];
}

export const DASHBOARD_NAV: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, roles: ["student", "faculty", "parent", "super_admin", "principal", "vice_principal", "hod", "accountant", "librarian", "placement_officer", "admission_officer", "staff"] },
  { label: "Profile", href: "/dashboard/profile", icon: User, roles: ["student", "faculty", "parent", "super_admin", "principal", "vice_principal", "hod", "accountant", "librarian", "placement_officer", "admission_officer", "staff"] },

  // Student
  { label: "Attendance", href: "/dashboard/attendance", icon: CalendarCheck, roles: ["student", "parent"] },
  { label: "Timetable", href: "/dashboard/timetable", icon: CalendarDays, roles: ["student", "faculty", "hod", "principal", "vice_principal"] },
  { label: "Assignments", href: "/dashboard/assignments", icon: FileText, roles: ["student", "faculty"] },
  { label: "Notes & Materials", href: "/dashboard/materials", icon: NotebookPen, roles: ["student", "faculty"] },
  { label: "Online Classes", href: "/dashboard/classes", icon: Video, roles: ["student", "faculty"] },
  { label: "Exams", href: "/dashboard/exams", icon: ClipboardCheck, roles: ["student", "faculty"] },
  { label: "Results & GPA", href: "/dashboard/results", icon: GraduationCap, roles: ["student", "parent"] },
  { label: "Fee Payments", href: "/dashboard/fees", icon: Wallet, roles: ["student", "parent", "accountant"] },
  { label: "Receipts", href: "/dashboard/receipts", icon: Receipt, roles: ["student", "accountant"] },
  { label: "Certificates", href: "/dashboard/certificates", icon: Award, roles: ["student", "super_admin", "principal"] },
  { label: "Leave", href: "/dashboard/leave", icon: Send, roles: ["student", "faculty"] },
  { label: "Library", href: "/dashboard/library", icon: Library, roles: ["student", "faculty", "librarian"] },
  { label: "Hostel", href: "/dashboard/hostel", icon: BedDouble, roles: ["student", "super_admin"] },
  { label: "Transport", href: "/dashboard/transport", icon: Bus, roles: ["student", "super_admin"] },
  { label: "Placement Portal", href: "/dashboard/placement", icon: Briefcase, roles: ["student", "placement_officer", "super_admin"] },
  { label: "Chat", href: "/dashboard/chat", icon: MessagesSquare, roles: ["student", "faculty", "parent"] },

  // Faculty
  { label: "Mark Attendance", href: "/dashboard/mark-attendance", icon: CalendarCheck, roles: ["faculty", "hod"] },
  { label: "Marks Entry", href: "/dashboard/marks", icon: LineChart, roles: ["faculty", "hod"] },
  { label: "Reports", href: "/dashboard/reports", icon: FileText, roles: ["faculty", "hod", "super_admin", "principal", "accountant"] },
  { label: "Research", href: "/dashboard/research", icon: BookOpen, roles: ["faculty", "hod", "super_admin"] },

  // Parent
  { label: "Progress", href: "/dashboard/progress", icon: LineChart, roles: ["parent"] },

  // Admin / Principal
  { label: "Students", href: "/dashboard/admin/students", icon: Users, roles: ["super_admin", "principal", "vice_principal", "admission_officer"] },
  { label: "Faculty", href: "/dashboard/admin/faculty", icon: Users, roles: ["super_admin", "principal", "hod"] },
  { label: "Departments", href: "/dashboard/admin/departments", icon: Building2, roles: ["super_admin", "principal", "hod"] },
  { label: "Courses", href: "/dashboard/admin/courses", icon: BookOpen, roles: ["super_admin", "principal", "hod"] },
  { label: "Admissions", href: "/dashboard/admin/admissions", icon: FileText, roles: ["super_admin", "principal", "admission_officer"] },
  { label: "Fees", href: "/dashboard/admin/fees", icon: Wallet, roles: ["super_admin", "accountant"] },
  { label: "Analytics", href: "/dashboard/admin/analytics", icon: LineChart, roles: ["super_admin", "principal", "vice_principal"] },
  { label: "Notices", href: "/dashboard/admin/notices", icon: Bell, roles: ["super_admin", "principal", "vice_principal"] },
  { label: "Settings", href: "/dashboard/admin/settings", icon: Building2, roles: ["super_admin"] },
];

export function navForRole(role?: Role | null): NavItem[] {
  if (!role) return [];
  return DASHBOARD_NAV.filter((item) => item.roles.includes(role));
}
