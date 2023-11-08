"use client";
import React from "react";

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ onError?: () => void; fallback?: React.ReactNode }>,
  { hasError: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.props?.onError?.();
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <>{null}</>;
    }

    return this.props.children;
  }
}
