import React from 'react';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import PropTypes from 'prop-types';

const style = {
  bodyContainer: {
    padding: 10,
  },
};

const InformationContainer = props => (
  <span>
    <AppBar position="static">
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
    {props.paragraphs.map(text => (
      <Typography key={text.substring(0, 10)} style={style.bodyContainer}>
        {text}
      </Typography>
    ))}
  </span>
);

InformationContainer.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  button: PropTypes.node,
};

InformationContainer.defaultProps = {
  button: null,
  subtitle: null,
};

export default InformationContainer;
