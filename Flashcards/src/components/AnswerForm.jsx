import React, { useState } from "react";

const AnswerForm = (props) => {
  const [answer, setAnswer] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (answer == props.cardAnswer) {
      props.onAnswer("correct");
    } else {
      props.onAnswer("wrong");
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
          id={props.correctAnswer}
        />
      </label>
      <button type="submit">Submit Guess</button>
    </form>
  );
};

export default AnswerForm;
