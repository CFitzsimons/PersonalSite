import React, { Component } from 'react';

import ProfilePhoto from './colin.jpg';

const style = {
  container: {
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
    marginTop: 35,
    boxShadow: '10px 10px 20px black',
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
      </div>
    );
  }
}
