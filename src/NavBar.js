import React from "react";
import { Menu } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

const NavBar = ({ activeItem, handleItemClick }) => {
  return (
    <Menu widths={4} id="navbar" inverted>
      <Menu.Item
        name="about"
        as={Link}
        to="/about"
        active={activeItem === "about"}
        content="About"
        onClick={handleItemClick}
      />

      <Menu.Item
        name="projects"
        as={Link}
        to="/projects"
        active={activeItem === "projects"}
        content="Projects"
        onClick={handleItemClick}
      />

      <Menu.Item
        name="blog"
        as={Link}
        to="/blog"
        active={activeItem === "blog"}
        content="Blog"
        onClick={handleItemClick}
      />

      <Menu.Item
        name="contact"
        as={Link}
        to="/contact"
        active={activeItem === "contact"}
        content="Contact"
        onClick={handleItemClick}
      />
    </Menu>
  );
};
export default withRouter(NavBar);
