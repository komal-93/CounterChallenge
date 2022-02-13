import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState("");

  const onChangeHandler = function (e) {
    setCounter(e.target.value);
  };
  useEffect(() => {
    console.log(counter);
    counter &&
      setTimeout(() => {
        let newCount = counter - 1;
        setCounter(newCount);
      }, 1000);
  }, [counter]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="number" onChange={(e) => onChangeHandler(e)} />
      <p>{counter}</p>
    </div>
  );
}
