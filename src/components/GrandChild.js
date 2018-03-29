import React, { Component } from "react";
import MyContext from "./../context/myContext";

import Status from "./Status";
import MainCard from "./MainCard";

import { Heading, SubHeading, Code, Card } from "evergreen-ui";

class GrandChild extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <React.Fragment>
            <MainCard width="50%">
              <Heading size={700}>
                I am the GrandChild component. I am able to receive and update
                the state of the GrandParent component without using props.
              </Heading>
              <Card
                clearfix
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
                marginTop="2rem"
              >
                <MainCard width="100%" marginRight="2rem">
                  <SubHeading size={500}>
                    The state of the GrandParent is:
                  </SubHeading>
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
                </MainCard>
                <MainCard
                  elevation={3}
                  backgroundColor="white"
                  width="100%"
                  height="auto"
                  marginBottom="2rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  padding="2rem"
                >
                  <SubHeading size={500}>
                    The state of the GrandParent is:
                  </SubHeading>
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
                </MainCard>
              </Card>
            </MainCard>
            <Status />
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default GrandChild;
