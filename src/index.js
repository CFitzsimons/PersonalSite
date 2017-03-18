import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';

import Routes from './routes/index';

// This is required to get touch tap working.
injectTapEventPlugin();


const Main = () => (
  <MuiThemeProvider  muiTheme={getMuiTheme(darkBaseTheme)}>
    <Paper zDepth={2}>
      <AppBar
        title="Colin Fitzsimons"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <Routes />
    </Paper>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Main />,
  document.getElementById('root'),
);
