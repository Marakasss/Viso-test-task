# Viso-test-task

## 📘 Mini Time Tracker — Backend

### 🧩 Overview

This is the backend API for the Mini Time Tracker — a test assignment for Viso Academy. It allows users to create and view time entries, grouped by date, with validation and a daily limit of 24 hours.

---

### 🚀 Technologies

- Node.js + Express — server framework
- TypeScript — static typing
- Prisma ORM — database access
- SQLite — lightweight embedded database
- http-errors — error handling
- dotenv — environment configuration

---

### 📁 Project Structure

```

server/
├── src/
│ ├── controllers/ # Route handlers
│ ├── services/ # Business logic
│ ├── routers/ # API routes
│ ├── middlewares/ # Error handling
│ ├── utils/ # Helpers
│ ├── server.js # Entry point
│ └── index.js # Entry point
├── prisma/
│ └── schema.prisma # TimeEntry model
├── lib/ # Prisma client
├── dev.db # SQLite database
├── .env # Environment variables
├── README.md # Documentation

```

---

### 🧪 API Endpoints

| Method   | Endpoint           | Description                       |
| -------- | ------------------ | --------------------------------- |
| `POST`   | `/entries`         | Create a new time entry           |
| `GET`    | `/entries`         | Get all entries (with filters)    |
| `GET`    | `/entries/:id`     | Get a single entry by ID          |
| `DELETE` | `/entries/:id`     | Delete an entry                   |
| `GET`    | `/entries/summary` | Daily totals and grand total      |
| `GET`    | `/projects`        | List of available projects (enum) |

---

### ✅ Validation Rules

- All fields are required
- `hours` must be a positive number
- `description` must be a non-empty string
- Total hours per date must not exceed 24

---

### ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/your-username/viso-test-task.git
cd viso-test-task/server

# Install dependencies
npm install

# Initialize the database
npx prisma migrate dev --name init
npx prisma generate

# Start the development server
npm run dev
```

Server will run at http://localhost:4000

## 🖥 Mini Time Tracker — Frontend

### 🧩 Overview

This is the frontend part of the Mini Time Tracker — a web interface that communicates with the backend API.
It allows users to create, view and delete time entries, as well as see daily summaries and the overall total.

---

### 🚀 Technologies

Next.js (App Router) — React framework

TypeScript — static typing (frontend only)

Axios — HTTP client

TanStack React Query — data fetching and caching

shadcn/ui + Tailwind CSS — UI components and styling

---

### 📁 Project Structure

```

client/
├── app/
├── globals.css # Global styles
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Entries page
│ └── summary/ # Summary page
├── components/
│ ├── EntryForm/ # Create entry form
│ ├── EntryList/ # Entries list
| ├── Summary/ # Summary
│ └── Header/ # Navigation
├── services/
│ ├── api.ts # Axios instance
│ └── entries.ts # API calls
├── types/
│ └── entry.ts # Shared types
│

```

---

### 🧪 Features

Create new time entries

Select project from predefined list

View entries grouped by date

Display daily totals and grand total

Delete entries

Client-side validation

Optimistic UI updates with React Query

---

### ⚙️ Setup Instructions

# Go to frontend folder

cd client

# Install dependencies

npm install

# Start development server

npm run dev

Frontend runs at:

http://localhost:3000

---

### 🔗 Backend Integration

The frontend communicates with the backend via a REST API using Axios.
All data fetching and mutations are managed with React Query to ensure consistent state and caching.

---

### 📝 Notes

Authentication is not implemented (out of scope)

Backend must be running for the frontend to work correctly

The focus is on clean architecture and predictable data flow
