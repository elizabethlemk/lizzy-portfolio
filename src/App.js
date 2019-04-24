import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import Sparkle from "react-sparkle";
import { Transition, animated } from "react-spring/renderprops";
import { Route, withRouter } from "react-router-dom";
import Logo from "./Logo";
import NavBar from "./NavBar";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";

class App extends React.Component {
  state = {
    activeItem: "home"
  };
  componentDidMount = () => {
    this.props.history.push("/home");
  };
  handleItemClick = (e, { name }) => {
    e.preventDefault();
    this.setState({ activeItem: name });
  };

  render() {
    console.log(this.state);
    return (
      <div id="window">
        <Sparkle />
        <Container textAlign="center" id="main-container">
          <Logo handleItemClick={this.handleItemClick} />
          <NavBar handleItemClick={this.handleItemClick} />
          <Transition
            items={this.state.activeItem === "home"}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {show =>
              show &&
              (props => (
                <div style={props}>
                  <Home />
                </div>
              ))
            }
          </Transition>
          <Transition
            items={this.state.activeItem === "about"}
            from={{ opacity: 0, transform: "translateY(100px)" }}
            enter={{ opacity: 1, transform: "translateY(0px)" }}
            leave={{ opacity: 0, transform: "translateY(100px)" }}
          >
            {show =>
              show &&
              (props => (
                <div style={props}>
                  <About />
                </div>
              ))
            }
          </Transition>
          <Transition
            items={this.state.activeItem === "blog"}
            from={{ opacity: 0, transform: "translateY(100px)" }}
            enter={{ opacity: 1, transform: "translateY(0px)" }}
            leave={{ opacity: 0, transform: "translateY(100px)" }}
          >
            {show =>
              show &&
              (props => (
                <div style={props}>
                  <Blog />
                </div>
              ))
            }
          </Transition>
          <Transition
            items={this.state.activeItem === "projects"}
            from={{ opacity: 0, transform: "translateY(100px)" }}
            enter={{ opacity: 1, transform: "translateY(0px)" }}
            leave={{ opacity: 0, transform: "translateY(100px)" }}
          >
            {show =>
              show &&
              (props => (
                <div style={props}>
                  <Projects />
                </div>
              ))
            }
          </Transition>
          <Transition
            items={this.state.activeItem === "contact"}
            from={{ opacity: 0, transform: "translateY(100px)" }}
            enter={{ opacity: 1, transform: "translateY(0px)" }}
            leave={{ opacity: 0, transform: "translateY(100px)" }}
          >
            {show =>
              show &&
              (props => (
                <div style={props}>
                  <Contact />
                </div>
              ))
            }
          </Transition>
        </Container>
      </div>
    );
  }
}

export default withRouter(App);
