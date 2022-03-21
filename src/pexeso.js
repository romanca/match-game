import React from "react";
import "./App.css";
import Card from "./Card";

const Pexeso = ({
  cards,
  activeCards,
  foundPairs,
  flipCard,
  clicks,
  shuffleCards,
  ended,
}) => {
  return (
    <div className="card_container">
      {cards.map((card, index) => {
        const flippedFromBackToFront =
          activeCards.indexOf(index) !== -1 || foundPairs.indexOf(index) !== -1;
        return (
          <Card
            flippedFromBackToFront={flippedFromBackToFront}
            card={card}
            index={index}
            flipCard={flipCard}
          />
        );
      })}
      {/* {ended && "Game is finished"}
      Clicks: {clicks} &nbsp;&nbsp;&nbsp; Found pairs:{foundPairs.length / 2}
      <button onClick={() => shuffleCards(cards)}>PLAY AGAIN</button> */}
    </div>
  );
};

export default Pexeso;
