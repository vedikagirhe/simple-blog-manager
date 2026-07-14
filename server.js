const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <div style="
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 100px;
        ">
            <h1>📝 Simple Blog Manager</h1>
            <h2>Full Stack Web Development Internship Project</h2>
            <p>✅ Express Server is Running Successfully</p>
            <p><strong>Day 1 – Environment Setup Completed</strong></p>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});