import * as React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          Hi there{" "}
          <span role="img" aria-label="hand wave">
            👋🏻
          </span>
        </h1>
      </header>
    );
  }
}
