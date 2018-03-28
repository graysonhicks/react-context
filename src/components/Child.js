import React, { Component } from "react";
// Import context
import MyContext from "../context/myContext";

// Import GrandChild
import GrandChild from "./GrandChild";

class Child extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>
          I am the Child component. I was not passed any props from the grand
          parent. I render the GrandChild component.
        </h2>
        <GrandChild />
      </React.Fragment>
    );
  }
}

export default Child;
