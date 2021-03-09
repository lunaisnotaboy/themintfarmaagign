import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Body extends React.Component {
  render() {
    return (
      <main>
        <p>Hey! Sorry for the lack of... anything.</p>
        <hr />
        <p>
          The Mint Farm is gone for now, due to my ISP terminating our
          subscription. We are planning to move to a local ISP, so The Mint Farm{" "}
          <em>might</em> come back in the near future.
        </p>
        <p>But for now, nothing.</p>
        <hr />
        <p>P.S. if you need to contact me, use any of these services below:</p>
        <ul className="contact">
          <li>
            <h3>
              <FontAwesomeIcon icon={["fab", "github"]} /> GitHub
            </h3>
            <a href="//github.com/stampylongr">(github.com/stampylongr)</a>
          </li>
          <li>
            <h3>
              <FontAwesomeIcon icon={["fab", "dev"]} /> DEV
            </h3>
            <a href="https://dev.to/stampylongr">(dev.to/stampylongr)</a>
          </li>
          <li>
            <h3>
              <FontAwesomeIcon icon={["fas", "envelope"]} /> Email
            </h3>
            <span>(yo [at] themintfarm [dot] ml)</span>
          </li>
        </ul>
      </main>
    );
  }
}
