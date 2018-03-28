import React, { Component } from "react";
import Child from "./Child";
import GrandParent from "./GrandParent";

// Wrap top level app component in a provider component (that returns a context object)
// To use the data, use a consumer component with a render prop child as a function
// actions can also be passed down

class App extends Component {
  render() {
    return (
      <GrandParent>
        <Child/>
      </GrandParent>
    );
  }
}

export default App;
