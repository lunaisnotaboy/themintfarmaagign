import { render } from "react-dom";
import * as React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";
import Body from "./components/Body";

import "./styles.css";

library.add(fab, fas);

function App() {
  return (
    <div className="page">
      <Header />
      <Body />
    </div>
  );
}

const rootElement = document.getElementById("app");
render(<App />, rootElement);
