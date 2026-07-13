// Seed Firestore with sample data using the Firebase Admin SDK.
// Requires FIREBASE_ADMIN_PROJECT_ID, FIREBASE_ADMIN_CLIENT_EMAIL,
// FIREBASE_ADMIN_PRIVATE_KEY environment variables.
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const app = initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    privateKey: (process.env.FIREBASE_ADMIN_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
  }),
});

const db = getFirestore();

// Inline mirror of src/lib/sample-data.ts (kept dependency-free for scripts).
const departments = [
  { id: "cse", name: "Computer Science & Engineering", code: "CSE", establishedYear: 1998 },
  { id: "ece", name: "Electronics & Communication", code: "ECE", establishedYear: 1998 },
  { id: "mech", name: "Mechanical Engineering", code: "ME", establishedYear: 1999 },
];

const courses = [
  { id: "btech-cse", title: "B.Tech Computer Science", departmentId: "cse", level: "UG", durationYears: 4, intake: 240, feePerYear: 125000 },
  { id: "btech-ai", title: "B.Tech Artificial Intelligence", departmentId: "cse", level: "UG", durationYears: 4, intake: 120, feePerYear: 150000 },
];

async function main() {
  for (const d of departments) await db.collection("departments").doc(d.id).set(d);
  for (const c of courses) await db.collection("courses").doc(c.id).set(c);
  console.log(`Seeded ${departments.length} departments and ${courses.length} courses.`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
