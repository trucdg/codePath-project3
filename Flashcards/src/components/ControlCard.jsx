import React, { useState } from "react";

const ControlCard = () => {
  // in the library array, the first component will be the start-intro card,
  // the next cards will store question-answer pairs
  let library = [
    {
      question: "Start!",
      answer: "Press the arrow to start the flashcards :)",
    },
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

  const [cardNum, setCardNum] = useState(library[0]);
  return <div>control card</div>;
};

export default ControlCard;
