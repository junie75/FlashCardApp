function CardDeck({ nextCard, showCard, flipCard }) {
  //   const [currentCard, setCurrentCard] = useState(0);
  //   const [side, setSide] = useState("term");

  //   const flipCard = () => {
  //     side === "term" ? setSide("definition") : setSide("term");
  //   };

  //   const showCard = () => {
  //     return side === "term"
  //       ? deck[currentCard].term
  //       : deck[currentCard].definition;
  //   };

  //   const nextCard = (direction) => {
  //     if (currentCard + direction >= 0 && currentCard + direction < deck.length)
  //       setCurrentCard(currentCard + direction);
  //     //console.log(currentCard);
  //   };
  return (
    <div className="cardDeck">
      <div className="flashCard" onClick={() => flipCard()}>
        <p className="cardTerm">{showCard()}</p>
        {/*<p className="cardDef">To Finish</p>*/}
      </div>

      <div className="move">
        <button onClick={() => nextCard(-1)}>previous</button>
        <button onClick={() => nextCard(1)}>next</button>
      </div>
    </div>
  );
}

export default CardDeck;
