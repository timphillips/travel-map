import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import registerServiceWorker from "./registerServiceWorker";

const locations = require("./locations.json");

ReactDOM.render(<App locations={locations} />, document.getElementById("root"));
registerServiceWorker();
