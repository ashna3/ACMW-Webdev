const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory events array
let events = [];

// GET /
app.get("/", (req, res) => {
    res.send("Welcome to ACM-W Event API");
});

// GET /events
app.get("/events", (req, res) => {
    res.json(events);
});

// POST /events
app.post("/events", (req, res) => {
    const event = req.body;

    events.push(event);

    res.status(201).json({
        message: "Event added successfully",
        event: event
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
