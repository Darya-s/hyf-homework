

import React  from 'react'

export default function todo({todo}){
    return(
        <div>
         
         <ul>
            
       <li> {todo.description} </li>
        
      <li>  {todo.deadline}</li>
      </ul>
        
        </div>
    )
    
}

