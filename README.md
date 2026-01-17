# Viso-test-task

📘 Mini Time Tracker — Backend
🧩 Overview
This is the backend API for the Mini Time Tracker — a test assignment for Viso Academy. It allows users to create and view time entries, grouped by date, with validation and a daily limit of 24 hours.

🚀 Technologies

- Node.js + Express — server framework
- TypeScript — static typing
- Prisma ORM — database access
- SQLite — lightweight embedded database
- http-errors — error handling
- dotenv — environment configuration

📁 Project Structure
server/
├── src/
│ ├── controllers/ # Route handlers
│ ├── services/ # Business logic
│ ├── routers/ # API routes
│ ├── middlewares/ # Error handling
│ ├── lib/ # Prisma client
│ ├── utils/ # Helpers
│ └── index.ts # Entry point
├── prisma/
│ ├── schema.prisma # TimeEntry model
│ └── dev.db # SQLite database
├── .env # Environment variables
├── README.md # Documentation

🧪 API Endpoints
| | | |
| POST | /entries | |
| GET | /entries | |
| GET | /entries/:id | |
| DELETE | /entries/:id | |
| GET | /entries/summary | |
| GET | /projects | |

✅ Validation Rules

- All fields are required
- hours must be a positive number
- description must be a non-empty string
- Total hours per date must not exceed 24

⚙️ Setup Instructions

- Clone the repository:
  git clone https://github.com/your-username/viso-test-task.git
  cd viso-test-task/server

- Install dependencies:
  npm install

- Initialize the database:
  npx prisma migrate dev --name init
  npx prisma generate

- Start the development server:
  npm run dev

Server will run at http://localhost:3000
