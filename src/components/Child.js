import React, { Component } from "react";
// Import context
import MyContext from "../context/myContext";

// Import GrandChild
import GrandChild from "./GrandChild";
import MainCard from "./MainCard";
import Status from "./Status";
import StatusCardRow from "./StatusCardRow";

import { Heading, colors } from "evergreen-ui";

class Child extends Component {
  render() {
    return (
      <React.Fragment>
        <MainCard width="85%" backgroundColor={colors.blue['20']}>
          <Heading size={700}>
            I am the Child component. I was not passed any props from the grand
            parent. The Child component is nested in me as{" "}
            <code>this.props.children</code>.
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

        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Child;
