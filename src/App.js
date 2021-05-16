import React from "react";
import "./App.css";

const numbers = [23, 61, 31, 55, 78];

function App() {
  return (
    <div className="App">
      {numbers.map((number) => {
        return (
          <span>
            {number + 3}
            <br />
          </span>
        );
      })}
    </div>
  );
}

export default App;
