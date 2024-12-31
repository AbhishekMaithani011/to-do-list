import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleItem() {
    setItems((prevItem) => {
      return [...prevItem, text];
    });
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={text} />
        <button onClick={handleItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
