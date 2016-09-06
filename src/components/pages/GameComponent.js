'use strict';

import React from 'react';

require('styles/pages/Game.css');
var Iframe = require('react-iframe');



class GameComponent extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <Iframe url={"http://games.yulfy.com/" + this.props.routeParams.gameTitle}></Iframe>
    );
  }
}

GameComponent.displayName = 'PagesGameComponent';

// Uncomment properties you need
// GameComponent.propTypes = {};
// GameComponent.defaultProps = {};

export default GameComponent;
