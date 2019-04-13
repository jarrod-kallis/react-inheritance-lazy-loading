import React, { Fragment } from 'react';
import withFetch from './hoc/withFetch';

class StarWarsPerson extends React.Component {
  state = {
    url: 'https://swapi.co/api/people/' + this.props.personId,
    data: {}
  };

  render() {
    return (
      <Fragment>
        {this.state.error ? (
          <div>{this.state.errorMsg}</div>
        ) : (
          <div style={{ display: 'Flex', flexDirection: 'column' }}>
            <span>Name: {this.state.data.name}</span>
            <span>Height: {this.state.data.height}</span>
          </div>
        )}
      </Fragment>
    );
  }
}

export default withFetch(StarWarsPerson);
