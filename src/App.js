import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Welcome from "./containers/Welcome";
import Terminal from "./containers/terminal/Terminal";
import Help from "./containers/Help";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.terminal = <Terminal ref={React.createRef()} />;
    this.state = {
      help: null,
    };
  }

  componentDidMount() {
    const help = (
      <Help executeCommand={this.terminal.ref.current.executeCommand} text="" />
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
        {this.terminal}
        <a href="//blog.cekic.xyz" className="blog-link">
          Go to Blog
        </a>
      </Container>
    );
  }
}

export default App;
