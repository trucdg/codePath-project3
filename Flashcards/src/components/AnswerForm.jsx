import React, { useState } from "react";

const AnswerForm = () => {
  const [answer, setAnswer] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form submitted!");
    console.log(event.target.value);
  };

  const answerHandler = (event) => {
    setAnswer(event.target.value);
    console.log(answer);
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
        />
      </label>
      <button type="submit">Submit Guess</button>
    </form>
  );
};

export default AnswerForm;
