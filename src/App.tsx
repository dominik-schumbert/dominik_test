import React, { ReactElement } from 'react';

let liste: Array<string> = ["Das", "ist", "eine", "Liste"];

function App(): ReactElement {
  return (
    <div>
      <header>
        <ul>
          {liste.map((element) => <li>{element}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
