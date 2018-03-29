import React, { Component } from "react";
// Import context
import MyContext from "../context/myContext";

// Import GrandChild
import GrandChild from "./GrandChild";

import { Heading, Card } from "evergreen-ui";

class Child extends Component {
  render() {
    return (
      <React.Fragment>
        <Card
          elevation={3}
          backgroundColor="white"
          width="65%"
          height={120}
          marginBottom="2rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Heading size={800}>
            I am the Child component. I was not passed any props from the grand
            parent. I render the GrandChild component.
          </Heading>
        </Card>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Child;
