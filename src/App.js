import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import Sparkle from "react-sparkle";
import { Transition, animated } from "react-spring";
import { Route, withRouter } from "react-router-dom";
import Logo from "./Logo";
import NavBar from "./NavBar";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";

class App extends React.Component {
  componentDidMount = () => {
    this.props.history.push("/home");
  };
  render() {
    return (
      <div id="window">
        <Sparkle overflowPx={100} />
        <Container textAlign="center" id="main-container">
          <Logo />
          <NavBar />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        </Container>
      </div>
    );
  }
}

export default withRouter(App);
