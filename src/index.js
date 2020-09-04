import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const promisedState = axios
  .get(`http://localhost:3001/boards/1`)
  .then((res) => {
    console.log("FETCH-DATA",res);
    return res.data;
  });

console.log(promisedState);
ReactDOM.render(
  <React.StrictMode>
    <App initialState={promisedState} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
