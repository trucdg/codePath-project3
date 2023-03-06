import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let library = [
    {
      question: "What is 'Encapsulation'?",
      answer:
        "Encapsulation is bundling data and methods that work on that data into one unit, like a class in Java. Encapsulation can also refer to a way to restrict the direct access to some components of an object.",
    },
    {
      question: "What is 'Coupling' in software engineering?",
      answer:
        "Coupling refers to the degree of interdependence between software modules. High coupling means that modules are closely connected and changes in one module may affect other modules. Low coupling means that modules are independent and changes in one module have little impact on other modules.",
    },
  ];

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
