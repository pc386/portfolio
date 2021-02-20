import React from "react";
import "../styles/Welcome.css";

import Title from "./Title";

function Welcome(props) {
  const { help } = props;
  return (
    <div className="Welcome" id="welcome">
      <Title />
      {help}
    </div>
  );
}

export default Welcome;
