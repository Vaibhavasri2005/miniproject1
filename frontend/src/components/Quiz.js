import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import "../style.css";  // Make sure your style.css is correctly located in src/

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [originalQuestions, setOriginalQuestions] = useState([]); // store original set
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setOriginalQuestions(data); // keep a backup to restart
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setShowNext(true);
    if (answer === questions[currentQuestion].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(10);
      setShowNext(false);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setQuestions(originalQuestions);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(10);
    setShowNext(false);
    setQuizFinished(false);
  };

  if (questions.length === 0) {
    return <h2 className="loading">Loading questions...</h2>;
  }

  if (quizFinished) {
    return (
      <div className="quiz-container">
        <h2>Quiz Over!</h2>
        <h3>Your Score: {score} / {questions.length}</h3>
        <button className="restart-btn" onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
      <h2 className="question">{questions[currentQuestion].question}</h2>
      <div className="answers">
        {questions[currentQuestion].answers.map((answer) => (
          <button
            key={answer}
            onClick={() => handleAnswerClick(answer)}
            className={`answer-btn ${selectedAnswer ? (answer === questions[currentQuestion].correct ? "correct" : "wrong") : ""}`}
            disabled={selectedAnswer}
          >
            {answer}
          </button>
        ))}
      </div>
      {showNext && <button className="next-btn" onClick={nextQuestion}>Next</button>}
    </div>
  );
}

export default Quiz;
