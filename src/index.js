import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';


import {IndexRoute, Router, Route} from 'react-router';
import ResearchComponent from 'components/pages/ResearchComponent';
import DashboardComponent from 'components/pages/DashboardComponent';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main component into the dom
ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={DashboardComponent}/>
      <Route path="/research" component={ResearchComponent} />
    </Route>
  </Router>
, document.getElementById('app'));
