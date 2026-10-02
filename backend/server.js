const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const blogs = [
    {
        title: "Introduction to Artificial Intelligence",
        author: "Lokesh (Good Boy)",
        category: "AI",
        content:
            "Artificial Intelligence is a technology that enables computers to perform tasks that normally require human intelligence."
    },
    {
        title: "Modern Web Development",
        author: "Lokesh (Good Boy)",
        category: "Technology",
        content:
            "Modern web development combines HTML, CSS and JavaScript to create interactive and responsive websites."
    },
    {
        title: "Learning JavaScript",
        author: "AI BlogNest",
        category: "Programming",
        content:
            "JavaScript is a popular programming language used to add dynamic functionality to web applications."
    }
];

app.get("/api/blogs", (req, res) => {
    res.json(blogs);
});

app.get("/", (req, res) => {
    res.send("AI BlogNest API is running!");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`AI BlogNest server running on http://localhost:${PORT}`);
});