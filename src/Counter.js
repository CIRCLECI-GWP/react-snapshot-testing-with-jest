import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(Math.max(0, count - 1));
  };

  return (
    <div className="counter">
      <h1>COUNTER</h1>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
