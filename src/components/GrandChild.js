import React, { Component } from "react";
import MyContext from "./../context/myContext";

import Status from './Status';

import { Heading, Card } from "evergreen-ui";

class GrandChild extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <React.Fragment>
            <Card
              elevation={3}
              backgroundColor="white"
              width="50%"
              height={120}
              marginBottom="2rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Heading size={700}>
                I am the GrandChild component. I am able to receive and update
                the state of the GrandParent component without using props.
              </Heading>
            </Card>
            <Status />
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default GrandChild;
