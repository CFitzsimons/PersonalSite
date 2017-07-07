import React from 'react';
import Loader from '../../components/Loader';
import InformationContainer from '../../components/InformationContainer';
import Constants from '../../constants.json';

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
          data: Object.values(responseJson),
        });
      });
  }
  render() {
    return (
      <Loader isLoaded={this.state.isLoaded}>
        {this.state.data.map(data => <InformationContainer key={data.title} title={data.title} paragraphs={data.paragraphs} subtitle={`${data.fromDate} - ${data.toDate}`} />)}
      </Loader>
    );
  }
}
