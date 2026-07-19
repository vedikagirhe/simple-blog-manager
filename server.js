const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Store blog posts
let blogs = [];

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
    res.json(blogs);
});
// POST Blogs Route
app.post("/blogs", (req, res) => {

    const blog = req.body;

    blogs.push(blog);

    res.status(201).json({
        message: "Blog added successfully!",
        blog: blog
    });

});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});