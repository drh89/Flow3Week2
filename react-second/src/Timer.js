import React, {useState, useEffect} from 'react';


export default function Timer(){

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() =>{
        let timerId = setInterval( () => tick(),1000);
        return function cleanup(){
            clearInterval(timerId);
        };
        
        
    });
    function tick(){
        setTime(new Date().toLocaleTimeString());
    }
    console.log("Clock is on")
    return(
        <div>
        <p>Time is: {time} PM</p>
        </div>
    )
}