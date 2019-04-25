import React from "react";
import { Menu } from "semantic-ui-react";

const NavBar = ({ activeItem, handleItemClick }) => {
  return (
    <Menu widths={4} id="navbar" inverted>
      <Menu.Item
        name="about"
        onClick={handleItemClick}
        active={activeItem === "about"}
        content="About"
      />

      <Menu.Item
        name="projects"
        onClick={handleItemClick}
        active={activeItem === "projects"}
        content="Projects"
      />

      <Menu.Item
        name="resume"
        onClick={handleItemClick}
        active={activeItem === "resume"}
        content="Resume"
      />

      <Menu.Item
        name="contact"
        onClick={handleItemClick}
        active={activeItem === "contact"}
        content="Contact"
      />
    </Menu>
  );
};
export default NavBar;
