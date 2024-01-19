import Header from "./Header";
import CardDeck from "./CardDeck";

function StudyPage() {
  //array of cards
  const cardDeck = [
    { term: "finir", definition: "to finish" },
    { term: "venir", definition: "to come" },
  ];
  return (
    <>
      <div>
        <Header title="Flashcards"></Header>
        <CardDeck deck={cardDeck}></CardDeck>
      </div>
    </>
  );
}

export default StudyPage;
