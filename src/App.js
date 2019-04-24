import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Route, withRouter } from "react-router-dom";
import Logo from "./Logo";
import NavBar from "./NavBar";
import About from "./About";
import Home from "./Home";

class App extends React.Component {
  componentDidMount = () => {
    this.props.history.push("/home");
  };
  render() {
    return (
      <Container textAlign="center" id="main-container">
        <Route exact path="/home" component={Home} />
        <Logo />
        <NavBar />

        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={About} />
        <Route exact path="/blog" component={About} />
        <Route exact path="/contact" component={About} />
      </Container>
    );
  }
}

export default withRouter(App);
