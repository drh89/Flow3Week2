import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function NewName(props) {

  const [name, setName] = useState(props.nextName);

  const saveName = evt => {
    if (name.name === "") {
      return;
    }
    props.addName(name);
    evt.preventDefault();
  };

  useEffect(() => setName({ ...props.nextName }), [props.nextName]);

  const onChange = evt => {
    const val = evt.target.value;
    name.name = val;
    setName({...name });
  };
  const title = name.id === "" ? "Create new name" : "Edit name"
  return (
    <div>
      <h4>{title}</h4>
      <form>
        <input value={name.name} onChange={onChange} />
        <br/><br/>
        <button onClick={saveName} className="btn btn-info">Save</button>
      </form>
      {name.id !== "" && <p>Editing name with</p>}
    </div>
  );
}
export default NewName;
