// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
      <h4>Name: { this.props.name }</h4>
      <p>Speed: { this.props.speed }</p>
      <p>{ this.props.hasRockets ? "Has rockets!" : "Doesn't have rockets"}</p>
      <p>Colors: { this.props.colors }</p>
      </div>
    )

  }
}

Spaceship.defaultProps = {speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
