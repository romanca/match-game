import React from "react";

const Card = ({ flippedFromBackToFront, card, index, flipCard }) => {
  return (
    <div
      key={index}
      className={"card " + (flippedFromBackToFront && "flipped")}
      onClick={() => flipCard(index)}
    >
      <div className="content">
        <div className="front"></div>
        <div className="back">
          <img src={card} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
