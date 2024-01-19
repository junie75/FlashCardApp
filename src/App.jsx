import Header from "./Header";
import { useState } from "react";
import HomePage from "./HomePage";
import StudyPage from "./StudyPage";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  const handleSubmit = () => {
    console.log(text);
  };
  return (
    // <StudyPage></StudyPage>
    <div>
      <Header title="Create New Deck" />
      {/* <form className="newDeckForm"> */}
      <div className="formRow">
        <label htmlFor="largeTextArea">
          Copy and Paste your Terms and definitions!
        </label>
        <textarea
          id="largeTextArea"
          value={text}
          onChange={handleChange}
          rows={20} // Set the number of visible rows
          cols={25} // Set the number of visible columns
        />
        <button onClick={handleSubmit} className="move">
          Submit
        </button>
      </div>
      {/* </form> */}
    </div>
  );
}

export default App;
