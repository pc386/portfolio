import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Welcome from "./containers/Welcome";
import Terminal from "./containers/terminal/Terminal";
import Help from "./containers/Help";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.terminalRef = React.createRef();
    this.state = {
      help: null,
    };
  }

  componentDidMount() {
    const help = (
      <Help executeCommand={this.terminalRef.current.executeCommand} text="" />
    );
    this.setState({
      help,
    });
  }

  render() {
    const { help } = this.state;
    return (
      <Container className="App">
        <Welcome help={help} />
        <Terminal ref={this.terminalRef} />
        {/* <a href="//blog.cekic.xyz" className="blog-link">
          Go to Blog
        </a> */}
      </Container>
    );
  }
}

export default App;
