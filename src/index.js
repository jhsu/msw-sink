import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// need to run msw init ./public
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks");
  worker.start()
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
