import React from 'react';

import Parent from './Parent';

class Child extends Parent {
  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      childData: {}
    };
    console.log('Child constructor:', this.state);
  }

  componentDidMount() {
    super.componentDidMount();
    console.log('Child name prop: ' + this.props.name);
    console.log('Child componentDidMount');
    setTimeout(() => {
      this.setState({ childData: { name: 'Jarrod', age: 39 } });
    }, 2000);
  }

  render() {
    console.log('Child render');
    const parentElement = super.render();
    return (
      <div>
        {parentElement}
        <div>
          I am the child: {this.state.childData.name} (
          {this.state.childData.age})
        </div>
      </div>
    );
  }
}

export default Child;
