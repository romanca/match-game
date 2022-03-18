import React from "react";
import Images from "./Images";
import "./App.css";
import Card from "./Card";

const Pexeso = () => {
  const [cards, setCards] = React.useState([...Images, ...Images]);
  const [clicks, setClicks] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const [activeCards, setActiveCards] = React.useState([]);
  const [foundPairs, setFoundPairs] = React.useState([]);

  function setPlayingGame() {
    if (playing) {
      setFoundPairs([]);
      setPlaying(false);
      setClicks(0);
    }
  }

  function handleClicks() {
    setClicks(clicks + 1);
  }

  function closeUnmatchedPairs(a, b) {
    if (cards[a] !== cards[b]) {
      setTimeout(() => {
        setActiveCards([]);
      }, 500);
    }
  }

  function matchedPairs(c, d) {
    if (cards[c] === cards[d]) {
      if (foundPairs.length + 2 === cards.length) {
        setPlaying(true);
      }
      setFoundPairs([...foundPairs, c, d]);
    }
  }

  function shuffleCards(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function setPairsOfCards(index) {
    setActiveCards([...activeCards, index]);
  }

  function newPair(index) {
    if (activeCards.length === 2) {
      setActiveCards([index]);
    }
  }

  function toggleFirstCard(index) {
    if (activeCards.length === 0) {
      setActiveCards([index]);
    }
  }

  function toggleSecondCard(index) {
    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondsIndex = index;
      closeUnmatchedPairs(firstIndex, secondsIndex);
      matchedPairs(firstIndex, secondsIndex);
      setPairsOfCards(index);
    }
  }

  function flipCard(index) {
    setPlayingGame();
    toggleFirstCard(index);
    toggleSecondCard(index);
    newPair(index);
    handleClicks();
  }

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
      Clicks: {clicks} &nbsp;&nbsp;&nbsp; Found pairs:{foundPairs.length / 2}
      <button onClick={() => shuffleCards(cards)}>PLAY AGAIN</button>
    </div>
  );
};

export default Pexeso;
