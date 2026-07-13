"use client";

import * as React from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db, isFirebaseConfigured } from "@/lib/firebase";
import type { Role, UserProfile } from "@/types";
import { getDemoRole } from "@/lib/auth";

interface AuthContextValue {
  user: User | null;
  profile: UserProfile | null;
  role: Role | null;
  loading: boolean;
  demoMode: boolean;
}

const AuthContext = React.createContext<AuthContextValue | null>(null);

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}

function demoProfile(role: Role): UserProfile {
  return {
    uid: "demo-user",
    email: "demo@vidyauniversity.edu",
    displayName: "Demo User",
    role,
    active: true,
    emailVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [profile, setProfile] = React.useState<UserProfile | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let active = true;

    if (isFirebaseConfigured && auth) {
      const unsub = onAuthStateChanged(auth, async (u) => {
        if (!active) return;
        setUser(u);
        if (u && db) {
          const snap = await getDoc(doc(db, "users", u.uid));
          setProfile(snap.exists() ? (snap.data() as UserProfile) : null);
        } else {
          setProfile(null);
        }
        setLoading(false);
      });
      return () => {
        active = false;
        unsub();
      };
    }

    // Demo mode fallback (no Firebase config).
    const syncDemo = () => {
      const role = getDemoRole();
      if (role) {
        setUser({ uid: "demo-user" } as User);
        setProfile(demoProfile(role));
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    };
    syncDemo();
    window.addEventListener("demo-role-changed", syncDemo);
    window.addEventListener("storage", syncDemo);
    return () => {
      active = false;
      window.removeEventListener("demo-role-changed", syncDemo);
      window.removeEventListener("storage", syncDemo);
    };
  }, []);

  const value: AuthContextValue = {
    user,
    profile,
    role: profile?.role ?? null,
    loading,
    demoMode: !isFirebaseConfigured,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
