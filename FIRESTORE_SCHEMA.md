# Firestore Schema & Sample Data

This document describes the Cloud Firestore collections, their fields, relationships, indexes,
and sample documents. The TypeScript representations live in `src/types/index.ts`.

## Conventions
- Document IDs: use Firebase auto-IDs, except `users/{uid}` where the ID equals the Auth UID.
- Timestamps: stored as Firestore `Timestamp` (`serverTimestamp()` on write).
- All writes are gated by `firestore.rules` (see repo root).

## Collections

### users
Profile for every authenticated account. ID = Auth UID.
| Field | Type | Notes |
| --- | --- | --- |
| uid | string | = document id |
| email | string | |
| displayName | string | |
| role | enum | super_admin, principal, vice_principal, hod, faculty, staff, student, parent, accountant, librarian, placement_officer, admission_officer |
| photoURL | string? | |
| phone | string? | |
| active | boolean | |
| emailVerified | boolean | |
| departmentId | string? | ref → departments |
| studentId / facultyId | string? | ref → students / faculty |
| createdAt / updatedAt | timestamp | |

### departments
| Field | Type |
| --- | --- |
| name | string |
| code | string |
| hodId | string? → users |
| description | string? |
| establishedYear | number? |

### courses
| Field | Type |
| --- | --- |
| title | string |
| departmentId | ref → departments |
| level | enum (UG/PG/Diploma/PhD) |
| durationYears | number |
| intake | number |
| feePerYear | number |
| description | string? |

### subjects
`id, courseId→courses, name, code, credits, semester`

### students
`id, userId→users, rollNumber, name, departmentId→departments, courseId→courses, semester, admissionYear, cgpa, attendancePct`

### faculty
`id, userId→users, name, departmentId→departments, designation, qualification`

### parents
`id, userId→users, studentId→students, name, phone`

### attendance
`id, studentId→students, classId, date, status(present|absent|late|leave)`

### assignments / notes
`id, courseId, title, description, fileUrl, uploadedBy→users, createdAt`

### results
`id, studentId, examType(internal|semester), subjectId, marks, maxMarks, grade, semester`

### fees / payments
`fees: {id, studentId, amount, dueDate, paid, paidOn?, category}`
`payments: {id, feeId, amount, method, txnId, createdAt}`

### scholarships
`{id, name, criteria, discountPct, applicableCourseIds[]}`

### library / books
`books: {id, title, author, isbn, available, total}`
`library: {id, bookId, studentId, issuedOn, dueOn, returned, fine}`

### hostel / rooms
`rooms: {id, block, number, capacity, occupied, studentIds[]}`

### transport / vehicles
`vehicles: {id, route, driver, capacity, stops[]}`

### placements / companies
`companies: {id, name, logo?, role, packageLPA}`
`placements: {id, studentId, companyId, status, appliedOn}`

### events / gallery / notices / certificates
`events: {id, title, description, startDate, endDate, location, coverImage?}`
`gallery: {id, title, imageUrl, createdAt}`
`notices: {id, title, body, createdAt, published, audience(role[]|"all")}`
`certificates: {id, studentId, type, issuedOn, verificationCode}`

### applications
`{id, userId, courseId, fullName, status(submitted|under_review|approved|rejected|waitlisted), meritScore?, createdAt}`

### reports / settings / audit_logs
`reports: {id, title, type, generatedBy, createdAt, data}`
`settings: {id, key, value}` (singleton-ish)
`audit_logs: {id, actorId, action, target, timestamp, meta}`

## Relationships
- `students.departmentId → departments.id`
- `students.courseId → courses.id`
- `courses.departmentId → departments.id`
- `users.studentId → students.id`, `users.facultyId → faculty.id`
- `attendance.studentId → students.id`, `results.studentId → students.id`
- `fees.studentId → students.id`, `payments.feeId → fees.id`
- `placements.companyId → companies.id`, `placements.studentId → students.id`

## Indexes
Defined in `firestore.indexes.json`:
- `students`: departmentId + createdAt
- `attendance`: studentId + date; classId + date
- `fees`: studentId + dueDate
- `applications`: status + createdAt; userId + createdAt
- `results`: studentId + examType
- `notices`: published + createdAt
- `events`: startDate

## Sample Documents (seed)
```json
{
  "departments/CSE": {
    "name": "Computer Science & Engineering", "code": "CSE",
    "description": "AI, ML, systems, software engineering.", "establishedYear": 1998
  },
  "courses/btech-cse": {
    "title": "B.Tech Computer Science", "departmentId": "CSE", "level": "UG",
    "durationYears": 4, "intake": 240, "feePerYear": 125000
  },
  "users/demo-admin": {
    "uid": "demo-admin", "email": "admin@vidya.edu", "displayName": "Admin",
    "role": "super_admin", "active": true, "emailVerified": true
  }
}
```

## Seeding
A `scripts/seed.mjs` (Firebase Admin SDK) can bulk-import `src/lib/sample-data.ts` into Firestore.
Set `FIREBASE_ADMIN_PROJECT_ID`, `FIREBASE_ADMIN_CLIENT_EMAIL`, `FIREBASE_ADMIN_PRIVATE_KEY`
and run `node scripts/seed.mjs`. (UI already uses this sample data for Demo Mode.)
