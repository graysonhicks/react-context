import React, { Component } from "react";
import MyContext from "./context/myContext";
import Child from "./components/Child";

// Wrap top level app component in a provider component (that returns a context object)
// To use the data, use a consumer component with a render prop child as a function
// actions can also be passed down

//create provider component
class GrandParent extends Component {
  state = {
    name: "Grayson",
    age: 29,
    cool: true
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
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <GrandParent>
        <h1>
          I am the GrandParent component. I am the context provider and store
          the state. I render the Child component.
        </h1>
        <Child />
      </GrandParent>
    );
  }
}

export default App;
