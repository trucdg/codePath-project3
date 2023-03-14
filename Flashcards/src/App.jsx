import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ControlCard from "./components/ControlCard";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mathematics Review Flashcards</h1>
        <p>
          Math is fundamental to all sciences. Let's review some basic
          mathematical concepts!
        </p>
        <p>Number of cards: 10</p>
      </header>

      <div>
        <ControlCard />
      </div>
    </div>
  );
}

export default App;
