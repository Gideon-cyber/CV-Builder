// import React, { Component } from "react";

import { LeftSection } from "./components/left-section/left.components";
import { MiddleSection } from "./components/middle-section/middle.component";
import { RightSection } from "./components/right-section/right.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </div>
  );
}

export default App;
