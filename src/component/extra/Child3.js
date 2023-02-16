import React, { useContext } from 'react'
import { Tododata } from '../Newtodo'

export default function Child3() {

  const data = useContext(Tododata);
  return (
    <div>
      <h1>This Value is use useContext function</h1>
       {data.map( (todo) =>  
    <>
        <h3 key={todo.id}>{todo.text}</h3>
       {/* <br />  */}
        </>
    )} 
    </div>
    
  
    
    
  )
}
