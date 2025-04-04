const express = require("express");
const path = require("path"); // Required to set the correct directory path
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// API route for quiz questions
app.get("/questions", (req, res) => {
    const questions = [
        { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
        { question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: "Mars" },
        { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Austen", "Hemingway"], answer: "Shakespeare" },
        { question: "What is the chemical symbol for Gold?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Au" },
        { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
        { question: "What is the largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
        { question: "Which country gifted the Statue of Liberty?", options: ["France", "USA", "Italy", "Germany"], answer: "USA" },
        { question: "What is the currency of Japan?", options: ["Yen", "Won", "Dollar", "Euro"], answer: "Yen" },
        { question: "What is 9 + 10?", options: ["19", "21", "18", "20"], answer: "19" },
        { question: "Which gas do plants use for photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" }
    ];
    res.json(questions);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
