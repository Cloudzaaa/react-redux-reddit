import React, {Component} from 'react';

class ErrorBoundary extends Component {
  state = {hasError: false};

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children;
  }
}

export default ErrorBoundary;