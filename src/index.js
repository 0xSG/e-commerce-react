import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Cards from "./cards";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Cards />, document.getElementById("root"));
registerServiceWorker();
