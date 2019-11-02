import React from 'react';
import PropTypes from 'prop-types';

const NamesList = (props) => {
  return (
    <React.Fragment>
      <h2>All Names</h2>
      <ul>
        {props.names.map(name => (
          <li key={name.id}>{name.name}
                <a href="#/" onClick = {(e) => {props.deleteName(name)}}>(delete / </a>
                <a href="#/" onClick = {(e) => {props.editName(name)}}>edit) </a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default NamesList;

    