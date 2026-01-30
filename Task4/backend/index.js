const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS
app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({
    message: "Hello from backend!",
    name: "Ashna",
    role: "Beginner React + Node learner"
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
