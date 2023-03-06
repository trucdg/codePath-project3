import React from "react";

const CardImage = (props) => {
  if (props.img) {
    return (
      <div className="image-cont">
        <img src={props.img}></img>
      </div>
    );
  } else {
    return null;
  }
};

export default CardImage;
