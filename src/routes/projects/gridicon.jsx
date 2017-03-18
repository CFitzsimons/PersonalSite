import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { GridTile } from 'material-ui/GridList';
import { Textfit } from 'react-textfit';

const style = {
  item: {
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 5,
    width: 120,
    height: 120,
    borderRadius: 150,
    margin: 10,
    flex: 0.8,
  },
};
//Resizable gridview TODO
class GridIcon extends Component {
  render() {
    return (
      <GridTile
        style={{height: 250, width: 250, borderWidth: 3, borderColor:'white', borderStyle: 'solid'}}
      >
        <span style={style.item}>
          <Textfit
            mode="single"
            style={{ color: this.props.muiTheme.palette.textColor }}
          >{this.props.text}</Textfit>
        </span>
        <span style={{flex:0.2, marginLeft: 25, marginRight: 25}}>
          <p style={{color:'white'}}>{this.props.subtitle}</p>
        </span>
      </GridTile>
    );
  }
}
GridIcon.propTypes = {
  text: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string,
  muiTheme: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
};

GridIcon.defaultProps = {
  subtitle: '',
};


export default muiThemeable()(GridIcon);
