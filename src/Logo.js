import React from "react";
import { Header } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class Logo extends React.Component {
  render() {
    return (
      <Header id="logo" as={Link} to="/home">
        Elizabeth Le
      </Header>
    );
  }
}

export default withRouter(Logo);
