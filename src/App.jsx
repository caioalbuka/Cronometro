import React, { useEffect, useState } from "react";

import "./App.css";
import Cronometro from "./Cronometro";
import Relogio from "./Relogio";

function App() {
  return (
    <div className="container">
      <Cronometro />

      <Relogio />
    </div>
  );
}

export default App;
