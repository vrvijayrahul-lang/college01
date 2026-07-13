# Vidya University — College Management ERP

A modern, full-stack **College Management ERP** built with **Next.js 15 (App Router)**,
**React 19**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, **Framer Motion**, and
**Firebase**. It ships with a premium SaaS-style UI (glassmorphism, soft gradients, dark/light
mode), a complete public marketing website, role-based portals for every stakeholder, and
enterprise-grade security rules.

> ✅ **Runs without any configuration.** If Firebase keys are absent, the app falls back to a
> **Demo Mode** so you can explore every dashboard and role immediately. Add your Firebase
> config in `.env.local` to enable real authentication and Firestore.

---

## ✨ Features

### Public Website (20+ pages)
Home (hero, stats, courses, news, events, placements, testimonials, gallery, recruiters, CTA),
About, Principal Message, Vision & Mission, Departments, Courses, Faculty Directory, Admissions
(with validated online application form), Fee Structure, Gallery, News, Events, Placements,
Alumni, Research, Downloads, Contact (with map + form), FAQ, Privacy Policy, Terms.

### Role-Based Portals (12 roles)
Super Admin, Principal, Vice Principal, HOD, Faculty, Staff, Student, Parent, Accountant,
Librarian, Placement Officer, Admission Officer — each with its own dashboard, sidebar, and
permission-scoped navigation.

### Modules
- **Auth**: Email/password, Google sign-in, forgot password, email verification, session
  persistence, protected routes (RBAC).
- **Dashboards**: role-aware analytics with Recharts (admissions, attendance, revenue, fees,
  placements, course popularity).
- **Admin**: Students, Faculty, Departments, Courses, Admissions (approval workflow + status),
  Fees (billed/collected/outstanding), Analytics, Notices, Settings — with search, filter, and
  pagination via a reusable `DataTable`.
- **Student**: attendance %, timetable, assignments, materials, online classes, exams + hall
  tickets, results & GPA, fee payments, library catalog, leave, hostel, transport, placement.
- **Faculty**: mark attendance, marks entry, assignments, exams, research, reports, chat.
- **Parent**: child attendance, results, fee status, progress, communication.
- **AI Assistant**: floating campus chatbot (AI FAQ / student assistant) on the public site.
- **PWA**: manifest, service worker, offline fallback page.
- **SEO**: Metadata API, `sitemap.xml`, `robots.txt`, Open Graph.

---

## 🧱 Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS, shadcn/ui, Framer Motion |
| Auth & DB | Firebase Auth, Cloud Firestore, Storage |
| Data/Forms | TanStack Query, React Hook Form, Zod |
| Charts | Recharts |
| Icons | Lucide React |
| Theming | next-themes (dark/light/system) |
| Deploy | Vercel |

---

## 🚀 Getting Started

```bash
# 1. Install (React 19 + Next 15 need --legacy-peer-deps for some peer ranges)
npm install --legacy-peer-deps

# 2. Configure environment (optional for Demo Mode)
cp .env.example .env.local
#   -> fill NEXT_PUBLIC_FIREBASE_* values from your Firebase console

# 3. Run
npm run dev        # http://localhost:3000
```

Open `http://localhost:3000`, click **Sign In**, and choose any role to explore the dashboards
in **Demo Mode** (no Firebase project required).

### Scripts
```bash
npm run dev        # dev server
npm run build      # production build
npm run start      # serve production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

---

## 🔐 Demo Mode vs. Live Firebase

- **Demo Mode** (no `.env.local`): Auth context reads a role from `localStorage`; dashboards,
  RBAC, and navigation work fully. Forms simulate success toasts.
- **Live Mode** (with Firebase config): real email/password + Google auth, Firestore-backed
  profiles, and enforced Security Rules. See `firestore.rules` and `firestore.indexes.json`.

---

## 📁 Project Structure

```
src/
├─ app/
│  ├─ (public)/            # marketing site (navbar + footer + AI assistant)
│  │  ├─ page.tsx          # homepage with all hero/section blocks
│  │  ├─ about, admission, courses, contact, faq, privacy, terms, …
│  ├─ auth/                # login, register, forgot-password
│  ├─ dashboard/           # protected portals (ProtectedRoute + DashboardShell)
│  │  ├─ page.tsx          # role-aware home
│  │  ├─ student|faculty|parent|principal|admin/
│  │  └─ admin/{students,faculty,departments,courses,admissions,fees,analytics,notices,settings}
│  ├─ offline/             # PWA offline fallback
│  ├─ layout.tsx           # root: providers + auth + PWA
│  ├─ manifest.ts robots.ts sitemap.ts
├─ components/
│  ├─ ui/                  # button, card, input, dialog, table, charts, toast, …
│  ├─ layout/              # navbar, footer, sidebar, notification-center, profile-menu
│  ├─ cards/ sections/ ai/ # content + feature components
├─ lib/                    # firebase, auth, constants, utils, sample-data
├─ types/                  # domain TypeScript types (mirror Firestore collections)
├─ hooks/ providers/ auth/
```

---

## 🗄️ Database Design (Firestore)

Collections mirror the domain types in `src/types/index.ts`:
`users, students, faculty, parents, departments, courses, subjects, attendance, assignments,
notes, results, fees, payments, scholarships, library, books, hostel, rooms, transport,
vehicles, placements, companies, events, gallery, notices, certificates, applications, reports,
settings, audit_logs`. See **`FIRESTORE_SCHEMA.md`** for field-level schema, relationships,
indexes, and sample documents.

---

## 🔒 Security

- `firestore.rules` — RBAC: admins/principal write institutional data; students read/write only
  their own records; parents see their ward's data.
- `storage.rules` — typed uploads (image/doc), size limits, per-user avatar folders.
- Client validation via Zod; all inputs validated before writes.
- Activity auditing via the `audit_logs` collection (admin-only).

---

## 🚢 Deployment (Vercel)

1. Push this repo to GitHub.
2. In Vercel, **Import** the project (framework auto-detected as Next.js).
3. Add the `NEXT_PUBLIC_FIREBASE_*` environment variables (Project Settings → Environment
   Variables).
4. Deploy. The `sitemap.xml`, `robots.txt`, `manifest.webmanifest` are generated automatically.
5. (Optional) Connect **Firebase Hosting** + **Cloud Functions** for FCM push notifications and
   server-side PDF/Excel generation.

See **`ADMIN_SETUP.md`** for creating the first Super Admin and seeding sample data.

---

## 📄 License

This project is provided as a starter template for educational institutions.
