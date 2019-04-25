import React from "react";
import { Segment } from "semantic-ui-react";
import resume from "./images/resume.pdf";

const Resume = () => {
  return (
    <Segment id="resume">
      <iframe src={resume} width="100%" height="500px" />
    </Segment>
  );
};

export default Resume;
