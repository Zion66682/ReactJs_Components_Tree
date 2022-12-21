import React, { useState } from "react";

function ToDoItem(props) {
  //const [isStrike, setClicked] = useState(false);

  /*function handleClick() {
    setClicked(prevValue => {
      return !prevValue;
    });
  }*/

  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
      /*onClick={handleClick}
      style={
          { textDecoration: isStrike? "line-through":"none" }
      }*/
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
