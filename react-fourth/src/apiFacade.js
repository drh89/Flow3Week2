

let URL = "http://localhost:3456/api";

//...

//The two methods below, are the utility-methods introduced here (use them if you like):
//https://docs.google.com/document/d/1hF9P65v_AJKCjol_gFkm3oZ1eVTuOKc15V6pcb3iFa8/edit?usp=sharing

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json"
    }
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  //OBSERVE This returns a promise, NOT the actual data, you must handle asynchronicity by the client
  function getPersons() {
    return fetch(URL).then(handleHttpErrors);
  }

  function addEditPerson(person) {
   let method = "POST";
    if(person.id !== ""){
      method = "PUT"
      const options = makeOptions(method,person);
      return fetch(URL + "/" + person.id,options).then(handleHttpErrors);
     }
    const options = makeOptions(method,person);
    return fetch(URL,options).then(handleHttpErrors);   

  }

  function deletePerson(id) {
    const method = "DELETE";
    const options = makeOptions(method);
    return fetch(URL +"/" + id,options);

  }
  
  return {
    getPersons,
    addEditPerson,
    deletePerson
  };
}


const returnValue = apiFacade();

export default returnValue;

