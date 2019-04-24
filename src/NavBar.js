import React from "react";
import { Menu } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class NavBar extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu widths={4} id="navbar" inverted>
        <Menu.Item
          name="about"
          as={Link}
          to="/about"
          active={activeItem === "about"}
          content="About"
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name="projects"
          as={Link}
          to="/projects"
          active={activeItem === "projects"}
          content="Projects"
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name="blog"
          as={Link}
          to="/blog"
          active={activeItem === "blog"}
          content="Blog"
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name="contact"
          as={Link}
          to="/contact"
          active={activeItem === "contact"}
          content="Contact"
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
export default withRouter(NavBar);
