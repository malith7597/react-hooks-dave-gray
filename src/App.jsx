import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("false");
  const [userInput, setUserInput] = useState("");

  return (
    <main className="App">
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <br />
      <p>{count}</p>

      <section
        style={{ display: "flex", justifyContent: "center", gap: "10px" }}
      >
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setColor(!color)}>Change Color</button>
      </section>
      <p style={{ color: color ? "#FFF" : "#FFF952" }}>{userInput}</p>
    </main>
  );
}

export default App;
