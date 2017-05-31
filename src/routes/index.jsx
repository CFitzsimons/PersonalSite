import { Router, Route, browserHistory } from 'react-router';
import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui-icons/Close';
import NavigationMenu from 'material-ui-icons/Menu';

import Navigation from './navigation';
import Dashboard from './dashboard/index';
import Projects from './projects/index';
import Research from './research/index';
import Blog from './blog/index';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Dashboard} />
    <Route path="projects" component={Projects} />
    <Route path="blog" component={Blog} />
    <Route path="research" component={Research} />
  </Router>
);

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }
  toggleNavigation() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <span>
        <AppBar
          title="Colin Fitzsimons"
          iconElementLeft={
            <IconButton onTouchTap={this.toggleNavigation}>
              <NavigationMenu />
            </IconButton>
          }
        />
        <Drawer open={this.state.isOpen} containerStyle={{ backgroundColor: 'rgb(46,49,54)' }}>
          <AppBar
            title={<span>Navigation</span>}
            iconElementLeft={
              <IconButton onTouchTap={this.toggleNavigation}>
                <NavigationClose />
              </IconButton>
            }
          />
          <Navigation />
        </Drawer>
        <Routes />
      </span>
    );
  }
}
