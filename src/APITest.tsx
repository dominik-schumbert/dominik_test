import React from "react";

export default function ApiTest() {
  const [counter, setCounter] = React.useState(1);
  const [artikel, setArtikel] = React.useState({});

  const fetchOnline = async () => {
    const response = await fetch("http://localhost:8000/artikel/" + counter.toString());
    const data = await response.json();
    setCounter(counter+1);
    setArtikel((data as Array<any>)[0]);
  };


  return (
    <div>
      <h2>New API data</h2>
      <table className="table">
      {
        Object.entries(artikel).map(([key, value]) =>(
          <tr>
            <th>{key}</th>
            <td>{(value as string)}</td>
          </tr>
        ))
      }
      </table>
      <button onClick={fetchOnline}>Fetch Data Online (async/await)</button>
    </div>
  );
}
