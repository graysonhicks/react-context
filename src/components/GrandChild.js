import React, { Component } from "react";
import MyContext from "./../context/myContext";

class GrandChild extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <h3>
                I am the GrandChild component. I am able to receive and update
                the state of the GrandParent component without using props.
              </h3>
              <p>
                The state of the GrandParent is: <br />
                <br />
                {`{`}
                <br />
                {`name: ${context.state.name},`}
                <br />
                {`age: ${context.state.age},`}
                <br />
                {`cool: ${context.state.cool}`}
                <br />
                {`}`}
                <br />
              </p>
              <button onClick={context.growOlder}>
                When you click me, I update state on GrandParent
              </button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default GrandChild;
