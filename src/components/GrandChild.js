import React, { Component } from 'react';
import Emoji from 'react-emoji-render';
import MyContext from './../context/myContext';

import MainCard from './MainCard';
import StatusCardRow from './StatusCardRow';
import Value from './Value';

import { Heading, SubHeading, Code, Button, colors } from 'evergreen-ui';

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
        <MainCard width="75%" backgroundColor={colors.blue['50']}>
          <Heading size={500}>
            <Emoji text="🧒🏼" style={{ fontSize: '6rem' }} /> I am the{' '}
            <code>GrandChild</code> component and the context{' '}
            <code>Consumer</code>. I am able to receive and update the{' '}
            <code>state</code> of the <code>GrandParent</code>
            component without having received it through <code>props</code>. I
            receive the <code>age</code> of the <code>Parent</code> through{' '}
            <code>props</code>.
          </Heading>
          <StatusCardRow>
            <MainCard width="100%">
              <SubHeading size={500}>
                My <code>state</code> age is:
              </SubHeading>
              <Code size={500}>
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
                onClick={this.growGrandChildOlder}
                marginTop="2rem"
              >
                I update my own state with my growGrandChildOlder function
              </Button>
            </MainCard>
            <MainCard width="100%">
              <SubHeading size={500}>
                My <code>props</code> age is:
              </SubHeading>
              <Code size={500}>
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
              <Button
                appearance="blue"
                onClick={this.props.growParentOlder}
                marginTop="2rem"
              >
                I update state on Parent through the growParentOlder function,
                which is passed in props
              </Button>
            </MainCard>
            <MainCard width="100%">
              <SubHeading size={500}>
                My <code>context</code> age is:
              </SubHeading>
              <MyContext.Consumer>
                {(context) => (
                  <React.Fragment>
                    <Code size={500}>
                      <br />
                      {`{`}
                      <br />
                      <Value value={context.age}>
                        {`age: ${context.age ? context.age : 'undefined'}`}
                      </Value>
                      <br />
                      {`}`}
                      <br />
                    </Code>
                    <Button
                      appearance="blue"
                      onClick={context.growGrandParentOlder}
                      marginTop="2rem"
                    >
                      I update state on GrandParent through the growOlder
                      function, which is passed in context
                    </Button>
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
