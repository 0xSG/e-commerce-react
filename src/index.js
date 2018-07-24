import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainPage from "./main/main";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<MainPage />, document.getElementById("root"));
registerServiceWorker();
