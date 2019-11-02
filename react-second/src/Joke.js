import React, {useState, useEffect} from 'react';

export default function Joke(){

    const [joke, setJoke] = useState("");
    const [dadJoke, setDadJoke] = useState("");

    function fetchDadJoke(){
        const options = {headers: {Accept: "application/json"}};
        fetch("https://icanhazdadjoke.com/", options)
        .then(res => res.json())
        .then(j => {setDadJoke(j);})
        .catch(err => console.log("Ups, Dad Error: " + err))
        console.log("fetching dad-joke...");
    }

    function fetchChuckJoke(){
        fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(joke => {setJoke(joke);})
        .catch(err => console.log("Ups, Chuck Error: " + err))
        console.log("fetching chuck-joke...");
    }

    useEffect(() => {
        let timer = setInterval(() => fetchDadJoke(),10000);
        return function cleanUp(){
            clearInterval(timer);
        }
    })

    return(
        <div>
            <p>{joke.value}</p>
            <button onClick={() => fetchChuckJoke()}>Get Chuck Norris Joke</button>
            <br></br>
            <br></br>
            <p>{dadJoke.joke}</p>
        </div>
    );
}