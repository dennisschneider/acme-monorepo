import React, { useEffect, useState } from "react";
import { HelloWorld } from "@acme/common";
import { fetchGeekJoke } from "@acme/services";
import "./App.css";

const App = () => {
  const [geekJoke, setGeekJoke] = useState("");

  useEffect(() => {
    const fetchJoke = async () => {
      const geekJoke = await fetchGeekJoke();
      setGeekJoke(geekJoke);
    };
    fetchJoke();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          <HelloWorld name="website" />
        </h2>
        <p dangerouslySetInnerHTML={{ __html: geekJoke }} />
      </header>
    </div>
  );
};

export default App;
