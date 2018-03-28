import React, { Component } from "react";
import MyContext from "./../context/myContext";
import Box from "./Box";

//create provider component
class GrandParent extends Component {
  state = {
    name: "Grayson",
    age: 29,
    cool: true,
    grandParentColor: "blue"
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growOlder: () =>
            this.setState({
              name: this.state.name + "n"
            })
        }}
      >
        <Box bgColor={this.state.grandParentColor} >
          <h2>
            I am the GrandParent component. I am the context provider and store
            the state. I render the Child component.
          </h2>
        </Box>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default GrandParent;
