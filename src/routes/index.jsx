import { Router, Route, browserHistory } from 'react-router';
import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui-icons/Close';
import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

import Navigation from './navigation';
import Dashboard from './dashboard/index';
import Projects from './projects/index';
import Research from './research/index';
import Blog from './blog/index';

import github from '../../graphics/github.png';
import linkedin from '../../graphics/linkedin.png';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Dashboard} />
    <Route path="projects" component={Projects} />
    <Route path="blog" component={Blog} />
    <Route path="research" component={Research} />
  </Router>
);
const style = {
  title: {
    flex: 1,
  },
};
export default class Main extends React.Component {
  static openURL(url) {
    window.open(url, '_blank');
  }
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
          position="static"
        >
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu" onTouchTap={this.toggleNavigation}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" style={style.title}>
              Colin Fitzsimons
            </Typography>
            <IconButton color="contrast" aria-label="Menu" onTouchTap={() => Main.openURL('https://github.com/cfitzsimons')}>
              <Avatar src={github} />
            </IconButton>
            <IconButton color="contrast" aria-label="Menu" onTouchTap={() => Main.openURL('https://www.linkedin.com/in/cfitzsimons/')}>
              <Avatar src={linkedin} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.isOpen}>
          <AppBar
            position="static"
          >
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu" onTouchTap={this.toggleNavigation}>
                <NavigationClose />
              </IconButton>
              <Typography type="title" color="inherit">
                Navigation
              </Typography>
            </Toolbar>
          </AppBar>
          <Navigation closeEvent={this.toggleNavigation} />
        </Drawer>
        <Routes />
      </span>
    );
  }
}
