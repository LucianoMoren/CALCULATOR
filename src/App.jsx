import React, { useState } from "react";
import "./App.css";
import Display from "./components/display/Display";
import Button from "./components/buttons/Button";

function App() {
  return (
    <React.Fragment>
      <Display />
      <Button />
    </React.Fragment>
  );
}

export default App;
