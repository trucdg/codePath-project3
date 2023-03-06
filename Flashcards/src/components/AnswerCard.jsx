import React from "react";

const AnswerCard = (props) => {
  return (
    <div className="card answer-card">
      <h2> {props.answer}</h2>
    </div>
  );
};

export default AnswerCard;
