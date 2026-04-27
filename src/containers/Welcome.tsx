import type { ReactElement } from "react";
import "../styles/Welcome.css";

import Title from "./Title";

interface WelcomeProps {
  help: ReactElement;
}

function Welcome({ help }: WelcomeProps) {
  return (
    <div className="Welcome" id="welcome">
      <Title />
      {help}
    </div>
  );
}

export default Welcome;
