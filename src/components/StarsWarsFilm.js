import React, { Fragment } from 'react';
import withFetch from './hoc/withFetch';

class StarWarsFilm extends React.Component {
  state = {
    url: 'https://swapi.co/api/films/' + this.props.filmId,
    data: {}
  };

  render() {
    return (
      <Fragment>
        {this.state.error ? (
          <div>{this.state.errorMsg}</div>
        ) : (
          <div style={{ display: 'Flex', flexDirection: 'column' }}>
            <span>Title: {this.state.data.title}</span>
            <span>Episode Id: {this.state.data.episode_id}</span>
          </div>
        )}
      </Fragment>
    );
  }
}

export default withFetch(StarWarsFilm);
