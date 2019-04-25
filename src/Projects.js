import React from "react";
import {
  Button,
  Embed,
  Grid,
  Icon,
  Image,
  Modal,
  Segment
} from "semantic-ui-react";

export default class Projects extends React.Component {
  render() {
    return (
      <Grid style={{ zIndex: "2" }} columns={3} centered>
        <Grid.Column>
          <Segment textAlign="center">
            Project Book
            <Modal trigger={<Image src="https://tinyurl.com/y6oaoylr" />}>
              <Modal.Header>Project Book</Modal.Header>
              <Modal.Content>
                <Embed
                  id="dg2nIqLr84M"
                  placeholder="https://tinyurl.com/y6oaoylr"
                  source="youtube"
                />
                <Modal.Description>Stuff about the project</Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button primary>
                  Proceed <Icon name="right chevron" />
                </Button>
              </Modal.Actions>
            </Modal>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment textAlign="center">
            The Jelly Club
            <Modal trigger={<Image src="https://tinyurl.com/y5y4fpzd" />}>
              <Modal.Header>The Jelly Club</Modal.Header>
              <Modal.Content>
                <Embed
                  id="51LZnX51dgU"
                  placeholder="https://tinyurl.com/y5y4fpzd"
                  source="youtube"
                />
                <Modal.Description>Stuff about the project</Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button primary>
                  Proceed <Icon name="right chevron" />
                </Button>
              </Modal.Actions>
            </Modal>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            Flatiron Ware Game
            <Modal trigger={<Image src="https://tinyurl.com/y2v7bgvf" />}>
              <Modal.Header>Flatiron Ware Game</Modal.Header>
              <Modal.Content>
                <Embed
                  id="VQzxto20pow"
                  placeholder="https://tinyurl.com/y2v7bgvf"
                  source="youtube"
                />
                <Modal.Description>Stuff about the project</Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button primary>
                  Proceed <Icon name="right chevron" />
                </Button>
              </Modal.Actions>
            </Modal>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            The Flatiron Dating Sim
            <Modal trigger={<Image src="https://tinyurl.com/y2gqllm5" />}>
              <Modal.Header>The Flatiron Dating Sim</Modal.Header>
              <Modal.Content>
                <Embed
                  id="tpzmLxTMLSc"
                  placeholder="https://tinyurl.com/y2gqllm5"
                  source="youtube"
                />
                <Modal.Description>Stuff about the project</Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button primary>
                  Proceed <Icon name="right chevron" />
                </Button>
              </Modal.Actions>
            </Modal>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            InnerMost
            <Modal trigger={<Image src="https://tinyurl.com/yypeg3j3" />}>
              <Modal.Header>Inner most</Modal.Header>
              <Modal.Content>
                <Embed
                  id="O6Xo21L0ybE"
                  placeholder="https://tinyurl.com/yypeg3j3"
                  source="youtube"
                />
                <Modal.Description>Stuff about the project</Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button primary>
                  Proceed <Icon name="right chevron" />
                </Button>
              </Modal.Actions>
            </Modal>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
