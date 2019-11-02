import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NameList from "./NameList"
import NewName from "./NewName"
import uuid from "uuid/v1";

function LiftState2() {
  const initialData = [
    { id: uuid(), name: "Peter" },
    { id: uuid(), name: "Anders" },
    { id: uuid(), name: "Kim" }
  ]
  const [names, setNames] = useState(initialData);
  const [newName, setNewName] = useState({ id: "", name: "" });
  console.log(names)

  const addName = name => {
    if (name.id === "") { // id=-1 Indicates a new object
      name.id = uuid();
      names.push(name);
    } else {//if id != "", it's an existing todo. Find it and add changes
      let nameToEdit = names.find(n => n.id === name.id);
      nameToEdit.name = name.name
    }
    setNames([...names]);
    setNewName({id:"", name:""})
  };
  const deleteName = (name) => {
    if(name.id ===""){return;}

    let newArr = names.filter(function(n){
      return n.id != name.id;
    })
    setNames([...newArr]);    
    setNewName({id:"",name:""});

  }
  const editName = (name) => {
    const nameToEdit = names.find(n => n.id === name.id);
    
    setNewName(nameToEdit);
    
  }

  
  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom:25 }}>
        Props and Lifting State Demo 2
      </h2>

      <div className="row">
        <div className="col-6 allTodos">
          <NameList 
            names={names} 
            deleteName={deleteName}
            editName={editName}
          />
        </div>
        <div className="col-5 new-todo">
          <NewName
            addName={addName}
            nextName={newName}
          />
        </div>
      </div>
    </div>
  );
}
export default LiftState2;