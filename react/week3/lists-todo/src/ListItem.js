import React, { useState } from "react";
import inputField from "./InputField";

function ListItem({ listItem, deleteListItem, addFormFields }) {
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

        <button type="submit" onClick={() => deleteListItem(listItem.id)}>Delete</button>
        <button type="button"
          onClick={(e) => addFormFields(listItem.id)}
           
          >
          Edit
        </button>
      </li>
    </>
  );
}
export default ListItem;
