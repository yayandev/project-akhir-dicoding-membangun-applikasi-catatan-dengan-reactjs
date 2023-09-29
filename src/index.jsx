import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./components/Main";
import "./globals.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Main />
  </React.Fragment>
);
