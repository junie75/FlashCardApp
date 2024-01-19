function MoveButton({ nextCard }) {
  return (
    <div className="move">
      <button onClick={() => nextCard(-1) /*goes backwards*/}>previous</button>
      <button onClick={() => nextCard(1) /*goes forward*/}>next</button>
    </div>
  );
}

export default MoveButton;
