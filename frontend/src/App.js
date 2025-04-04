import React, { useState } from "react";
import StartScreen from "./components/StartScreen";
import Quiz from "./components/Quiz";
import "./style.css";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div>
      {!start ? <StartScreen onStart={() => setStart(true)} /> : <Quiz />}
    </div>
  );
}

export default App;
