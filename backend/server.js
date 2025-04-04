const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const questions = [
  { question: "Capital of France?", answers: ["Paris", "London", "Berlin", "Madrid"], correct: "Paris" },
  { question: "What is the largest ocean?", answers: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: "Pacific" },
  { question: "Who painted the Mona Lisa?", answers: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"], correct: "Da Vinci" },
  { question: "Which planet is known as the Red Planet?", answers: ["Earth", "Mars", "Jupiter", "Venus"], correct: "Mars" },
  { question: "What is the currency of Japan?", answers: ["Yuan", "Won", "Dollar", "Yen"], correct: "Yen" },
  { question: "How many continents are there on Earth?", answers: ["5", "6", "7", "8"], correct: "7" },
  { question: "Who discovered gravity?", answers: ["Newton", "Einstein", "Tesla", "Galileo"], correct: "Newton" },
  { question: "What is the boiling point of water?", answers: ["90°C", "100°C", "110°C", "120°C"], correct: "100°C" },
  { question: "Which gas do plants absorb from the atmosphere?", answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: "Carbon Dioxide" },
  { question: "What is the largest mammal?", answers: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"], correct: "Blue Whale" },
];
const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => {
    res.send("Welcome to the Quiz Game API!");
  });  
app.get("/questions", (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => console.log(`🚀 Server running at: http://localhost:${PORT}`));

