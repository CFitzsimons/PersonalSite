import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from './routes/index';

require('./index.css');

// This is required to get touch tap working.
injectTapEventPlugin();

const Main = () => (
  <MuiThemeProvider>
    <Routes />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Main />,
  document.getElementById('root'),
);
