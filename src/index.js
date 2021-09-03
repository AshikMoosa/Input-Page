import React from "react";
import ReactDOM from "react-dom";
import "./css/main.scss";
import App from "./component/App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
