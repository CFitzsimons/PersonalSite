import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';


import {IndexRoute, Router, Route} from 'react-router';

import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import firebase from 'firebase';

import ResearchComponent from 'components/pages/ResearchComponent';
import DashboardComponent from 'components/pages/DashboardComponent';
import ProjectsComponent from 'components/pages/ProjectsComponent';
import PlaygroundComponent from 'components/pages/PlaygroundComponent';
import GameComponent from 'components/pages/GameComponent';



import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

var config = {
  apiKey: "AIzaSyD7Y6OgKqzF0uac0MaqrqVBEKkJlYNerNA",
  authDomain: "personal-site-47449.firebaseapp.com",
  databaseURL: "https://personal-site-47449.firebaseio.com",
  storageBucket: "personal-site-47449.appspot.com",
};
firebase.initializeApp(config);


// Render the main component into the dom
ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={DashboardComponent}/>
      <Route path="/research" component={ResearchComponent} />
      <Route path="playground">
        <IndexRoute  component={PlaygroundComponent}/>
        <Route path=":gameTitle" component={GameComponent}/>
      </Route>
      <Route path="/projects" component={ProjectsComponent} />
    </Route>
  </Router>
, document.getElementById('app'));
