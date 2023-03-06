import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>SWE Flashcards</h1>
        <p>SWE is high in demand. Let's learn more about the field!</p>
        <p>Number of cards: 10</p>
      </header>
    </div>
  );
}

export default App;
