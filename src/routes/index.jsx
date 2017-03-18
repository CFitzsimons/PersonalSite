import { Router, Route, browserHistory } from 'react-router';
import React from 'react';

import Dashboard from './dashboard/index';
import Projects from './projects/index';
import Research from './research/index';
import Blog from './blog/index';

export default () => (
  <Router history={browserHistory} >
    <Route path="/" component={Projects} />
    <Route path="projects" component={Projects} />
    <Route path="blog" component={Blog} />
    <Route path="research" component={Research} />
  </Router>
);
