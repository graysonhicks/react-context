import React, { Component } from "react";
import MyContext from "./../context/myContext";

import MainCard from "./MainCard";
import Status from "./Status";
import StatusCardRow from "./StatusCardRow";

import { Heading, colors } from "evergreen-ui";

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
        <MainCard width="90%" backgroundColor={colors.blue['10']}>
          <Heading size={800}>
            I am the GrandParent component. I am the context provider and store
            the state. The Child and GrandChild component are nested in me as{" "}
            <code>this.props.children</code>.
          </Heading>
          <StatusCardRow>
            <MainCard width="100%">
              <Status />
            </MainCard>
            <MainCard width="100%">
              <Status />
            </MainCard>
            <MainCard width="100%">
              <Status />
            </MainCard>
          </StatusCardRow>
        </MainCard>

        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default GrandParent;
