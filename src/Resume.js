import React from "react";
import { Segment } from "semantic-ui-react";
import resume from "./images/resume.pdf";

const Resume = () => {
  return (
    <Segment id="resume">
      <iframe src={resume} title="resume" id="resume-iframe" />
    </Segment>
  );
};

export default Resume;
