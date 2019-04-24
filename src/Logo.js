import React from "react";
import { Header } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

const Logo = ({ handleItemClick }) => {
  return (
    <Header
      id="logo"
      as={Link}
      to="/home"
      name="home"
      onClick={handleItemClick}
    >
      Elizabeth Le
    </Header>
  );
};

export default withRouter(Logo);
