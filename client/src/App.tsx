import { useState } from "react";
import "./App.css";
import Input from "./components/form/Input";
import Button from "@mui/material/Button";
import getPrime from "./api/getPrime";
import getSumAndCheck from "./api/getSumAndCheck";

function App() {
  const [multipleInt, setMultipleInt] = useState("");
  const [singleInt, setSingleInt] = useState("");
  const [sumAndCheck, setSumAndCheck] = useState("");
  const [primeResult, setPrimeResult] = useState("");

  const handleIntegerArray = (value: string) => {
    setMultipleInt(value);
  };

  const handleSingleInt = (value: string) => {
    setSingleInt(value);
  };

  const handleGetSumAndCheck = (value: string) => {
    if (value !== null && value.length < 201) {
      getSumAndCheck(value, setSumAndCheck);
    }
  };

  const handleGetPrime = (value: string) => {
    if (value !== null) {
      getPrime(value, setPrimeResult);
    }
  };

  return (
    <div className="Main-container">
      <header className="App-header">
        <h1>
          Coding assignment - Demo project with React client and node.js REST
          API
        </h1>
      </header>
      <div className="group-1">
        <h1>Endpoint 1</h1>
        <h2>Submit multiple integers as comma separated values.</h2>
        <h2>
          Calculate and return the sum and tell if it's a prime number or not.
        </h2>
        <p className="info">Example input: 1,2,3</p>
        <p className="info">Maximum length of input: 200</p>
        <p className="info">Maximum working sum of input: 9007199254740991</p>

        <Input
          label="Give Integers, separated by comma"
          width="50ch"
          action={handleIntegerArray}
        />
        <Button
          variant="outlined"
          onClick={() => {
            handleGetSumAndCheck(multipleInt);
          }}
        >
          Submit
        </Button>
        <div className="result-box">{sumAndCheck}</div>
      </div>
      <div className="group-2">
        <h1>Endpoint 2</h1>
        <h2>Submit a single integer and tell if it's a prime number or not.</h2>
        <p className="info">Maximum working input: 9007199254740991</p>
        <Input label="Give Integer" width="25ch" action={handleSingleInt} />
        <Button
          variant="outlined"
          onClick={() => {
            handleGetPrime(singleInt);
          }}
        >
          Submit
        </Button>
        <div className="result-box">{primeResult}</div>
      </div>
    </div>
  );
}

export default App;
