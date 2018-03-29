import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal } from "styled-components";

injectGlobal`
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
