import React from "react";
import Pexeso from "./Pexeso";
import SideBar from "./SideBar";
import "./App.css";
import Images from "./Images";

const App = () => {
  const [cards, setCards] = React.useState([...Images, ...Images]);
  const [clicks, setClicks] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const [ended, setEnded] = React.useState(false);
  const [activeCards, setActiveCards] = React.useState([]);
  const [foundPairs, setFoundPairs] = React.useState([]);

  function setFinishedGame() {
    if (ended) {
      setFoundPairs([]);
      setEnded(false);
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
        setEnded(true);
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
    setFinishedGame();
    toggleFirstCard(index);
    toggleSecondCard(index);
    newPair(index);
    handleClicks();
  }

  return (
    <div className="app_container">
      <Pexeso
        cards={cards}
        activeCards={activeCards}
        foundPairs={foundPairs}
        flipCard={flipCard}
        clicks={clicks}
        shuffleCards={shuffleCards}
        ended={ended}
      />
      <SideBar />
    </div>
  );
};

export default App;
