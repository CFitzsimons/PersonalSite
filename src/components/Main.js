'use strict';
/*
* Main.js controls all routing for the main site pages
*/

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import {Link} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';



class AppComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      isOpen: false
    };
  }

  toggleDrawer(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Colin Fitzsimons"
            onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
          />
          <Drawer docked={false} open={this.state.isOpen}>
            <AppBar
              showMenuIconButton={false}
              title="Navigation"
              iconElementRight={<FontIcon onTouchTap={this.toggleDrawer.bind(this)} className="material-icons" style={{lineHeight:'64px', cursor:'pointer', color:'white'}}>close</FontIcon>}
              iconStyleRight={{margin: '0'}}
            />
            <Link to="/" style={{textDecoration: 'none'}}><MenuItem onTouchTap={this.toggleDrawer.bind(this)}>Home</MenuItem></Link>
            <Link to="/projects" style={{textDecoration: 'none'}}><MenuItem onTouchTap={this.toggleDrawer.bind(this)}>Projects</MenuItem></Link>
            <Link to="/" style={{textDecoration: 'none'}}><MenuItem onTouchTap={this.toggleDrawer.bind(this)}>Research</MenuItem></Link>
            <Link to="/" style={{textDecoration: 'none'}}><MenuItem onTouchTap={this.toggleDrawer.bind(this)}>Blog</MenuItem></Link>
            <Link to="/" style={{textDecoration: 'none'}}><MenuItem onTouchTap={this.toggleDrawer.bind(this)}>Playground</MenuItem></Link>
          </Drawer>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}



export default AppComponent;
