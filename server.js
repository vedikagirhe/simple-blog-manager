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

    const blog = {
        id: Date.now(),
        ...req.body
    };

    blogs.push(blog);

    res.status(201).json({
        message: "Blog added successfully!",
        blog: blog
    });

});
app.delete("/blogs/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = blogs.findIndex(blog => blog.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }

    blogs.splice(index, 1);

    res.json({
        message: "Blog deleted successfully!"
    });

});
// PUT Blog Route
app.put("/blogs/:id", (req, res) => {

    const id = parseInt(req.params.id);

    blogs[id] = req.body;

    res.json({
        message: "Blog updated successfully!",
        blog: blogs[id]
    });

});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});