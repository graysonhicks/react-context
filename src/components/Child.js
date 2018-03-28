import React, { Component } from "react";
// Import context
import MyContext from "../context/myContext";

// Import GrandChild
import GrandChild from "./GrandChild";

// Import Styles
import Box from './Box';

class Child extends Component {
  render() {
    return (
      <React.Fragment>
        <Box>
          <h2>
            I am the Child component. I was not passed any props from the grand
            parent. I render the GrandChild component.
          </h2>
        </Box>
        <GrandChild />
      </React.Fragment>
    );
  }
}

export default Child;
