import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "changeColor":
      return { ...state, color: !state.color };
    case "setUserInput":
      return { ...state, userInput: action.payload };
    default:
      return state;
  }
};

function App() {
  /* const [count, setCount] = useState(0);
  const [color, setColor] = useState("false");
  const [userInput, setUserInput] = useState(""); */

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    color: false,
    userInput: ""
  });

  return (
    <main className="App">
      <input
        type="text"
        /* value={ userInput }  */
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: "setUserInput", payload: e.target.value })
        }
      />
      <br />
      {/*   this can be replaced with the following */}
      {/*  <p>{count}</p> */}
      <p>{state.count}</p>

      <section
        style={{ display: "flex", justifyContent: "center", gap: "10px" }}
      >
        {/* <button onClick={() => setCount(count + 1)}>+</button> */}
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        {/* <button onClick={() => setCount(count - 1)}>-</button> */}
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        {/*  <button onClick={() => setColor(!color)}>Change Color</button> */}
        <button onClick={() => dispatch({ type: "changeColor" })}>
          Change Color
        </button>
      </section>
      <p style={{ color: state.color ? "#FFF" : "#FFF952" }}>
        {state.userInput}
      </p>
    </main>
  );
}

export default App;
