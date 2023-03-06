import React from "react";

const AnswerCard = (props) => {
  return (
    <div className="card">
      <h1> {props.answer}</h1>
    </div>
  );
};

export default AnswerCard;
