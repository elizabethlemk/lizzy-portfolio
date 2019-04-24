import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default class Contact extends React.Component {
  render() {
    return (
      <Segment>
        <Form>
          <Form.Input label="Your name" placeholder="First and last name" />
          <Form.Input label="Email" placeholder="example@email.com" />
          <Form.Input label="Title" placeholder="In regards to...." />
          <Form.TextArea
            label="Content"
            placeholder="Hi Elizabeth, I wanted to reach out about...."
          />
          <Button>Submit</Button>
        </Form>
      </Segment>
    );
  }
}
