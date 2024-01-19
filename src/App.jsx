import "./styles.css";
import { useState } from "react";

[currentCard, setCurrentCard] = useState(0);
[side, setSide] = useState("definition");

//flashcard object
var card = {
  term: String,
  definition: String,
};

//array of flashcard
let cardDeck = [
  { term: "finir", definition: "to finish" },
  { term: "venir", definition: "to come" },
];

/*function flipCard() {
  side === term ? setSide(definition) : setSide(term);
}*/

function showCard() {
  return side === "term"
    ? cardDeck[currentCard].term
    : cardDeck[currentCard].definition;
}
function App() {
  return (
    <>
      <div>
        <h1 className="title">FlashCards</h1>
        <div className="cardDeck">
          <div className="flashCard" /*onClick={flipCard()}*/>
            <p className="cardTerm">{() => showCard()}</p>
            {/*<p className="cardDef">To Finish</p>*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
