import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Normalize.css";
import "antd/dist/antd.css";
import "antd/dist/antd.less";
import App from "./App";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
