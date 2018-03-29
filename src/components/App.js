import React, { Component } from "react";

import GrandParent from "./GrandParent";
import Child from "./Child";
import GrandChild from "./GrandChild";

// Wrap top level app component in a provider component (that returns a context object)
// To use the data, use a consumer component with a render prop child as a function
// actions can also be passed down

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* The GrandParent Component is the Context Provider */}
        <GrandParent>
          {/* GrandChild is a Context Consumers, Child is NOT.  This still works, Context can be accessed in any descendant, skipping generations without needing to be passed down in props. */}
          <Child>
            <GrandChild />
          </Child>
        </GrandParent>
      </React.Fragment>
    );
  }
}

export default App;
