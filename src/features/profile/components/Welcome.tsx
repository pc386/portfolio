import "./Welcome.css";

import Help from "../../terminal/components/Help";
import Title from "./Title";

interface WelcomeProps {
  executeCommand: (command: string) => void;
}

function Welcome({ executeCommand }: WelcomeProps) {
  return (
    <div className="Welcome" id="welcome">
      <Title />
      <Help executeCommand={executeCommand} text="" />
    </div>
  );
}

export default Welcome;
