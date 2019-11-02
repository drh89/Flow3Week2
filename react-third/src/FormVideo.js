import React, {useState} from 'react';
import "./App.css";


const FormVideo = () => {
    const initialState = {name: "", age: null, email: "", phone:""};

    const [person, setPerson] = useState(initialState);
   
    const handleSubmit = (evt) => {
        
       window.alert(JSON.stringify(person))
       setPerson(initialState);
    }
  
    const handleInput = (event) => {
        const target = event.target;
        const id = target.id;
        const value = target.value;
        person[id] = value;
        setPerson({...person});
    }
    
    return (
      <div style={{marginTop:25}}>
        <form onChange={handleInput}>
          <input id="name" type="text" value={person.name} 
                 placeholder="Name" />
          <br/>
          <input id="phone" type="text" value={person.phone} 
                 placeholder="Phone" />
          <br/>
          <input id="age" type="number" value={person.age}
                 placeholder="Age" />
          <br/>
          <input id="email" type="text" value={person.email}
                  placeholder="email" />
          <br/>
          <input type="submit" value="Submit" onClick={() => handleSubmit()} ></input>
        </form>
        {JSON.stringify(person)}

      </div>
    );
  }
  
  export default FormVideo;