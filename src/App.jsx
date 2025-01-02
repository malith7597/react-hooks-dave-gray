import { useCallback, useEffect, useState } from "react";
import UseMemoExample from "./useMemoComponent";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [num1] = useState(10);
  const [num2] = useState(20);
  const [result, setResult] = useState(0);

  const sum = useCallback(() => {
    console.log("Sum function called");
    return num1 + num2;
  }, [num1, num2]);

  useEffect(() => {
    console.log("New sum value : ", sum());
    setResult(sum());
  }, [sum]);
  return (
    <main className="App">
      <input
        type="text"
        placeholder="input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <h1> Output : {userInput || "--"}</h1>
      //following component for useMemo hook
      <UseMemoExample />
    </main>
  );
}

export default App;
