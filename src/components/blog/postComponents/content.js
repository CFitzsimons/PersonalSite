'use strict';

import React from 'react';
import {CardText} from 'material-ui/Card';

class Content extends React.Component {
  constructor(props){
    super(props);
    //TODO: Verify that the correct props were given.
  }
  render() {
    return (
      <CardText>{this.props.content}</CardText>
    );
  }
}

Content.displayName = 'ContentComponent';

export default Content;
