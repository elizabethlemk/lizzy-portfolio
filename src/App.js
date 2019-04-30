import React, { Suspense } from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import Sparkle from "react-sparkle";
import { Transition } from "react-spring/renderprops";
import { withRouter } from "react-router-dom";

import Logo from "./Logo";
import NavBar from "./NavBar";
import Social from "./Social";
import Load from "./Load";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Projects = React.lazy(() => import("./Projects"));
const Resume = React.lazy(() => import("./Resume"));
const Contact = React.lazy(() => import("./Contact"));

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
        <Sparkle count={30} />
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
                  <Suspense fallback={<Load />}>
                    <Home />
                  </Suspense>
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
                  <Suspense fallback={<Load />}>
                    <About />
                  </Suspense>
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
                  <Suspense fallback={<Load />}>
                    <Resume />
                  </Suspense>
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
                  <Suspense fallback={<Load />}>
                    <Projects />
                  </Suspense>
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
                  <Suspense fallback={<Load />}>
                    <Contact />
                  </Suspense>
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
