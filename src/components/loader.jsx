import React from 'react';

const style = {
  loaderContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: props.isLoaded,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoaded !== this.props.isLoaded) {
      this.setState({
        isLoaded: nextProps.isLoaded,
      });
    }
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <span>
          {this.props.children}
        </span>
      );
    }
    return (
      <span style={style.loaderContainer}>
        <img alt="Loading..." src="loading.svg" />
      </span>
    );
  }

}
Loader.propTypes = {
  isLoaded: React.PropTypes.bool.isRequired,
};
