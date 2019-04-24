import React from "react";
import Typist from "react-typist";

class Home extends React.Component {
  render() {
    return (
      <div id="home-container">
        <Typist cursor={{ show: false }}>
          <p>I'm a full stack developer.</p>
          <Typist.Delay ms={500} />
          <br />
          <p>I build websites.</p>
          <Typist.Delay ms={500} />
          <br />
          <p>Take a look at my work. </p>
        </Typist>
      </div>
    );
  }
}

export default Home;
