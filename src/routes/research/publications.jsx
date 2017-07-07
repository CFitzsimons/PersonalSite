import React from 'react';
import BibtexParser from 'bib2json';
import Button from 'material-ui/Button';
import Loader from '../../components/Loader';
import InformationContainer from '../../components/InformationContainer';

import Constants from '../../constants.json';


export default class Publications extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      data: [],
    };
  }
  componentDidMount() {
    return fetch(`${Constants.DB_BASE}/Publications.json`)
      .then(response => response.json())
      .then((response) => {
        this.setState({
          isLoaded: true,
          data: BibtexParser(response).entries,
        });
      });
  }
  render() {
    return (
      <Loader isLoaded={this.state.isLoaded}>
        {this.state.data.map(pub =>
          <InformationContainer
            key={pub.Fields.title}
            title={pub.Fields.title}
            subtitle={pub.Fields.author}
            button={<Button color="inherit" onTouchTap={() => window.open(pub.Fields.url, '_blank')}>PDF</Button>}
            paragraphs={[pub.Fields.abstract]}
          />,
        )}
      </Loader>
    );
  }
}
