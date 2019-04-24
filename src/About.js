import React from "react";
import { Divider, Grid, Header, Image, Segment } from "semantic-ui-react";

const About = () => {
  return (
    <Segment id="about">
      <Grid
        columns={2}
        verticalAlign="middle"
        textAlign="center"
        padded
        fluid="true"
      >
        <Grid.Column width={6}>
          <Image src="https://i.imgur.com/4Y3dLBk.png" fluid />
        </Grid.Column>
        <Grid.Column width={10} style={{ lineHeight: "1.6rem" }}>
          <Divider horizontal>
            <Header className="about-header">Background</Header>
          </Divider>
          <p>
            Born and raised in Orange County, California, I always had a passion
            for the arts since childhood. In college, I channeled my creative
            spirit into a more practical application: fashion design.
            <br /> As much as I adored fashion, I found a passion and love for
            programming. The process in software engineering is extremely
            similar to garment creation in fashion!
          </p>
          <Divider horizontal>
            <Header className="about-header">Skills</Header>
          </Divider>
          <p>
            React, Redux, JavaScript, Ruby on Rails, Semantic Ui, Bootstrap{" "}
            <br />
            CSS, HTML, Illustrator, Photoshop, PostgreSQL, AWS S3
          </p>
          <Divider horizontal>
            <Header className="about-header">Education</Header>
          </Divider>
          <ul>
            <li>
              <ul>
                <h5 className="school">Flatiron School </h5>
                January - April 2019
                <li>Brooklyn, NY</li>
                <li>Immersive 15 weeks program full-stack development</li>
              </ul>
            </li>
            <br />
            <li>
              <ul>
                <h5 className="school">
                  California State University Long Beach
                </h5>
                2015-2018
                <li>Long Beach, CA</li>
                <li>B.A. in Fashion Design</li>
              </ul>
            </li>
          </ul>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};
export default About;
