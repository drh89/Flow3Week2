import React, { useState, useEffect } from "react";
import AddEditPerson from "./AddEditPerson";
import AllPersons from "./AllPersons";



function App({apiFacade}) {
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };
  const [personToAddEdit, setPersonToAddEdit] = useState(emptyPerson);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    let timer = setInterval(() => update(),500);
    return function cleanUp(){
      clearInterval(timer);
    };
      
  });

  const update = () => {
    apiFacade.getPersons().then(list => setPersons(list));

  }

  const storeAddEditPerson = (person) => {
    apiFacade.addEditPerson(person);
    setPersonToAddEdit(emptyPerson);
  }

  const deletePerson = (id) => {
    apiFacade.deletePerson(id);
    setPersonToAddEdit(emptyPerson);
  }

  const editPerson = (person) => {
    setPersonToAddEdit(person);
    
  }


  return (
    <div className="container">
      <div className="row">
        <h3>CRUD Demo </h3>
        <div className="col-md-7">
          <h3>All Persons</h3>
          <AllPersons
            persons={persons}
            editPerson={editPerson}
            deletePerson={deletePerson}
          />
        </div>
        <div className="col-md-5">
          <h3 style={{ textAlign: "center" }}>Add Persons</h3>
          <AddEditPerson
            newPerson={personToAddEdit}
            //  Next two lines, are if you decide to use the pattern introduced in the day-2 exercises
            addEditPerson={storeAddEditPerson}
            key={personToAddEdit.id}
          />
        </div>

      </div>
    </div>
  );
}
export default App;
