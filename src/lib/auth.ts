"use client";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, isFirebaseConfigured } from "@/lib/firebase";
import type { Role, UserProfile } from "@/types";
import { ROLES } from "@/lib/constants";

const DEMO_KEY = "college_erp_demo_role";

export const DEMO_ROLE: Role = "student";

export function isDemoMode() {
  if (typeof window === "undefined") return false;
  return !isFirebaseConfigured;
}

export async function loginWithEmail(email: string, password: string) {
  if (!auth) throw new Error("Firebase is not configured.");
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function registerWithEmail(
  name: string,
  email: string,
  password: string,
  role: Role = "student",
) {
  if (!auth) throw new Error("Firebase is not configured.");
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: name });
  await sendEmailVerification(cred.user);
  const profile: UserProfile = {
    uid: cred.user.uid,
    email: cred.user.email ?? email,
    displayName: name,
    role,
    active: true,
    emailVerified: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  if (db) {
    await setDoc(doc(db, "users", cred.user.uid), {
      ...profile,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }
  return cred.user;
}

export async function loginWithGoogle() {
  if (!auth) throw new Error("Firebase is not configured.");
  const provider = new GoogleAuthProvider();
  const cred = await signInWithPopup(auth, provider);
  if (db) {
    const ref = doc(db, "users", cred.user.uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      await setDoc(ref, {
        uid: cred.user.uid,
        email: cred.user.email,
        displayName: cred.user.displayName,
        photoURL: cred.user.photoURL,
        role: "student" as Role,
        active: true,
        emailVerified: cred.user.emailVerified,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }
  }
  return cred.user;
}

export async function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(DEMO_KEY);
  }
  if (auth) await signOut(auth);
}

export async function resetPassword(email: string) {
  if (!auth) throw new Error("Firebase is not configured.");
  await sendPasswordResetEmail(auth, email);
}

export async function resendVerification(user: User) {
  await sendEmailVerification(user);
}

// ---- Demo mode (no Firebase config required) ----
export function signInDemo(role: Role) {
  if (typeof window === "undefined") return;
  localStorage.setItem(DEMO_KEY, role);
  window.dispatchEvent(new Event("demo-role-changed"));
}

export function getDemoRole(): Role | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(DEMO_KEY) as Role | null;
  return v && ROLES.some((r) => r.value === v) ? v : null;
}

export function dashboardForRole(role: Role): string {
  return ROLES.find((r) => r.value === role)?.dashboard ?? "/dashboard/student";
}
