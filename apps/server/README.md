# Server

This folder contains the Node.js + Express + Socket.io backend server.

## Getting Started

### Install dependencies

npm install

This will install Express, Socket.io, and other dependencies defined in package.json.

### Run the development server

npm run dev

This will start the server using Nodemon with hot-reload.
The server will run at http://localhost:3001 by default.

### Run the production server

npm start

This will run the server with Node (without hot-reloading).

---

The server handles:

- HTTP API routes (e.g. `/`)
- WebSocket events for real-time chat

### Environment Variables

This app requires a `.env` file in the `apps/server` directory with the following variable:

DATABASE_URL=postgres://youruser:yourpassword@localhost:5432/chatrooms_db

This is used by the PostgreSQL client (`pg`) to connect to your local database.
