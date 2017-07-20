import React from 'react';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import { withTheme } from 'material-ui/styles';

const style = {
  bodyContainer: {
    padding: 10,
  },
};

const InformationContainer = props => (
  <span>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          type="title"
          noWrap
          color="inherit"
          style={props.subtitle !== null ? {} : { flex: 1 }}
        >
          {props.title}
        </Typography>
        {
          props.subtitle !== null ? (
            <Typography
              noWrap
              style={{ flex: 1, paddingTop: 3, paddingLeft: 6, opacity: 0.8 }}
              type="subheading"
              color="inherit"
            >
              {props.subtitle}
            </Typography>
          ) : null
        }
        {
          props.button ? props.button : null
        }
      </Toolbar>
    </AppBar>
    <div style={{ backgroundColor: props.theme.palette.primary.A200, padding: 5 }}>
      {props.paragraphs.map(text => (
        <Typography key={text.substring(0, 10)} style={style.bodyContainer}>
          {text}
        </Typography>
      ))}
      {props.children}
    </div>
  </span>
);

InformationContainer.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  button: PropTypes.node,
  children: PropTypes.node,
  theme: PropTypes.node.isRequired,
};

InformationContainer.defaultProps = {
  button: null,
  subtitle: null,
  paragraphs: [],
  children: null,
};

export default withTheme(InformationContainer);
