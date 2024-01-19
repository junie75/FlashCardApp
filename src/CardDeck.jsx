import { useState } from "react";
import FlashCard from "./FlashCard";
import MoveButton from "./MoveButtons";

function CardDeck({ deck }) {
  const [currentCard, setCurrentCard] = useState(0); //tracks what card currently studying
  const [side, setSide] = useState("term"); //tracks which side of the card is being studied

  //flips the card to the other side
  const flipCard = () => {
    side === "term" ? setSide("definition") : setSide("term");
  };

  //shows the term or the definition on the card
  const showCard = () => {
    return side === "term"
      ? deck[currentCard].term
      : deck[currentCard].definition;
  };

  //flips to the next card in the deck
  const nextCard = (direction) => {
    //flips card back to the term side before going to the next card
    if (side != "term") setSide("term");
    //moves the card deck forward or backwards based on which button is pressed
    if (currentCard + direction >= 0 && currentCard + direction < deck.length)
      setCurrentCard(currentCard + direction);
  };
  return (
    <div className="cardDeck">
      <FlashCard flipCard={flipCard} showCard={showCard} />
      <MoveButton nextCard={nextCard} />
    </div>
  );
}

export default CardDeck;
