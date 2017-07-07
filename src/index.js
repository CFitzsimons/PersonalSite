import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createMuiTheme, createPalette } from 'material-ui/styles';

// const theme = createMuiTheme({
//   primary: {
//     500: 'orange',
//   },
// });

const theme = createMuiTheme({
  palette: createPalette({
    primary: {
      500: 'orange'
    }
  }),
});

import Routes from './routes/index';

require('./index.css');

// This is required to get touch tap working.
injectTapEventPlugin();

const Main = () => (
  <MuiThemeProvider theme={theme}>
    <Routes />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Main />,
  document.getElementById('root'),
);
