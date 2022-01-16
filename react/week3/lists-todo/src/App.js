import React, { useState, useEffect } from "react";
import List from "./List";
import InputField from "./InputField";

import "./App.css";


const todoList = [
  {
    id: 1,
    description: "Get out of bed",
    deadline: "2021-11-16T02:06",
  },
  {
    id: 2,
    description: "Brush teeth",
    deadline: "2021-11-16T02:06",
  },
  {
    id: 3,
    description: "Eat breakfast",
    deadline: "2021-11-16T02:06",
  },
];

function App() {
  const [description, setDescription] = useState([]);
  const [deadline, setDeadline] = useState("");
  const [list, setList] = useState(todoList);




  let addFormFields=(id)=>{
   
      return(
        <InputField id={id}/>
      )
}

let updateItem=(eventValue)=>{
  const newList = [...list];
  newList.map((x) => {
      return x.id;
    })
    .indexOf(eventValue);
setDescription(eventValue);
}


  function deleteListItem(id) {
    const newList = [...list];
    const index = newList
      .map((x) => {
        return x.id;
      })
      .indexOf(id);
    newList.splice(index, 1);
    setList(newList);
  }

  function addNewTodo(newDescription, newDeadline) {
    const newTodo = {
      description: newDescription,
      deadline: newDeadline,
    };
    setList((list) => [...list, newTodo]);
    setDescription("");
    setDeadline("");
  }







  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      {list.length === 0 && <p>No item</p>}
      <h3>you have used {timer}seconds on this page</h3>
      <List
        list={list}
        deleteListItem={deleteListItem}
        addFormFields={addFormFields}
        updateItem={updateItem}
      />
     
     
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit" onClick={() => addNewTodo(description, deadline)
      }>
        add
      </button>
    </>
  );
}

export default App;
