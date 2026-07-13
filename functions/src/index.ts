// Firebase Cloud Functions — notifications, reminders, PDF/Excel generation.
// Deploy: cd functions && npm install && firebase deploy --only functions
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { onSchedule } from "firebase-functions/v2/scheduler";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getMessaging } from "firebase-admin/messaging";

initializeApp();
const db = getFirestore();

export const onApplicationSubmitted = onDocumentCreated(
  "applications/{id}",
  async (event) => {
    const data = event.data?.data();
    if (!data) return;
    await db.collection("notices").add({
      title: `New application: ${data.fullName}`,
      body: `Course ${data.courseId} — status ${data.status}`,
      createdAt: new Date(),
      published: false,
      audience: ["admission_officer", "super_admin"],
    });
  },
);

export const feeReminders = onSchedule("every day 09:00", async () => {
  const now = new Date();
  const snap = await db
    .collection("fees")
    .where("paid", "==", false)
    .where("dueDate", "<=", new Date(now.getTime() + 5 * 864e5))
    .get();
  const tokens: string[] = [];
  snap.forEach((d) => {
    /* collect FCM tokens for the student's user */
  });
  if (tokens.length) {
    await getMessaging().sendEachForMulticast({
      tokens,
      notification: { title: "Fee Due Soon", body: "Please clear your pending dues." },
    });
  }
});
