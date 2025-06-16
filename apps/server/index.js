const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const client = require("./db/client").default;

const app = express();
const server = http.createServer(app);

// Allow frontend to connect (CORS)
app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "*", // You can replace * with http://localhost:5173 in production
    methods: ["GET", "POST"],
  },
});

// Simple route to test the server
app.get("/", (req, res) => {
  res.send("Chatrooms server is running");
});

// Socket.io connection handler
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("chat message", (msg) => {
    console.log("Message received:", msg);
    io.emit("chat message", msg); // Broadcast to all clients
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 3001;
server.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  try {
    const res = await client.query("SELECT NOW()");
    console.log("Database connected, current time:", res.rows[0].now);
  } catch (err) {
    console.error("Database connection test failed:", err);
  }
});
