import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ToDoList from './ToDoApp';
import MySql from './MySql';
import reportWebVitals from './reportWebVitals';

const todos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToDoList/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
