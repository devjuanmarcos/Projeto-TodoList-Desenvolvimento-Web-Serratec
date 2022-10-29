import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0)

  function handleBoolean() {
    setCount(count + 1)
    console.log(count);
  }
  console.log(count);
  return (
    <>
      {count}
      <button onClick={handleBoolean}>click-me</button >
    </>
  );
}


