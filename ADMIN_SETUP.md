# Admin Setup & Deployment Guide

## 1. Create a Firebase Project
1. Go to <https://console.firebase.google.com> → **Add project**.
2. Enable **Authentication** → Sign-in methods: **Email/Password** and **Google**.
3. Create a **Firestore** database (start in production mode, then apply `firestore.rules`).
4. Enable **Storage** and apply `storage.rules`.
5. Project settings → **Your apps** → Web app → copy the config values.

## 2. Configure Environment
Copy `.env.example` to `.env.local` and fill:
```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=...   # optional (Analytics)
NEXT_PUBLIC_FIREBASE_VAPID_KEY=...         # for FCM push
```
Without these, the app runs in **Demo Mode**.

## 3. Apply Security Rules
```bash
npm i -g firebase-tools
firebase login
firebase init firestore   # select firestore.rules + firestore.indexes.json
firebase deploy --only firestore:rules,firestore:indexes
firebase init storage     # select storage.rules
firebase deploy --only storage
```

## 4. Create the First Super Admin
The `users/{uid}` document is auto-created on registration. To grant admin:
1. Register a user via `/auth/register`.
2. In Firestore, open `users/{uid}` and set `role = "super_admin"`, `active = true`.
3. (Optional) run `scripts/make-admin.mjs` with the Admin SDK.

## 5. Seed Sample Data (optional)
```bash
export FIREBASE_ADMIN_PROJECT_ID=...
export FIREBASE_ADMIN_CLIENT_EMAIL=...
export FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
node scripts/seed.mjs
```

## 6. Deploy to Vercel
1. Push to GitHub.
2. Vercel → **Import** → framework **Next.js** (auto-detected).
3. Add the `NEXT_PUBLIC_FIREBASE_*` env vars.
4. Deploy. `sitemap.xml`, `robots.txt`, and `manifest.webmanifest` are auto-generated.

## 7. Enable Push Notifications (FCM)
1. Generate a VAPID key in Firebase → Cloud Messaging → Web Push certificates.
2. Put it in `NEXT_PUBLIC_FIREBASE_VAPID_KEY`.
3. Request notification permission client-side and `getToken()`; subscribe to topics.
4. Send from Cloud Functions (`functions/src/index.ts`).

## 8. Cloud Functions (recommended)
Use Firebase Cloud Functions for:
- Welcome email on registration.
- Fee due reminders (scheduled).
- Admission status notifications.
- Server-side PDF (admission letter, transcript) and Excel export.
