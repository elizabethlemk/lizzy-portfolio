import React from "react";
import { Embed, Grid, Image, Modal, Segment } from "semantic-ui-react";

export default class Projects extends React.Component {
  render() {
    return (
      <Grid
        style={{ zIndex: "2" }}
        stackable
        columns={3}
        centered
        id="project-container"
      >
        <Grid.Column>
          <Segment textAlign="center">
            Project Book
            <Modal
              closeIcon
              trigger={<Image src="https://tinyurl.com/y6oaoylr" />}
            >
              <Modal.Header>
                Project Book |{" "}
                <a
                  href="https://github.com/elizabethlemk/project-book-front"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Github
                </a>
              </Modal.Header>
              <Modal.Content>
                <Embed
                  id="dg2nIqLr84M"
                  placeholder="https://tinyurl.com/y6oaoylr"
                  source="youtube"
                />
              </Modal.Content>
            </Modal>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment textAlign="center">
            The Jelly Club
            <Modal
              closeIcon
              trigger={<Image src="https://tinyurl.com/y5y4fpzd" />}
            >
              <Modal.Header>
                The Jelly Club |{" "}
                <a
                  href="https://github.com/elizabethlemk/the-jelly-club"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Github
                </a>{" "}
                |{" "}
                <a
                  href="https://the-jelly-club.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Website
                </a>
              </Modal.Header>
              <Modal.Content>
                <Embed
                  id="51LZnX51dgU"
                  placeholder="https://tinyurl.com/y5y4fpzd"
                  source="youtube"
                />
              </Modal.Content>
            </Modal>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            Flatiron Ware Game
            <Modal
              closeIcon
              trigger={<Image src="https://tinyurl.com/y2v7bgvf" />}
            >
              <Modal.Header>
                Flatiron Ware Game |{" "}
                <a
                  href="https://github.com/elizabethlemk/flatiron-ware-game"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Github
                </a>{" "}
                |{" "}
                <a
                  href="hhttps://flatiron-ware-game.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Website
                </a>
              </Modal.Header>
              <Modal.Content>
                <Embed
                  id="VQzxto20pow"
                  placeholder="https://tinyurl.com/y2v7bgvf"
                  source="youtube"
                />
              </Modal.Content>
            </Modal>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            The Flatiron Dating Sim
            <Modal
              closeIcon
              trigger={<Image src="https://tinyurl.com/y2gqllm5" />}
            >
              <Modal.Header>
                The Flatiron Dating Sim |{" "}
                <a
                  href="https://github.com/elizabethlemk/Mod-1-Final-Flatiron-Dating-Sim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Github
                </a>
              </Modal.Header>
              <Modal.Content>
                <Embed
                  id="tpzmLxTMLSc"
                  placeholder="https://tinyurl.com/y2gqllm5"
                  source="youtube"
                />
              </Modal.Content>
            </Modal>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            InnerMost
            <Modal
              closeIcon
              trigger={<Image src="https://tinyurl.com/yypeg3j3" />}
            >
              <Modal.Header>
                Inner most |{" "}
                <a
                  href="https://github.com/csamelian27/Inner-Most"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Github
                </a>
              </Modal.Header>
              <Modal.Content>
                <Embed
                  id="O6Xo21L0ybE"
                  placeholder="https://tinyurl.com/yypeg3j3"
                  source="youtube"
                />
              </Modal.Content>
            </Modal>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
