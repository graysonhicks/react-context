import React, { Component } from "react";
import MyContext from "./../context/myContext";

import MainCard from "./MainCard";

import { SubHeading, Code, Card, Button } from "evergreen-ui";

class Status extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <React.Fragment>
            <SubHeading size={500}>
              My <code>state</code> is:
            </SubHeading>
            <Code size={500}>
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
            </Code>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Status;
