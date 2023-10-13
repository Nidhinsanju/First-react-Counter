import { useState } from "react";
import "./App.css";

var number = 0;
function App() {
  const [count, setCount] = useState(number);
  function addition() {
    setCount((number += 1));
  }

  function substration() {
    if (number <= 0 && number == 0) {
      alert("number is negative");
    }
    setCount((number -= 1));
  }
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={addition}>+</button>
      <h1>{count}</h1>
      <button onClick={substration}>-</button>
    </div>
  );
}

export default App;
