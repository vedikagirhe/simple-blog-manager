const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// GET Route
app.get("/", (req, res) => {
    res.send("Welcome to Simple Blog Manager!");
});

// GET Blogs Route
app.get("/blogs", (req, res) => {
    res.json({
        message: "GET request received successfully!"
    });
});

// POST Blogs Route
app.post("/blogs", (req, res) => {
    console.log(req.body);

    res.json({
        message: "POST request received successfully!",
        data: req.body
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});