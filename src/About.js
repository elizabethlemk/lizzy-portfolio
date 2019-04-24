import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import { Document } from "react-pdf";

const About = () => {
  return (
    <Segment>
      <Image
        src="https://i.imgur.com/1Azj09V.png"
        style={{ width: "350px", float: "left" }}
      />
      <Header>Education</Header>
      <Header>Background</Header>
      <Header>Skills</Header>
    </Segment>
  );
};
export default About;
