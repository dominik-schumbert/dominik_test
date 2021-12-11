import React from 'react';
import logo from './logo.svg';
import './App.css';

let liste: Array<string> = ["Das", "ist", "eine", "Liste"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {liste.map((element) => <li>{element}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
