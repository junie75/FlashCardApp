import Header from "./Header";

function HomePage() {
  return (
    <div className="container">
      <Header title="Welcome to QuickStudy!" />
      <div className="move choices">
        <button>Create Deck</button>
        <button>Study Existing Deck</button>
      </div>
    </div>
  );
}

export default HomePage;
