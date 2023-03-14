import React, { useState } from "react";
import CardImage from "./CardImage";
import AnswerForm from "./AnswerForm";

const ControlCard = () => {
  // in the library array, the first component will be the start-intro card,
  // the next cards will store question-answer pairs
  let cardLibrary = [
    {
      question: "Start!",
      answer: "Press the arrow to start the flashcards :)",
      img: "https://www.voicesofyouth.org/sites/voy/files/images/2021-09/img_3323.gif",
    },
    {
      question: "The sum of the angles of a triangle is always ___?",
      answer: "180",
      img: "https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/angle-sum-theorem-1627632246.png",
    },
    {
      question:
        "A compound statement formed by joining two or more statements with the word 'and' is a ___?",
      answer: "conjunction",
      hard: "hard",
    },
    {
      question: "___ lines are lines that intersect to form right angles.",
      answer: "perpendicular",
    },
    {
      question:
        "A compound statement formed by joining two or more statements with the word 'or' is a ___?",
      answer: "disjunction",
      hard: "hard",
    },
    {
      question: "A straight angle is equal to ___ degree?",
      answer: "180",
      img: "https://user-images.githubusercontent.com/17547686/31929586-4efbd912-b8a5-11e7-8f43-5d73cca6e2eb.png",
    },
    {
      question:
        "What numbers are whole number, greater than 1, have only 2 factors; itself and 1; that is, a number that can be devided evenly by 1 and itself.",
      answer: "Prime",
      img: "https://t4.ftcdn.net/jpg/04/72/66/93/360_F_472669320_gjjT2zekm8cGVzqgClLUJc16pFiSL3Cn.jpg",
      hard: "hard",
    },
    {
      question: "A quadrilateral with two pairs of parallel sides?",
      answer: "parallelogram",
      hard: "hard",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_GuttFp3x9wLeCDRueSIlc-0SzRdpQH081w&usqp=CAU",
    },
    {
      question: "What is a quadrilateral with only ONE PAIR of parallel sides?",
      answer: "Trapezoid",
      img: "https://cdn.shopify.com/s/files/1/2009/8293/products/TP200.jpg?v=1575932472",
      hard: "hard",
    },
    {
      question: "What is the bottom number in a fraction?",
      answer: "denominator",
      img: "https://o.quizlet.com/KV2rvSWsm4NTLjC2Fdde3Q.png",
    },
  ];

  const [card, setCard] = useState(cardLibrary[0]);

  // state variables to keep track of the state of the correctness of the entered answer
  const [correctAnswer, setCorrectAnswer] = useState("not-submitted");

  const enteredAnswerHandler = (answerStatus) => {
    setCorrectAnswer(answerStatus);
  };

  // state variables to keep track of the number of the current card
  const [currentCardNum, setCurrentCardNum] = useState(0);

  const clickNextCardHandler = () => {
    // pick a next card number ranging from [1, cardLibrary.length - 1]
    // since we don't pick the first card (which is the start card)
    // let nextCardNum = Math.floor(Math.random() * (cardLibrary.length - 1)) + 1;
    let nextCardNum = (currentCardNum + 1) % cardLibrary.length;
    console.log(nextCardNum);
    setCurrentCardNum(nextCardNum);
    setCard(cardLibrary[nextCardNum]);
    setCorrectAnswer("not-submitted");
  };

  const clickBackCardHandler = () => {
    // pick a next card number ranging from [1, cardLibrary.length - 1]
    // since we don't pick the first card (which is the start card)
    // let nextCardNum = Math.floor(Math.random() * (cardLibrary.length - 1)) + 1;
    let nextCardNum = (currentCardNum - 1) % cardLibrary.length;
    console.log(nextCardNum);
    setCurrentCardNum(nextCardNum);
    setCard(cardLibrary[nextCardNum]);
    setCorrectAnswer("not-submitted");
  };

  const clickShuffleHandler = () => {
    // this is the implementation of the Durstenfeld shuffle
    // we don't shuffle the first card
    for (var i = cardLibrary.length - 1; i > 1; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = cardLibrary[i];
      cardLibrary[i] = cardLibrary[j];
      cardLibrary[j] = temp;
    }
  };

  const flipCardHandler = (e) => {
    e.currentTarget.classList.toggle("is-flipped");
  };

  return (
    <div>
      <div className="scene scene--card">
        <div className="card" onClick={flipCardHandler}>
          <div className={`card__face card__face--front + ${card.hard}`}>
            <p>{card.question}</p>
            <CardImage img={card.img} />
          </div>
          <div className="card__face card__face--back">
            <p>{card.answer}</p>
            <CardImage img={card.img} />
          </div>
        </div>
      </div>
      <div className="answer-area">
        <AnswerForm
          cardAnswer={card.answer}
          onAnswer={enteredAnswerHandler}
          correctAnswer={correctAnswer}
        />
      </div>

      <button className="nextCard" onClick={clickNextCardHandler}>
        Back Card <i className="fa-solid fa-circle-chevron-left"></i>
      </button>
      <button className="nextCard" onClick={clickBackCardHandler}>
        Next Card <i className="fa-solid fa-circle-chevron-right"></i>
      </button>
      <button className="nextCard" onClick={clickShuffleHandler}>
        Shuffle Card <i className="fa-solid fa-shuffle"></i>
      </button>
    </div>
  );
};

export default ControlCard;
