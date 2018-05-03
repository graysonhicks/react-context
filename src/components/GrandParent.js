import React, { Component } from 'react';

import Emoji from 'react-emoji-render';
import { Heading, SubHeading, Code, Button, colors } from 'evergreen-ui';

import MyContext from './../context/myContext';

import MainCard from './MainCard';
import StatusCardRow from './StatusCardRow';
import Parent from './Parent';
import Value from './Value';

//create provider component
class GrandParent extends Component {
  state = {
    age: 80
  };
  growGrandParentOlder = () => {
    this.setState({
      age: this.state.age + 1
    });
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          age: this.state.age,
          growGrandParentOlder: this.growGrandParentOlder
        }}
      >
        <MainCard width="100%" backgroundColor={colors.blue['10']}>
          <Heading size={500}>
            <Emoji text="👴🏻" style={{ fontSize: '5rem' }} />I am the{' '}
            <code>GrandParent</code> component. I am the context{' '}
            <code>Provider</code> and store my <code>age</code> state and the{' '}
            <code>growGrandParentOlder</code> function there. The{' '}
            <code>Parent</code> component is nested in me. I do not pass any{' '}
            <code>props</code> to the <code>Parent</code> component.
          </Heading>
          <StatusCardRow>
            <MainCard width="100%">
              <SubHeading size={500}>
                My <code>state</code> is:
              </SubHeading>
              <Code size={400}>
                <br />
                {`{`}
                <br />
                <Value value={this.state.age}>{`age: ${this.state.age}`}</Value>
                <br />
                {`}`}
                <br />
              </Code>
              <Button
                appearance="blue"
                onClick={this.growGrandParentOlder}
                marginTop="2rem"
              >
                Update my own state with my growGrandParentOlder function
              </Button>
            </MainCard>
          </StatusCardRow>
        </MainCard>
        {/* Render Parent component.  Note lack of props or context it receives. */}
        <Parent />
      </MyContext.Provider>
    );
  }
}

export default GrandParent;
