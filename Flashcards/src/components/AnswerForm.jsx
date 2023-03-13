import React, { useState } from "react";

const AnswerForm = (props) => {
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form submitted!");

    if (answer == props.cardAnswer) {
      setCorrectAnswer("correct");
    } else {
      setCorrectAnswer("wrong");
    }
  };

  const answerHandler = (event) => {
    setAnswer(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <label>
        Enter Your Guess
        <input
          type="text"
          placeholder="Your Answer"
          onChange={answerHandler}
          value={answer}
          id={correctAnswer}
        />
      </label>
      <button type="submit">Submit Guess</button>
    </form>
  );
};

export default AnswerForm;
