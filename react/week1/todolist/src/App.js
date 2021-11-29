import React from 'react';
import TodoList from './TodoList'
function App() {
  const todos=[
    {
      id:1,
      description: "Get out of bed",
      deadline:" Wed Sep 13 2017"
  },
  {
      id:2,
      description : "Brush teeth",
      deadline:"Thu Sep 14 2017"
  },
  {
      id:3,
      description: "Eat breakfast",
      deadline: "Fri Sep 15 2017"
  }
  ]

  return (
   <>
    <TodoList todos={todos}/>
    
  

     
  
     
  </>
  )
}

     
export default App;