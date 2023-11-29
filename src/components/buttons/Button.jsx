import React, { useState } from "react";
// import functions from "../../functions/functions.js";

function Button(props) {
  const [index, setIndex] = useState([]);

  const handleClick = (value) => {
    handleChange(value);
  };

  const handleChange = (value) => {
    const array = [...index];
    array.push(value);
    setIndex(array);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    setIndex([]);
  };

  const erraser = (event) => {
    const newArray = [...index];
    newArray.pop();
    setIndex(newArray);
  };

  function result() {
    for (let i = 0; i < index.length; i++) {
      if (index[i] === "+") {
        const funcSuma = index[i - 1] + index[i + 1];
        const suma = [
          ...index.slice(0, i - 1),
          funcSuma,
          ...index.slice(i + 2),
        ];
        setIndex(suma);
        return;
      } else if (index[i] === "-") {
        const funcResta = index[i - 1] - index[i + 1];
        const resta = [
          ...index.slice(0, i - 1),
          funcResta,
          ...index.slice(i + 2),
        ];
        setIndex(resta);
        return;
      } else if (index[i] === "x") {
        const funcMultiplicar = index[i - 1] * index[i + 1];
        const multiplicar = [
          ...index.slice(0, i - 1),
          funcMultiplicar,
          ...index.slice(i + 2),
        ];
        setIndex(multiplicar);
        return;
      } else if (index[i] === "/") {
        const funcDivision = index[i - 1] / index[i + 1];
        const division = [
          ...index.slice(0, i - 1),
          funcDivision,
          ...index.slice(i + 2),
        ];
        setIndex(division);
        return;
      }
    }
  }

  return (
    <div>
      <input value={index.join("")}></input>
      <br />
      <button onClick={handleDelete}>AC</button>
      <button>( )</button>
      <button>%</button>
      <button onClick={() => handleClick("/")}>/</button>
      <br />
      <button onClick={() => handleClick(7)}>7</button>
      <button onClick={() => handleClick(8)}>8</button>
      <button onClick={() => handleClick(9)}>9</button>
      <button onClick={() => handleClick("x")}>x</button>
      <br />
      <button onClick={() => handleClick(4)}>4</button>
      <button onClick={() => handleClick(5)}>5</button>
      <button onClick={() => handleClick(6)}>6</button>
      <button onClick={() => handleClick("-")}> - </button>
      <br />
      <button onClick={() => handleClick(1)}>1</button>
      <button onClick={() => handleClick(2)}>2</button>
      <button onClick={() => handleClick(3)}>3</button>
      <button onClick={() => handleClick("+")}>+</button>
      <br />
      <button onClick={() => handleClick(0)}>0</button>
      <button onClick={() => handleClick(".")}>.</button>
      <button onClick={erraser}>C</button>
      <button onClick={result}> = </button>
    </div>
  );
}

export default Button;
