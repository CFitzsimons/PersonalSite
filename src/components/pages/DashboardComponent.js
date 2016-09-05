'use strict';

import React from 'react';
import {Link} from 'react-router';

require('styles/pages/Dashboard.css');

class DashboardComponent extends React.Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>
      <figure>
      <img style={{width:'50%', borderRadius:'25%'}} src="https://scontent-bru2-1.xx.fbcdn.net/t31.0-8/p960x960/14137969_1253384814701064_8283813614198027302_o.jpg"/>
          <figcaption>Software Engineer and PhD Student</figcaption>
      </figure>
      </div>
    );
  }
}

DashboardComponent.displayName = 'PagesDashboardComponent';

// Uncomment properties you need
// DashboardComponent.propTypes = {};
// DashboardComponent.defaultProps = {};

export default DashboardComponent;
