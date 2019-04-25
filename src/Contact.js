import React from "react";
import { Header, Segment } from "semantic-ui-react";
import ReactContactForm from "react-mail-form";

export default class Contact extends React.Component {
  render() {
    return (
      <Segment textAlign="center">
        <Header style={{ marginTop: "2rem" }} id="contact-header">
          To: elizabethlemk@gmail.com
        </Header>
        <ReactContactForm
          to="elizabethlemk@gmail.com"
          className="contact-form"
          titlePlaceholder="In regards to...."
          contentsPlaceholder="Hi Elizabeth, I wanted to reach out about...."
          buttonText="Submit"
        />
      </Segment>
    );
  }
}
