import React from 'react';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };

    console.log('Parent constructor:', this.state);
  }

  componentWillMount() {
    console.log('Parent componentWillMount');
  }

  componentDidUpdate() {
    console.log('Parent componentDidUpdate');
    console.log('Accessing state.childData from parent:', this.state.childData);
  }

  componentDidMount() {
    console.log('Parent componentDidMount');
    console.log('Parent name prop: ' + this.props.name);
    setTimeout(
      () => this.setState({ data: { name: 'Michael', age: 64 } }),
      1000
    );
  }

  render() {
    console.log('Parent render');
    return (
      <div>
        <div>I am the parent: {this.state.data.name}</div>
        {this.state.childData ? (
          <div>
            Accessing child data from within parent render:{' '}
            {this.state.childData.name}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Parent;
