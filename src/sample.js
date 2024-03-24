import './App.css';
import react from 'react'
import { useState } from 'react';

export default function sample(){
    const [count , setCount] = useState(0); // initial state variable i.e count = 0 setCount is a function which increments the count its like count ++ operator
 function handle(){
    setCount(count++);
    let p = document.querySelector("p");
    p.innerText = `you clicked me ${count} times`;
  }
    return(
      <>
      <button onClick={handle}>Click Me {count}</button>
      <p></p>
      </>  
    );
}