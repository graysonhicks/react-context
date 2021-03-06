import React, { Component } from 'react';
import Emoji from 'react-emoji-render';

import { Heading, SubHeading, Code, colors } from 'evergreen-ui';
import MyContext from './../context/myContext';

import MainCard from './MainCard';
import StatusCardRow from './StatusCardRow';
import Value from './Value';

import MainButton from './Button';

class GrandChild extends Component {
  constructor() {
    super();
    this.state = {
      age: 3
    };
  }
  growGrandChildOlder = () => {
    this.setState({
      age: this.state.age + 1
    });
  };
  render() {
    return (
      <React.Fragment>
        <MainCard width="90%" backgroundColor={colors.blue['50']}>
          <Heading size={500}>
            <Emoji text="🧒🏼" style={{ fontSize: '5rem' }} /> I am the
            <code>GrandChild</code> component and the context
            <code>Consumer</code>. I am able to receive and update the
            <code>state</code> of the <code>GrandParent</code>
            component without having received it through <code>props</code>. I
            receive the <code>age</code> of the <code>Parent</code> through
            <code>props</code>.
          </Heading>
          <StatusCardRow>
            <MainCard width="100%">
              <SubHeading size={500}>
                My <code>state</code> age is:
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
              <MainButton onClick={this.growGrandChildOlder}>
                Update my own state with my growGrandChildOlder function
              </MainButton>
            </MainCard>
            <MainCard width="100%">
              <SubHeading size={500}>
                My <code>props</code> age is:
              </SubHeading>
              <Code size={400}>
                <br />
                {`{`}
                <br />
                <Value value={this.props.age}>
                  {`age: ${this.props.age ? this.props.age : 'undefined'}`}
                </Value>
                <br />
                {`}`}
                <br />
              </Code>
              <MainButton onClick={this.props.growParentOlder}>
                Update Parent state thru growParentOlder fn() w/ props
              </MainButton>
            </MainCard>
            <MainCard width="100%">
              <SubHeading size={500}>
                My <code>context</code> age is:
              </SubHeading>
              <MyContext.Consumer>
                {({ age, growGrandParentOlder }) => (
                  <React.Fragment>
                    <Code size={400}>
                      <br />
                      {`{`}
                      <br />
                      <Value value={age}>
                        {`age: ${age ? age : 'undefined'}`}
                      </Value>
                      <br />
                      {`}`}
                      <br />
                    </Code>
                    <MainButton onClick={growGrandParentOlder}>
                      Update GrandParent state thru growOlder function w/
                      context
                    </MainButton>
                  </React.Fragment>
                )}
              </MyContext.Consumer>
            </MainCard>
          </StatusCardRow>
        </MainCard>
      </React.Fragment>
    );
  }
}

export default GrandChild;
