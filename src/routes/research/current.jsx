import React from 'react';
import Loader from '../../components/loader';
import Constants from '../../constants.json';

// Fetch paragraphs from Text/Research/Current
// Should come in object:
// {
//   0: 'paragraph 2',
//   1: 'paragraph 2'
// }

export default class Current extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      data: [],
    };
  }
  componentDidMount() {
    return fetch(`${Constants.DB_BASE}/Text/Research/Current.json`)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          isLoaded: true,
          data: responseJson,
        });
      });
  }
  render() {
    return (
      <Loader isLoaded={this.state.isLoaded}>
        {this.state.data.map(paragraph => (<p key={paragraph.substring(0, 5)}>{paragraph}</p>))}
      </Loader>
    );
  }
}
