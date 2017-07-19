import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createMuiTheme, createPalette } from 'material-ui/styles';

import Routes from './routes/index';

const theme = createMuiTheme({
  palette: createPalette({
    primary: {
      900: '#006858',
      800: '#00796B',
      700: '#008375',
      600: '#008E80',
      500: '#009688',
      400: '#26A69A',
      300: '#4DB6AC',
      200: '#80CBC4',
      100: '#B3E0DB',
      50: '#E0F2F1',
      A100: '#97FFEC',
      A200: '#64FFE3',
      A400: '#31FFDA',
      A700: '#18FFD5',
      contrastDefaultColor: 'light',
    },
    accent: {
      50: '#E0F7FA',
      100: '#B3EBF2',
      200: '#80DEEA',
      300: '#4DD0E1',
      400: '#26C6DA',
      500: '#00BCD4',
      600: '#00B6CF',
      700: '#00ADC9',
      800: '#00A5C3',
      900: '#0097B9',
      A100: '#E2F9FF',
      A200: '#AFEEFF',
      A400: '#7CE3FF',
      A700: '#63DDFF',
      contrastDefaultColor: 'light',
    },
    text: {
      primary: 'rgba(33, 33, 33, 0.87)',
      secondary: 'rgba(117, 117, 117, 0.54)',
      disabled: 'rgba(117, 117, 117, 0.38)',
      hint: 'rgba(117, 117, 117, 0.38)',
      icon: 'rgba(117, 117, 117, 0.38)',
      divider: 'rgba(117, 117, 117, 0.12)',
      lightDivider: 'rgba(117, 117, 117, 0.075)',
    },
  }),
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    display4: {
      fontSize: 112,
      fontWeight: 300,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      letterSpacing: '-.04em',
      lineHeight: 1,
      color: 'rgba(33, 33, 33, 0.54)',
    },
    display3: {
      fontSize: 56,
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      letterSpacing: '-.02em',
      lineHeight: 1.35,
      color: 'rgba(33, 33, 33, 0.54)',
    },
    display2: {
      fontSize: 45,
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '48px',
      color: 'rgba(33, 33, 33, 0.54)',
    },
    display1: {
      fontSize: 34,
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '40px',
      color: 'rgba(33, 33, 33, 0.54)',
    },
    headline: {
      fontSize: 24,
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '32px',
      color: 'rgba(33, 33, 33, 0.87)',
    },
    title: {
      fontSize: 21,
      fontWeight: 500,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: 1,
      color: 'rgba(33, 33, 33, 0.87)',
    },
    subheading: {
      fontSize: 16,
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '24px',
      color: 'rgba(33, 33, 33, 0.87)',
    },
    body2: {
      fontSize: 14,
      fontWeight: 500,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '24px',
      color: 'rgba(33, 33, 33, 0.87)',
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '20px',
      color: 'rgba(33, 33, 33, 0.87)',
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: 1,
      color: 'rgba(33, 33, 33, 0.54)',
    },
    button: {
      fontSize: 14,
      textTransform: 'uppercase',
      fontWeight: 500,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
});

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
