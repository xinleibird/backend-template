import React, { Component, lazy, Suspense } from 'react';

class ErrorBoundary extends Component<{}, { hasError: boolean }> {
  constructor(props: {} | Readonly<any>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {}

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <h1>Oops!!!</h1>;
    }
    return this.props.children;
  }
}

const AsyncLoader = (pageName: string) => {
  const Test = lazy(() => import(`../pages/${pageName}`));
  const wrapper = () => {
    return (
      <ErrorBoundary>
        <Suspense fallback={<p>Loading</p>}>
          {/* <Component /> */}
          <Test />
        </Suspense>
      </ErrorBoundary>
    );
  };
  return wrapper;
};

export default AsyncLoader;
