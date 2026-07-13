import type {
  Course,
  Department,
  Event,
  Faculty,
  Application,
  Company,
  Student,
  Fee,
} from "@/types";

export const departments: Department[] = [
  { id: "cse", name: "Computer Science & Engineering", code: "CSE", description: "AI, ML, systems, and software engineering.", establishedYear: 1998 },
  { id: "ece", name: "Electronics & Communication", code: "ECE", description: "VLSI, signal processing, embedded systems.", establishedYear: 1998 },
  { id: "mech", name: "Mechanical Engineering", code: "ME", description: "Robotics, thermal, manufacturing.", establishedYear: 1999 },
  { id: "civil", name: "Civil Engineering", code: "CE", description: "Structures, geotech, transportation.", establishedYear: 1999 },
  { id: "mba", name: "Management Studies", code: "MBA", description: "Finance, marketing, analytics.", establishedYear: 2005 },
  { id: "sci", name: "Applied Sciences", code: "SCI", description: "Mathematics, physics, chemistry.", establishedYear: 2001 },
];

export const courses: Course[] = [
  { id: "btech-cse", title: "B.Tech Computer Science", departmentId: "cse", level: "UG", durationYears: 4, intake: 240, feePerYear: 125000, description: "Comprehensive computing program with AI/ML tracks." },
  { id: "btech-ai", title: "B.Tech Artificial Intelligence", departmentId: "cse", level: "UG", durationYears: 4, intake: 120, feePerYear: 150000, description: "Specialized AI and data science curriculum." },
  { id: "btech-ece", title: "B.Tech Electronics & Comm.", departmentId: "ece", level: "UG", durationYears: 4, intake: 180, feePerYear: 120000, description: "Modern electronics and communication systems." },
  { id: "btech-mech", title: "B.Tech Mechanical", departmentId: "mech", level: "UG", durationYears: 4, intake: 180, feePerYear: 110000, description: "Design, manufacturing, and thermal engineering." },
  { id: "mtech-cse", title: "M.Tech Computer Science", departmentId: "cse", level: "PG", durationYears: 2, intake: 60, feePerYear: 140000, description: "Advanced research-oriented postgraduate program." },
  { id: "mba", title: "Master of Business Admin", departmentId: "mba", level: "PG", durationYears: 2, intake: 120, feePerYear: 180000, description: "Industry-aligned management education." },
];

export const faculty: Faculty[] = [
  { id: "f1", userId: "u1", name: "Dr. Anita Sharma", departmentId: "cse", designation: "Professor & HOD", qualification: "Ph.D. IIT Bombay" },
  { id: "f2", userId: "u2", name: "Dr. Rajesh Kumar", departmentId: "ece", designation: "Professor", qualification: "Ph.D. IISc" },
  { id: "f3", userId: "u3", name: "Dr. Meera Nair", departmentId: "mech", designation: "Associate Professor", qualification: "Ph.D. NIT Trichy" },
  { id: "f4", userId: "u4", name: "Dr. Suresh Pillai", departmentId: "mba", designation: "Professor", qualification: "Ph.D. IIM" },
];

export const events: Event[] = [
  { id: "e1", title: "Tech Fest 2026", description: "Annual inter-college technical festival with hackathons, workshops, and exhibitions.", startDate: "2026-08-12", endDate: "2026-08-14", location: "Main Auditorium" },
  { id: "e2", title: "Convocation", description: "Graduation ceremony for the class of 2026.", startDate: "2026-09-20", endDate: "2026-09-20", location: "Open Air Theatre" },
  { id: "e3", title: "Industry Connect Summit", description: "Recruiters and alumni networking summit.", startDate: "2026-10-05", endDate: "2026-10-05", location: "Seminar Hall" },
];

export const news = [
  { id: "n1", title: "University ranks among top 50 in NIRF 2026", date: "2026-06-30", tag: "Achievement" },
  { id: "n2", title: "Students win national hackathon", date: "2026-06-22", tag: "Students" },
  { id: "n3", title: "New AI research lab inaugurated", date: "2026-06-10", tag: "Research" },
];

export const testimonials = [
  { id: "t1", name: "Priya Menon", role: "Software Engineer, Google", text: "The faculty and labs gave me the foundation to succeed at a global tech company." },
  { id: "t2", name: "Arjun Rao", role: "Data Scientist, Flipkart", text: "Project-based learning and strong industry mentorship made all the difference." },
  { id: "t3", name: "Sneha Iyer", role: "Product Manager, Microsoft", text: "An ecosystem that truly cares about holistic student development." },
];

export const recruiters = [
  "Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro",
  "Accenture", "Deloitte", "IBM", "Cognizant", "Capgemini", "Paytm",
];

export const companies: Company[] = [
  { id: "c1", name: "Google", role: "SDE", packageLPA: 45 },
  { id: "c2", name: "Microsoft", role: "PM", packageLPA: 41 },
  { id: "c3", name: "Amazon", role: "SDE", packageLPA: 38 },
  { id: "c4", name: "Goldman Sachs", role: "Analyst", packageLPA: 35 },
  { id: "c5", name: "Flipkart", role: "DS", packageLPA: 28 },
  { id: "c6", name: "Adobe", role: "SDE", packageLPA: 31 },
];

export const gallery = [
  { id: "g1", title: "Convocation 2025", gradient: "from-blue-500 to-indigo-600" },
  { id: "g2", title: "Robotics Lab", gradient: "from-indigo-500 to-purple-600" },
  { id: "g3", title: "Central Library", gradient: "from-sky-500 to-blue-600" },
  { id: "g4", title: "Sports Meet", gradient: "from-cyan-500 to-blue-600" },
  { id: "g5", title: "Tech Fest", gradient: "from-violet-500 to-indigo-600" },
  { id: "g6", title: "Hostel Block", gradient: "from-blue-500 to-sky-600" },
];

export const applications: Application[] = [
  { id: "a1", userId: "u1", courseId: "btech-cse", fullName: "Karthik Nair", status: "under_review", createdAt: "2026-05-10" },
  { id: "a2", userId: "u2", courseId: "btech-ai", fullName: "Lakshmi Rao", status: "approved", createdAt: "2026-05-12", meritScore: 92 },
  { id: "a3", userId: "u3", courseId: "mba", fullName: "Vikram Singh", status: "submitted", createdAt: "2026-05-14" },
  { id: "a4", userId: "u4", courseId: "btech-ece", fullName: "Anjali Das", status: "waitlisted", createdAt: "2026-05-15", meritScore: 81 },
  { id: "a5", userId: "u5", courseId: "btech-cse", fullName: "Rohan Mehta", status: "rejected", createdAt: "2026-05-16" },
];

export const students: Student[] = [
  { id: "s1", userId: "u1", rollNumber: "CSE2001", name: "Karthik Nair", departmentId: "cse", courseId: "btech-cse", semester: 5, admissionYear: 2023, cgpa: 8.7, attendancePct: 92 },
  { id: "s2", userId: "u2", rollNumber: "CSE2002", name: "Lakshmi Rao", departmentId: "cse", courseId: "btech-cse", semester: 5, admissionYear: 2023, cgpa: 9.1, attendancePct: 96 },
  { id: "s3", userId: "u3", rollNumber: "ECE2001", name: "Vikram Singh", departmentId: "ece", courseId: "btech-ece", semester: 3, admissionYear: 2024, cgpa: 7.9, attendancePct: 88 },
  { id: "s4", userId: "u4", rollNumber: "MEC2001", name: "Anjali Das", departmentId: "mech", courseId: "btech-mech", semester: 5, admissionYear: 2023, cgpa: 8.3, attendancePct: 90 },
  { id: "s5", userId: "u5", rollNumber: "CSE2003", name: "Rohan Mehta", departmentId: "cse", courseId: "btech-cse", semester: 3, admissionYear: 2024, cgpa: 7.2, attendancePct: 79 },
];

export const fees: Fee[] = [
  { id: "f1", studentId: "s1", amount: 62500, dueDate: "2026-07-15", paid: false, category: "tuition" },
  { id: "f2", studentId: "s2", amount: 62500, dueDate: "2026-07-15", paid: true, paidOn: "2026-06-20", category: "tuition" },
  { id: "f3", studentId: "s3", amount: 60000, dueDate: "2026-07-15", paid: false, category: "tuition" },
  { id: "f4", studentId: "s4", amount: 55000, dueDate: "2026-07-15", paid: true, paidOn: "2026-06-18", category: "tuition" },
];

// Chart datasets
export const admissionsTrend = [
  { name: "2021", value: 2400 },
  { name: "2022", value: 2800 },
  { name: "2023", value: 3100 },
  { name: "2024", value: 3500 },
  { name: "2025", value: 3900 },
  { name: "2026", value: 4200 },
];

export const attendanceTrend = [
  { name: "Jan", present: 94 },
  { name: "Feb", present: 92 },
  { name: "Mar", present: 95 },
  { name: "Apr", present: 90 },
  { name: "May", present: 93 },
  { name: "Jun", present: 96 },
];

export const revenueTrend = [
  { name: "Q1", value: 4.2 },
  { name: "Q2", value: 5.1 },
  { name: "Q3", value: 4.8 },
  { name: "Q4", value: 6.0 },
];

export const placementByDept = [
  { name: "CSE", value: 240 },
  { name: "ECE", value: 180 },
  { name: "ME", value: 150 },
  { name: "CE", value: 120 },
  { name: "MBA", value: 110 },
];

export const coursePopularity = [
  { name: "CSE", value: 420 },
  { name: "AI", value: 240 },
  { name: "ECE", value: 300 },
  { name: "ME", value: 240 },
  { name: "MBA", value: 180 },
];
