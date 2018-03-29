import React, { Component } from "react";

import MyContext from "./../context/myContext";

import MainCard from "./MainCard";
import Status from "./Status";
import StatusCardRow from "./StatusCardRow";

import { Heading, colors } from "evergreen-ui";


class GrandChild extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <React.Fragment>
            <MainCard width="75%" backgroundColor={colors.blue['50']}>
              <Heading size={600}>
                I am the GrandChild component. I am able to receive and update
                the state of the GrandParent component without using props.
              </Heading>
              <StatusCardRow>
                <MainCard width="100%">
                  <Status />
                </MainCard>
                <MainCard width="100%">
                  <Status />
                </MainCard>
                <MainCard width="100%">
                  <Status />
                </MainCard>
              </StatusCardRow>
            </MainCard>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default GrandChild;
