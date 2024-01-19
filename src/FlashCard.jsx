function FlashCard({ flipCard, showCard }) {
  return (
    <div className="flashCard" onClick={() => flipCard()}>
      <p className="cardTerm">{showCard()}</p>
    </div>
  );
}

export default FlashCard;
