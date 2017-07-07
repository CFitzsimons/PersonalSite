import React, { Component } from 'react';
// import IconHeader from './iconheader';
// import GridIcon from './gridicon';
// import {GridList, GridTile} from 'material-ui/GridList';

const style = {
  gridList: {
    height: 450,
    overflowY: 'auto',
  },
  item: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: 'blue',
    borderRadius: 150,
    margin: 15,
  },
};


export default class Projects extends Component {
  componentDidMount() {
    // Networking stuff
  }
  render() {
    return (
      <h1>Projects...</h1>
    );
  }
}
