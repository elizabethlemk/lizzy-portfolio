import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import Sparkle from "react-sparkle";
import { Transition } from "react-spring/renderprops";
import { withRouter } from "react-router-dom";
import Logo from "./Logo";
import NavBar from "./NavBar";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import Social from "./Social";

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
    this.props.history.push(`/${name}`);
  };

  render() {
    console.log(this.state);
    return (
      <div id="window">
        <Sparkle />
        <Container textAlign="center" id="main-container">
          <Logo handleItemClick={this.handleItemClick} />
          <NavBar
            handleItemClick={this.handleItemClick}
            activeItem={this.state.activeItem}
          />
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
            items={this.state.activeItem === "resume"}
            from={{ opacity: 0, transform: "translateY(100px)" }}
            enter={{ opacity: 1, transform: "translateY(0px)" }}
            leave={{ opacity: 0, transform: "translateY(100px)" }}
          >
            {show =>
              show &&
              (props => (
                <div style={props}>
                  <Resume />
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

          <Social />
        </Container>
      </div>
    );
  }
}

export default withRouter(App);
