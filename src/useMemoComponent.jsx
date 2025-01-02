import React, { useEffect, useMemo } from "react";
import { useState } from "react";

const fib = (n) => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};

export const UseMemoExample = () => {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");

  const fibNumber = useMemo(() => fib(userNumber), [userNumber]);
  useEffect(() => {
    console.log("New number");
  }, [userNumber]);
  return (
    <div>
      <input
        type="text"
        placeholder="input"
        value={userNumber}
        onChange={(e) => setUserNumber(e.target.value)}
      />
      <h4> Output : {fibNumber || "--"}</h4>

      <input
        type="text"
        placeholder="input"
        value={randomInput}
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <h4>Output : {randomInput || "--"}</h4>
    </div>
  );
};

export default UseMemoExample;
