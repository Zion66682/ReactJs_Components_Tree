import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [item, setItem] = useState("");
  const [itemArray, setItemArray] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setItem(newValue);
    //console.log(newValue);
  }

  function addItem(event) {
    setItemArray((prevItems) => {
      //used spread operator for previous items followed by new item
      return [...prevItems, item];
    });
    setItem("");
  }

  function deleteItem(id) {
    setItemArray((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemArray.map((toDoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              item={toDoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
