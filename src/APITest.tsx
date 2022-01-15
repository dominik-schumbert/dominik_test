import React from "react";

export default function ApiTest() {
  const [data, setData] = React.useState({});
  const [counter, setCounter] = React.useState(1);

  const fetchOnline = async () => {
    const response = await fetch("http://localhost:8000/artikel/" + counter.toString());
    const data = await response.json();
    setData(data);
    setCounter(counter+1);
  };

  return (
    <div>
      <p>currently data = </p>
      <pre>{JSON.stringify(data, null, "  ")}</pre>
      <button onClick={fetchOnline}>Fetch Data Online (async/await)</button>
    </div>
  );
}
