import React, { Component, Fragment, Suspense } from 'react';

import './App.css';

const Parent = React.lazy(() => import('./components/Parent'));
const Child = React.lazy(() => import('./components/Child'));
const Grandchild = React.lazy(() => import('./components/Grandchild'));
const StarsWarsFilm = React.lazy(() => import('./components/StarsWarsFilm'));
const StarWarsPerson = React.lazy(() => import('./components/StarWarsPerson'));

class App extends Component {
  state = {
    showStarWarsPeople: false,
    showStarWarsFilms: false
  };

  componentWillMount(a, b, c) {
    console.log('componentDidMount: ', a, b, c);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('props', props);
    console.log('state', state);
    return null;
  }

  render() {
    const starWarsPeople = this.state.showStarWarsPeople
      ? [...Array(5)].map((whatever, idx) => {
          return (
            <Fragment key={idx}>
              <StarWarsPerson personId={idx + 1} />
              <hr />
            </Fragment>
          );
        })
      : null;

    const starWarsFilms = this.state.showStarWarsFilms
      ? [...Array(7)].map((whatever, idx) => {
          return (
            <Fragment key={idx}>
              <StarsWarsFilm filmId={idx + 1} />
              <hr />
            </Fragment>
          );
        })
      : null;

    return (
      <div className="App">
        <Suspense fallback={<div>Loading parent...</div>}>
          <Parent />
        </Suspense>
        <hr />
        <Suspense fallback={<div>Loading child...</div>}>
          <Child name="Tessa" />
        </Suspense>
        <hr />
        <Suspense fallback={<div>Loading grandchild...</div>}>
          <Grandchild name="Ben" />
        </Suspense>
        <hr />
        <div style={{ color: 'cadetblue' }}>
          Throttle network in DevTools to see how this works:
        </div>

        <button onClick={() => this.setState({ showStarWarsPeople: true })}>
          Show Star Wars People
        </button>
        {this.state.showStarWarsPeople && (
          <Suspense fallback={<div>Loading people...</div>}>
            {starWarsPeople}
          </Suspense>
        )}
        <button onClick={() => this.setState({ showStarWarsFilms: true })}>
          Show Star Wars Films
        </button>
        {this.state.showStarWarsFilms && (
          <Suspense fallback={<div>Loading films...</div>}>
            {starWarsFilms}
          </Suspense>
        )}
      </div>
    );
  }
}

export default App;
