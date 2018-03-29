import React, { Component } from "react";
// Import context
import MyContext from "../context/myContext";

// Import GrandChild
import GrandChild from "./GrandChild";
import MainCard from "./MainCard";

import { Heading } from "evergreen-ui";

class Child extends Component {
  render() {
    return (
      <React.Fragment>
        <MainCard width="65%">
          <Heading size={800}>
            I am the Child component. I was not passed any props from the grand
            parent. The Child component is nested in me as{" "}
            <code>this.props.children</code>.
          </Heading>
        </MainCard>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Child;
