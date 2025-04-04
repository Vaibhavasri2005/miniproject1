import React from "react";

function StartScreen({ onStart }) {
  return (
    <div>
      <h1>QUIZ-GAME</h1>
      <button onClick={onStart}>Start</button>
    </div>
  );
}

export default StartScreen;
