import React from "react";

const AnswerForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form submitted!");
  };
  return (
    <form onSubmit={submitHandler}>
      <label>
        Enter Your Guess
        <input type="text" name="answer" />
      </label>
      <button type="submit">Submit Guess</button>
    </form>
  );
};

export default AnswerForm;
