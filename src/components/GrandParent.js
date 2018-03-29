import React, { Component } from "react";
import MyContext from "./../context/myContext";

import { Heading, Card } from "evergreen-ui";

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
        <Card
          elevation={3}
          backgroundColor="white"
          width="80%"
          height={120}
          marginBottom="2rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Heading size={900}>
            I am the GrandParent component. I am the context provider and store
            the state. I render the Child component.
          </Heading>
        </Card>

        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default GrandParent;
