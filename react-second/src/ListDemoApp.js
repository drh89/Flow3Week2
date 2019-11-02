import React, { useState, useEffect} from 'react';
import "./table.css";

function TableItem(props){
    return( <tr><td>{props.value}</td></tr>);
}

function ListItem(props){
    return <li>{props.value}</li>;
}


function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number) => 
    <ListItem key={number.toString()} value={number} />
    );

    return (
        <ul>
            {listItems}
        </ul>
    );

    
}

function NumberTable(props){
    const numbers = props.numbers;
    const table = numbers.map((number) =>
        <TableItem key={number.toString()} value={number}  />
    );
    
    
    return (
        <table className="table">
        <thead>
            <tr><td>Number</td></tr>
        </thead>
        <tbody>
            {table}
        </tbody>
           </table>
    )
}
function TableDemo(props){
    return (
        <div>
            <NumberTable numbers={props.numbers} />
        </div>
    )
}

function ListDemo(props){
    console.log(props.numbers);
    return(
        <div>
            <h2>All numbers passed in via props</h2>
            <NumberList numbers={props.numbers} />
        </div>
    );
}



export default function ListDemoApp(){
    const [numbers,setNumbers] = useState([1,2,3,4]);

    useEffect(() => {
        let timer = setInterval(() => addNumber(),5000);
        return function cleanUp(){
            clearInterval(timer);
        }
    })

    const addNumber = ()=>{
        const rand = Math.floor(Math.random()*1000) +1;
        setNumbers([...numbers, rand]);
    }

    
    return (
        <div>
    <ListDemo numbers = {numbers} />
    <br></br>    
    <TableDemo numbers = {numbers} />
    </div>
    );
}