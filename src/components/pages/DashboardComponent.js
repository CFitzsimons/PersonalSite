'use strict';

import React from 'react';
import {Link} from 'react-router';

require('styles/pages/Dashboard.css');

class DashboardComponent extends React.Component {
  render() {
    return (
      <div className="dashboard-component">
        <Link to="/research"><h1>Hello world</h1></Link>
      </div>
    );
  }
}

DashboardComponent.displayName = 'PagesDashboardComponent';

// Uncomment properties you need
// DashboardComponent.propTypes = {};
// DashboardComponent.defaultProps = {};

export default DashboardComponent;
