const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname)));

// Blog data
const blogs = [
    {
        title: "Introduction to AI",
        author: "Lokesh",
        category: "Technology",
        content: "Artificial Intelligence is a technology that enables computers to perform tasks that normally require human intelligence."
    },
    {
        title: "Modern Web Development",
        author: "Lokesh",
        category: "Programming",
        content: "Modern web development combines HTML, CSS and JavaScript to create interactive and responsive websites."
    },
    {
        title: "Learning JavaScript",
        author: "Lokesh",
        category: "Programming",
        content: "JavaScript is a popular programming language used to create dynamic and interactive web applications."
    }
];

// API
app.get("/api/blogs", (req, res) => {
    res.json(blogs);
});

// Homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Render provides the PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`AI BlogNest server running on port ${PORT}`);
});