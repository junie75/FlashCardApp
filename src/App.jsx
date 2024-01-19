import { useState } from "react";
import Header from "./Header";
import CardDeck from "./CardDeck";

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [side, setSide] = useState("term");

  //flashcard object
  // var card = {
  //   term: String,
  //   definition: String,
  // };

  //array of flashcard
  const cardDeck = [
    { term: "finir", definition: "to finish" },
    { term: "venir", definition: "to come" },
  ];

  const flipCard = () => {
    side === "term" ? setSide("definition") : setSide("term");
  };

  const showCard = () => {
    return side === "term"
      ? cardDeck[currentCard].term
      : cardDeck[currentCard].definition;
  };

  const nextCard = (direction) => {
    if (
      currentCard + direction >= 0 &&
      currentCard + direction < cardDeck.length
    )
      setCurrentCard(currentCard + direction);
    console.log(currentCard);
  };

  return (
    <>
      <div>
        <Header></Header>
        <CardDeck
          nextCard={nextCard}
          showCard={showCard}
          flipCard={flipCard}
        ></CardDeck>
      </div>
    </>
  );
}

export default App;
