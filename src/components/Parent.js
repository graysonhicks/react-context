import React, { Component } from 'react';

import Emoji from 'react-emoji-render';
import { Heading, SubHeading, Code, colors } from 'evergreen-ui';

import GrandChild from './GrandChild';
import MainCard from './MainCard';
import StatusCardRow from './StatusCardRow';
import Value from './Value';
import MainButton from './Button';

const context = null;

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      age: 40
    };
  }
  growParentOlder = () => {
    this.setState({
      age: this.state.age + 1
    });
  };
  render() {
    return (
      <React.Fragment>
        <MainCard width="95%" backgroundColor={colors.blue['20']}>
          <Heading size={500}>
            <Emoji text="👨🏻" style={{ fontSize: '5rem' }} /> I am the{' '}
            <code>Parent</code> component. I was not passed any props from the{' '}
            <code>GrandParent</code>. The <code>GrandChild</code> component is
            nested in me. I pass it my own <code>age</code> as props.
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
              <MainButton onClick={this.growParentOlder}>
                Update my own state with my growParentOlder function
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
                {`age: ${this.props.age ? this.props.age : 'undefined'}`}
                <br />
                {`}`}
                <br />
              </Code>
            </MainCard>
            <MainCard width="100%">
              <SubHeading size={500}>
                My <code>context</code> age is:
              </SubHeading>
              <Code size={400}>
                <br />
                {`{`}
                <br />
                {`age: ${context ? context.age : 'undefined'}`}
                <br />
                {`}`}
                <br />
              </Code>
            </MainCard>
          </StatusCardRow>
        </MainCard>
        <GrandChild
          age={this.state.age}
          growParentOlder={this.growParentOlder}
        />
      </React.Fragment>
    );
  }
}

export default Parent;
