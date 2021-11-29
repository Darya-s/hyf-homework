import React, { useState } from "react";


function inputField({description}) {
  
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
