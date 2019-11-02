import React, { useState, useEffect } from 'react';
//import "./App.css";



export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(parseInt(localStorage.getItem("count")));
  //const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([1,5,7]);
  const [input, setInput] = useState(1);

  const addNumber = ()=>{
      const rand = Math.floor(Math.random()*100) +1;
      setNumbers([...numbers, rand]);
  }

  useEffect(() =>{
    function localStoreCount(){
      localStorage.setItem("count", count);
      console.log("Count stored");

    }
    localStoreCount();
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>numbers {numbers.toString()}</p>
      <>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Add/Decrease Count..." /> </>
      <button onClick={() => setCount(count - parseInt(input))}> Decrease me</button>
      <button onClick={() => setCount(count + parseInt(input))}>
        Increase me
      </button>
      <button onClick={addNumber}>
        Add Random Number
      </button>
    </div>
  );
}
