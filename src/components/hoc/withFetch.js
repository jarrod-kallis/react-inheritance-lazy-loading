// import React from 'react';

const withFetch = WrappedComponent => {
  return class extends WrappedComponent {
    async componentDidMount() {
      console.log(this.state);

      // await new Promise(resolve => setTimeout(resolve, 1000));

      const response = await fetch(this.state.url);
      if (response.ok) {
        this.setState({
          data: await response.json()
        });
      } else {
        this.setState({
          error: true,
          errorMsg: `Something went wrong with: ${this.state.url}`
        });
      }
    }

    render() {
      return super.render();
    }
  };
};

export default withFetch;
