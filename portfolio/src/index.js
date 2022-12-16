import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* to configure bootstrap and fontawsome */
/*Fontawsome*/
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

/*Bootstrap*/
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);

// npm i @fortawesome/fontawesome-free

// npm install bootstrap
