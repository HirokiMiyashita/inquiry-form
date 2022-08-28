import { useState } from "react";
import { Validate } from "./components/validations";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { N } from "./components/N";

function App() {
  const [count, setCount] = useState("222222222222222222");
  const a = Validate.isLengthName(count);
  const b = Validate.isLengthPhone(count);
  const [inputValue, setInputValue] = useState("");
  const [input, setInput] = useState<string>("");
  console.log(a);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  console.log(input);

  const array = ["aaaaaaaaaaa", "BBBBBBBBBBBB", "CCCCCCCCCCCC"];

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={handleChange} />
      <N state={input} setState={setInput} value={array} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
