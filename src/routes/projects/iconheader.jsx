import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

const style = {
  container: {
    width: '100%',
    height: '50px',
    display: 'flex',
    flexDirection: 'row',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    boxShadow: '3px 3px 3px black',
    position: 'relative',
    top: 25,
    left: 25,
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
  },
  contentContainer: {
    padding: 50,
  },
};

class IconHeader extends Component {
  render() {
    return (
      <span>
        <div
          style={Object.assign({}, style.container,
            { backgroundColor: this.props.muiTheme.palette.primary1Color })}
        >
          <span
            className="material-icons"
            style={Object.assign({}, style.iconContainer,
              {
                backgroundColor: this.props.muiTheme.palette.accent1Color,
                color: this.props.muiTheme.palette.textColor,
              })}
          >{this.props.iconName}</span>
          <h1
            style={Object.assign({}, style.headerText,
              { color: this.props.muiTheme.palette.textColor })}
          >{this.props.title}</h1>
        </div>
        <div style={style.contentContainer}>
          {this.props.children}
        </div>
      </span>
    );
  }
}
IconHeader.propTypes = {
  iconName: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  muiTheme: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
};


export default muiThemeable()(IconHeader);
