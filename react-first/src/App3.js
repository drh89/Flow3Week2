import React from "react";
import PropTypes from "prop-types";
import {names} from "./file2";

  function Welcome(props){
      return <h1>Hello, {props.name}</h1>;
  }
  function WelcomePerson(props){
      return <h1>Hello {props.person.firstName} {props.person.lastName}, email: {props.person.email}</h1>
  }

  Welcome.propTypes = {
      name: PropTypes.string
  };

  Welcome.defaultProps = {
      name: "Unknown"
  };

const greetPersons = names.map((p) => <WelcomePerson key={p.email} person = {p} />)

  export default function App3() {
 
    return (
      <div id="app3">
        <h3>Composing Components</h3>
        <div>
            <Welcome name = "Sara" />
            <Welcome name = "Cahal" />
            
            
            {greetPersons};
        </div>
      </div>
    );
  }

