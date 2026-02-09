import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const reset = () => {
    if (count > 0) {
      setCount(0);
    }
  };

  const consulme = () => {
    if (count > 0) {
      setCount(count / 2);
    }
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => Math.max(0, prev + 1))}>+</button>
      <button onClick={() => setCount((prev) => Math.max(0, prev * 2))}>*2</button>
      <button onClick={reset}>reset</button>
      <button onClick={consulme}>ділення</button>
    </div>
  );
}
export default Counter;
