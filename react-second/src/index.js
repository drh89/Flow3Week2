import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Timer from './Timer';
import UseState1 from "./UseState1";
import Joke from "./Joke";
import ListDemoApp from "./ListDemoApp";
import ListDemoApp2 from "./ListDemoApp2";

let app = <UseState1 />;

const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>      
     
      <a href="/"  id="use1">Use-State</a> &nbsp;      
      <a href="/"  id="timer">Clock</a> &nbsp;
      <a href="/"  id="joke">Joke</a> &nbsp;
      <a href="/"  id="list">List-and-Keys</a> &nbsp;
      <a href="/"  id="list2">List-and-Keys-Cont</a> &nbsp;
      
      {/* Add as many as you have exercises, but remember className="x" */}
      {app}
    </div>
  );

};

function handleSelect(event) {
  event.preventDefault();
  const id = event.target.id;
  switch (id) {
    case "use1":
        app = <UseState1 />; 
        break;   
    case "timer":
        app = <Timer />; 
        break;   
    case "joke":
        app = <Joke />;    
        break;
    case "list":
        app = <ListDemoApp />;    
        break;
    case "list2":
        app = <ListDemoApp2 />;    
        break;
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}
ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));



