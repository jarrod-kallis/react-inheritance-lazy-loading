import React from 'react';

import Child from './Child';

class Grandchild extends Child {
  render() {
    const childElement = super.render();
    return (
      <div>
        {childElement}
        <div>I am the name prop in grandchild: {this.props.name}</div>
      </div>
    );
  }
}

export default Grandchild;
