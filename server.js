const express = require("express");
const path = require("path");
const app = express();

// Serve static frontend
app.use(express.static(path.join(__dirname, "public")));

// Quiz questions
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "Mark Twain"],
        answer: "William Shakespeare"
    }
];

// API endpoint
app.get("/questions", (req, res) => {
    res.json(questions);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
