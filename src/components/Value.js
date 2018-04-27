import React, { Component } from 'react';

class Value extends Component {
  constructor() {
    super();

    this.state = {
      updating: false,
      value: null
    };
  }

  componentDidMount() {
    this.setState({
      updating: false
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.updating) {
      this.highlight = window.setTimeout(
        () => this.setState({ updating: false }),
        500
      );
    }
  }

  componentWillUnmount() {
    clearTimeout(this.highlight);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return {
        updating: true,
        value: nextProps.value
      };
    } else {
      return null;
    }
  }

  render() {
    return (
      <span className={this.state.updating ? 'updating-value' : ''}>
        {this.props.children}
      </span>
    );
  }
}

export default Value;
