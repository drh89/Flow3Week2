import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormVideo from './FormVideo.js';
import FormDemo from './FormDemo.js'
import ReservationForm from './FormDemoMultiple.js'
import App from './App';
import LiftState2 from './LiftState2';


let app = <FormVideo />;

const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>      
     
      <a href="/"  id="form0">Form-video</a> &nbsp;      
      <a href="/"  id="form1">Forms-and-CC</a> &nbsp;      
      <a href="/"  id="form2">Forms-Multiple</a> &nbsp;      
      <a href="/"  id="app">Lift-State</a> &nbsp;      
      <a href="/"  id="state2">Lift-State2</a> &nbsp;      
           
      
      
      {/* Add as many as you have exercises, but remember className="x" */}
      {app}
    </div>
  );

};

function handleSelect(event) {
  event.preventDefault();
  const id = event.target.id;
  switch (id) {
    case "form0":
        app = <FormVideo />; 
        break;   
    case "form1":
        app = <FormDemo />; 
        break;   
    
    case "form2":
        app = <ReservationForm />; 
        break;   
    case "app":
        app = <App />; 
        break;   
    case "state2":
        app = <LiftState2 />; 
        break;   
    
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));


