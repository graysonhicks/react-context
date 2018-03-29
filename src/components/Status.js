import React, { Component } from "react";
import MyContext from "./../context/myContext";

import { SubHeading, Code, Card, Button } from "evergreen-ui";

class Status extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Card
            elevation={3}
            padding="2rem"
            backgroundColor="white"
            width="50%"
            height="auto"
            marginBottom="2rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <SubHeading size={500}>The state of the GrandParent is:</SubHeading>
            <Code size={500}>
              <br />
              {`{`}
              <br />
              {`name: ${context.state.name},`}
              <br />
              {`age: ${context.state.age},`}
              <br />
              {`cool: ${context.state.cool}`}
              <br />
              {`}`}
              <br />
            </Code>
            <Button appearance="blue" onClick={context.growOlder} marginTop="2rem">
              When you click me, I update state on GrandParent
            </Button>
          </Card>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Status;
