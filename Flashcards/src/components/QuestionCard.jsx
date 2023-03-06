import React from "react";

const QuestionCard = (props) => {
  return (
    <div className="card">
      <h1>{props.question}</h1>
    </div>
  );
};

export default QuestionCard;
