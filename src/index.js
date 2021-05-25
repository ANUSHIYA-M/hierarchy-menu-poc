import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import Menu from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Menu />
  </StrictMode>,
  rootElement
);
