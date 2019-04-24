import React from "react";
import { Container, Embed, Grid, Segment } from "semantic-ui-react";

export default class Projects extends React.Component {
  render() {
    return (
      <Grid style={{ zIndex: "2" }} columns={3} centered>
        <Grid.Column>
          <Segment textAlign="center">
            Project Book
            <Embed
              id="dg2nIqLr84M"
              placeholder="https://camo.githubusercontent.com/1ca7f8140712639a38c1e99f585fbc7207680237/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f78556f434d4d6371566557496841736e72392f67697068792e676966"
              source="youtube"
            />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            InnerMost
            <Embed
              id="O6Xo21L0ybE"
              placeholder="https://github.com/csamelian27/Inner-Most/raw/master/public/Screen%20Shot%202019-04-13%20at%208.09.45%20PM.png?raw=true"
              source="youtube"
            />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            Flatiron Ware Game
            <Embed
              id="VQzxto20pow"
              placeholder="https://camo.githubusercontent.com/82ec25aa0c7fbcfd3f3058760e28f9d309eb34b7/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f696961766e63634e54464c666a59646a386d2f67697068792e676966"
              source="youtube"
            />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            The Jelly Club
            <Embed
              id="51LZnX51dgU"
              placeholder="https://github.com/elizabethlemk/the-jelly-club/raw/master/app/assets/images/Screen%20Shot%202019-02-15%20at%2012.46.55%20PM.png"
              source="youtube"
            />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            The Flatiron Dating Sim
            <Embed
              id="tpzmLxTMLSc"
              placeholder="https://github.com/elizabethlemk/Mod-1-Final-Flatiron-Dating-Sim/raw/master/Screen%20Shot%202019-01-25%20at%209.39.06%20PM.png"
              source="youtube"
            />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
