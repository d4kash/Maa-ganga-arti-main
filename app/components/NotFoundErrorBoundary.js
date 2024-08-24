// components/NotFoundErrorBoundary.js
"use client";
import React from 'react';

class NotFoundErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by NotFoundErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Page Not Found</h1>;
    }

    return this.props.children; 
  }
}

export default NotFoundErrorBoundary;
