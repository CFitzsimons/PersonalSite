import React from 'react';
import Typography from 'material-ui/Typography';

const style = {
  container: {
    display: 'flex',
    flex: 1,
  },
  halfContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2%',
  },
  image: {
    height: '100%',
    maxHeight: 500,
    boxShadow: '15px 15px 10px #555555',
    borderRadius: '25px',
  },
};

export default class ResponsiveContainer extends React.Component {
  constructor(props) {
    super(props);
    this.renderContentContainer = this.renderContentContainer.bind(this);
    this.renderImageContainer = this.renderImageContainer.bind(this);
    this.state = {
      isSmall: false,
    };
    
  }
  renderContentContainer() {
    return (
      <div style={style.halfContainer}>
        <Typography align="center" type="display3" paragraph>{this.props.heading}</Typography>
        <Typography align="center" type="display1" paragraph>{this.props.text}</Typography>
      </div>
    );
  }
  renderImageContainer() {
    return (
      <div style={style.halfContainer}>
        <img src={this.props.image} style={style.image} />
      </div>
    );
  }
  render() {
    return (
      this.props.flipped ? (
        <div style={style.container}>
          {this.renderContentContainer()}
          {this.state.isSmall ? null : this.renderImageContainer()}
        </div>
      ) : (
        <div style={style.container}>
          {this.state.isSmall ? null : this.renderImageContainer()}
          {this.renderContentContainer()}
        </div>
      )
    );
  }
}