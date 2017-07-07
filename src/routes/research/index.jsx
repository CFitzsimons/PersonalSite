import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import Current from './current';
import Publications from './publications';
import Reading from './reading';
const style = {
  paper: {

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
  constructor() {
    super();
    this.state = {
      index: 0,
    };
    this.renderTabComponent = this.renderTabComponent.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    // Networking stuff
  }
  handleChange(event, index) {
    this.setState({ index });
  }
  renderTabComponent() {
    const TabComp = tabs[this.state.index].component;
    return <TabComp />;
  }
  render() {
    return (
      <span>
        <Tabs
          centered
          color="default"
          fullWidth
          index={this.state.index}
          onChange={this.handleChange}
        >
          {
            tabs.map(tab => (
              <Tab key={tab.label} label={tab.label} />
            ))
          }
        </Tabs>
        <Paper style={style.paper}>
          {this.renderTabComponent()}
        </Paper>

      </span>
    );
  }
}
