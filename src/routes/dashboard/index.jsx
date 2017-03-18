import React, { Component } from 'react';

import ProfilePhoto from './colin.jpg';

const style = {
  container: {
    height: 400,
    marginTop: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    borderRadius: 25,
    maxWidth: '50%',
    width: '100%',
    height: 'auto',
  },
};

export default class Dashboard extends Component {
  componentDidMount() {
    // Networking stuff

  }
  render() {
    return (
      <div style={style.container}>
        <img style={style.image} alt="Colin Fitzsimons" src={ProfilePhoto} />
        <p>Colin Fitzsmions</p>
      </div>
    );
  }
}
