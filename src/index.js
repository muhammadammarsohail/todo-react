import * as React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

function App() {
  const [isChecked, setChecked] = useState(false);
   

  const handleChange = () => {
    setChecked(!isChecked);
  };

  return (
    <>
      <h1>Todo</h1>
      <p>anything</p>
      <button>+</button>
      <div>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
