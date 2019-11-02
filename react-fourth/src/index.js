import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from "./components/App"
import returnValue from "./apiFacade";

ReactDOM.render(<App apiFacade={returnValue}/>, document.getElementById('root'));


