import React, { Component } from 'react';

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  render() {
    return (
      this.state.hasError ?
      <h1>ErrorBoundary Has occured</h1> : this.props.children
    );
  }
}

export default ErrorBoundary;
