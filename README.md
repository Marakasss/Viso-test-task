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


server/ ├── src/ │ ├── controllers/ # Route handlers │ ├── services/ # Business logic │ ├── routers/ # API routes │ ├── middlewares/ # Error handling │ ├── lib/ # Prisma client │ ├── utils/ # Helpers │ └── index.ts # Entry point ├── prisma/ │ ├── schema.prisma # TimeEntry model │ └── dev.db # SQLite database ├── .env # Environment variables ├── README.md # Documentation

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


Server will run at http://localhost:3000



Цей варіант можна **прямо вставити в `README.md`**, і він буде виглядати ідеально на GitHub. Хочеш, я допоможу тобі з README для фронтенду або email-шаблоном для рекрутера?


```
