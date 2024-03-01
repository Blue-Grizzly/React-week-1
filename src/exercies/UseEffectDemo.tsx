

import { useEffect, useState } from "react";
import { BaseProps } from "../types";

export default function UseEffectDemo({ title }: BaseProps) {
  const [count, setCount] = useState(0);
  const [shouldCount, setShouldCount] = useState(true);

//use effect is for operations that have side effects
  useEffect(() => {
    if(!shouldCount) return;
    const i = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
//return = clean up function. Very important in cases like this.
    return ()=> {
      clearInterval(i);
    }
  },[shouldCount]);

  return (
    <>
      <h2>{title}</h2>
      <h3>{count}</h3>

      <button onClick={() => setShouldCount((prev) => !prev)}>
        {shouldCount ? "Stop Count" : "Start Count"}
      </button>
    </>
  );
}
