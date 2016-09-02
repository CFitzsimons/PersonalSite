'use strict';

import React from 'react';

require('styles/pages/Playground.css');

class PlaygroundComponent extends React.Component {
  render() {
    return (
      <div className="playground-component">
        Please edit src/components/pages//PlaygroundComponent.js to update this component!
      </div>
    );
  }
}

PlaygroundComponent.displayName = 'PagesPlaygroundComponent';

// Uncomment properties you need
// PlaygroundComponent.propTypes = {};
// PlaygroundComponent.defaultProps = {};

export default PlaygroundComponent;
