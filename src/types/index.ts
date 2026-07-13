// Core domain types for the College ERP.
// These mirror the Firestore collections described in the spec.

export type Role =
  | "super_admin"
  | "principal"
  | "vice_principal"
  | "hod"
  | "faculty"
  | "staff"
  | "student"
  | "parent"
  | "accountant"
  | "librarian"
  | "placement_officer"
  | "admission_officer";

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: Role;
  photoURL?: string;
  phone?: string;
  active: boolean;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
  departmentId?: string;
  studentId?: string;
  facultyId?: string;
}

export interface Department {
  id: string;
  name: string;
  code: string;
  hodId?: string;
  description?: string;
  establishedYear?: number;
}

export interface Course {
  id: string;
  title: string;
  departmentId: string;
  level: "UG" | "PG" | "Diploma" | "PhD";
  durationYears: number;
  intake: number;
  feePerYear: number;
  description?: string;
}

export interface Subject {
  id: string;
  courseId: string;
  name: string;
  code: string;
  credits: number;
  semester: number;
}

export interface Student {
  id: string;
  userId: string;
  rollNumber: string;
  name: string;
  departmentId: string;
  courseId: string;
  semester: number;
  admissionYear: number;
  cgpa: number;
  attendancePct: number;
}

export interface Faculty {
  id: string;
  userId: string;
  name: string;
  departmentId: string;
  designation: string;
  qualification: string;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  classId: string;
  date: string;
  status: "present" | "absent" | "late" | "leave";
}

export interface Result {
  id: string;
  studentId: string;
  examType: "internal" | "semester";
  subjectId: string;
  marks: number;
  maxMarks: number;
  grade: string;
  semester: number;
}

export interface Fee {
  id: string;
  studentId: string;
  amount: number;
  dueDate: string;
  paid: boolean;
  paidOn?: string;
  category: "tuition" | "hostel" | "exam" | "transport" | "other";
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  coverImage?: string;
}

export interface Notice {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  published: boolean;
  audience: Role[] | "all";
}

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  available: number;
  total: number;
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
  role: string;
  packageLPA: number;
}

export interface Application {
  id: string;
  userId: string;
  courseId: string;
  fullName: string;
  status: "submitted" | "under_review" | "approved" | "rejected" | "waitlisted";
  createdAt: string;
  meritScore?: number;
}
