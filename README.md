# chatrooms

This is a full-stack chatrooms application with real-time messaging.

Built with:

- React + Vite (Web)
- Node.js + Express + Socket.io (Backend)
- PostgreSQL + pg (Database)
- Monorepo structure

## Project Structure

```
apps/
  web/      → React frontend
  server/   → Backend API and Socket.io server
  mobile/   → (Future) React Native app

shared/
  utils/    → Shared utilities or types
```

## Getting Started (Full Setup)

### 1. Clone the repo

git clone https://github.com/yourusername/chatrooms.git
cd chatrooms

### 2. Install dependencies

cd apps/web && npm install
cd ../server && npm install

### 3. Set up environment variables

Create a `.env` file in `apps/server/`:

DATABASE_URL=postgres://youruser:yourpassword@localhost:5432/chatrooms_db

### 4. Set up the database

- Create a PostgreSQL database named `chatrooms_db`
- Run the SQL schema in `apps/server/db/schema.sql`

### 5. Run the backend

cd apps/server
npm run dev

### 6. Run the frontend

cd apps/web
npm run dev

## Platform Notes

This app runs on macOS, Linux, and Windows.
If using Windows, install:

- Node.js (latest LTS)
- Git Bash or WSL (optional but recommended)
- PostgreSQL (use pgAdmin or CLI)

## Subproject Docs

- [Web App README](apps/web/README.md)
- [Server README](apps/server/README.md)

## License

This project is **not open source**. The source code is provided publicly for learning and review only.

📌 **All rights reserved © 2025 Payaam Emami.**

You may not copy, modify, redistribute, or use any part of this project without permission.

If you’re interested in collaborating or using the code commercially, reach out: contact@payaame.com
