"use client";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const counter = function () {
    console.log("Count Component");
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={counter}>Click</button>
    </div>
  );
};
