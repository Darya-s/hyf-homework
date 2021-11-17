import React, { useState } from "react";

function Todo({ listItem, deleteListItem, handleAddInput }) {
  const [value, setValue] = useState(false);

  return (
    <>
      <li style={{ textDecoration: value ? "line-through" : "none" }}>
        {listItem.description}
        {listItem.deadline}

        <input
          type="checkbox"
          checked={value}
          onChange={(e) => setValue(e.target.checked)}
        ></input>

        <button onClick={() => deleteListItem(listItem.id)}>Delete</button>
        <button
          onClick={() => (
            <input
              type="text"
              onInput={(e) => handleAddInput(e.target.value, listItem.id)}
            ></input>
          )}
        >
          Edit
        </button>
      </li>
    </>
  );
}
export default Todo;
