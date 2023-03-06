import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import AnswerCard from "./AnswerCard";

const ControlCard = () => {
  // in the library array, the first component will be the start-intro card,
  // the next cards will store question-answer pairs
  let cardLibrary = [
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

  const [cardNum, setCardNum] = useState(cardLibrary[0]);
  const [isQuestion, setIsQuestion] = useState(true);

  const clickFlipCardHandler = () => {
    setIsQuestion(!isQuestion);
  };

  const clickNextCardHandler = () => {
    // randomly pick a next card number ranging from [1, cardLibrary.length - 1]
    // since we don't pick the first card (which is the start card)
    let nextCardNum = Math.floor(Math.random() * (cardLibrary.length - 1)) + 1;
    setIsQuestion(true);
    setCardNum(cardLibrary[nextCardNum]);
  };

  return (
    <div>
      <div className="card" onClick={clickFlipCardHandler}>
        {isQuestion ? (
          <QuestionCard question={cardNum.question} />
        ) : (
          <AnswerCard answer={cardNum.answer} />
        )}
      </div>
      <button className="nextCard" onClick={clickNextCardHandler}>
        Next Card <i className="fa-solid fa-circle-chevron-right"></i>
      </button>
    </div>
  );
};

export default ControlCard;
