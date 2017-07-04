import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import Current from './current';
import Publications from './publications';
import Reading from './reading';

const style = {
  paper: {
    margin: 10,
    padding: 10,
  },
};

const tabs = [
  {
    label: 'My Research',
    component: Current,
  },
  {
    label: 'Publications',
    component: Publications,
  },
];

export default class Research extends Component {
  componentDidMount() {
    // Networking stuff
  }
  render() {
    return (
      <Tabs>
        {
          tabs.map(tab => (
            <Tab label={tab.label}>
              <Paper style={style.paper}>
                <tab.component />
              </Paper>
            </Tab>
          ))
        }
      </Tabs>
    );
  }
}
