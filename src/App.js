import "./App.css";
import Container from "react-bootstrap/Container";
import Welcome from "./containers/Welcome";
import Terminal from "./containers/terminal/Terminal";
import useTerminalHistory from "./containers/terminal/useTerminalHistory";
import Help from "./containers/Help";

function App() {
  const { history, executeCommand } = useTerminalHistory();
  const help = <Help executeCommand={executeCommand} text="" />;

  return (
    <Container className="App">
      <Welcome help={help} />
      <Terminal history={history} executeCommand={executeCommand} />
      {/* <a href="//blog.cekic.xyz" className="blog-link">
          Go to Blog
        </a> */}
    </Container>
  );
}

export default App;
