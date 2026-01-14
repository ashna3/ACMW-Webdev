import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((res) => res.json())
      .then((result) => {
        console.log("Data from backend:", result);
        setData(result);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React + Node Integration</h1>

      {data ? (
        <div>
          <p><b>Message:</b> {data.message}</p>
          <p><b>Name:</b> {data.name}</p>
          <p><b>Role:</b> {data.role}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
