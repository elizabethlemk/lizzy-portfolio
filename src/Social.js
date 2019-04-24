import React from "react";
import { Container, Icon } from "semantic-ui-react";

const Social = () => {
  return (
    <Container id="social">
      <a href="https://www.linkedin.com/in/elizabethlemk/" target="_blank">
        <Icon size="big" name="linkedin" />{" "}
      </a>
      <a href="https://github.com/elizabethlemk" target="_blank">
        {" "}
        <Icon size="big" name="github" />
      </a>

      <a href="https://medium.com/@elizabethlemk" target="_blank">
        <Icon size="big" name="medium" />
      </a>
      <a href="https://twitter.com/elizabethlemk" target="_blank">
        <Icon size="big" name="twitter" />
      </a>
    </Container>
  );
};

export default Social;
