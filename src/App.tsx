import "./App.css";
import { Container } from "react-bootstrap";
import Welcome from "./features/profile/components/Welcome";
import Terminal from "./features/terminal/components/Terminal";
import useTerminal from "./features/terminal/model/useTerminal";

function App() {
  const { history, executeCommand } = useTerminal();

  return (
    <Container className="App">
      <Welcome executeCommand={executeCommand} />
      <Terminal history={history} executeCommand={executeCommand} />
      {/* <a href="//blog.cekic.xyz" className="blog-link">
          Go to Blog
        </a> */}
    </Container>
  );
}

export default App;
