import React from "react";
import "./App.css";
import Input from "./components/form/Input";
import SubmitButton from "./components/form/SubmitButton";

function App() {
  return (
    <div className="Main-container">
      <header className="App-header">
        <h1>
          Coding assignment - Demo project with React client and node.js REST
          API
        </h1>
      </header>
      <div className="group-1">
        <h2>
          Endpoint 1: Submit multiple integers separated by comma, calculate the
          sum and tell if it's a prime number or not.
        </h2>
        <Input />
        <SubmitButton />
      </div>
      <div className="group-2">
        <h2>
          Endpoint 2: Submit a single integer and tell if it's a prime number or
          not.
        </h2>

        <Input />
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
