import React, { useState } from "react";

function inputField({id}) {
  
  return (
    <>
     <li>
         
     <input
      type="text"
      value={description}
      onChange={(e) => updateItem(e.target.value)}
    ></input>

      </li>
    </>
  );
}
export default inputField;
