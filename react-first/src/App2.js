import React from "react";
import upper, {males,females} from "./file2";

// small change
const person = {upper};
const {firstName, email} = person.upper;



let mergedArray = [...males, ...females];
let funnyArray = [...males, firstName, "Helle", ...females, "Tina"]

let personV2 = {...person, friends: mergedArray, phone: 123456 };



myFunction(mergedArray);
myFunction(funnyArray);
personFunction(personV2);



function personFunction(person){
    console.log(person);
}

function myFunction(arr){
    console.log(arr);
}

export default function App2() {
    
  return (
    <div id="app2">
      <h3>Object and Array Destructuring</h3>
      <p>Name: {firstName}, Email: {email}</p>
    </div>
  );
}
