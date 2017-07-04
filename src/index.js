import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from './routes/index';

require('./index.css');

// This is required to get touch tap working.
injectTapEventPlugin();

const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Routes />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Main />,
  document.getElementById('root'),
);
