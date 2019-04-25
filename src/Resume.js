import React from "react";
import { Segment } from "semantic-ui-react";
import { Document, Page } from "react-pdf";
import resume from "./images/resume.pdf";

export default class Resume extends React.Component {
  state = { numPages: null, pageNumber: 1 };
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };
  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <Segment id="resume">
        <Document file={resume} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={600} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </Segment>
    );
  }
}
