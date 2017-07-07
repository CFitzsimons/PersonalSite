import React from 'react';
import BibtexParser from 'bib2json';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Button from 'material-ui/Button';
import List from 'material-ui/List';

import Constants from '../../constants.json';

// Recieve from /Publications endpoint:
// {
//   $unique_key: "bibtex_string"
// }

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
      <List>
        {this.state.data.map(pub => (
          <Card>
            <CardHeader
              title={`${pub.Fields.year} // ${pub.Fields.title}`}
              subtitle={pub.Fields.author}
              actAsExpander
              showExpandableButton
            />
            <CardActions>
              <Button label="PDF" onTouchTap={() => window.open(pub.Fields.url, '_blank')} />
            </CardActions>
            <CardText expandable>
              <p>{pub.Fields.abstract}</p>
            </CardText>
          </Card>
        ))}
      </List>
    );
  }
}
