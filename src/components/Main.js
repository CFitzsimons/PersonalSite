'use strict';
/*
* Main.js controls all routing for the main site pages
*/

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import View from 'react';

import firebase from 'firebase';

import {Link} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import FontIcon from 'material-ui/FontIcon';
import Snackbar from 'material-ui/Snackbar';

class AppComponent extends React.Component {

  constructor(){
    super();
    this.state = {
      isOpen: false,
      height: window.innerHeight,
      width: window.innerWidth
    };
  }
  updateDimensions(){
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }
  componentWillMount(){
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  toggleDrawer(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleLoginModal(){
    this.setState({
      isModalOpened: !this.state.isModalOpened
    })
  }
  handleEmailChange(event){
    this.setState({
      email: event.target.value,
    });
  }
  handlePasswordChange(event){
    this.setState({
      password: event.target.value,
    });
  }
  handleSubmit(){
    this.setState({
      error:''
    });
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((result) => {
      this.setState({
        snackbarMessage: "Logged in as " + result.email,
        isSnackbarOpen: true,
        isLoggedIn: true,
        isModalOpened: false,
        isOpen: false
      });
    }).catch((error) => {
      this.setState({
        error:error.message
      });
    });
  }
  logout(){
    firebase.auth().signOut();
    this.setState({
      snackbarMessage: "Logged out",
      isSnackbarOpen: true
    });
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.toggleLoginModal.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit.bind(this)}
        />,
    ];
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Colin Fitzsimons"
            onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
          />
          <Snackbar
            open={this.state.isSnackbarOpen}
            message={this.state.snackbarMessage}
            autoHideDuration={4000}
            onRequestClose={(reason) => {reason === 'timeout' ? this.setState({isSnackbarOpen: false}) : ''}}
          />
          <Dialog
            title="Please login"
            actions={actions}
            open={this.state.isModalOpened}
            onRequestClose={this.toggleLoginModal.bind(this)}
            >
            <p style={{color:'red'}}>{this.state.error}</p>
            <TextField
              hintText="Email"
              floatingLabelText="Email"
              onChange={this.handleEmailChange.bind(this)}
              value={this.state.email}
              type="email"
            />
            <TextField
              hintText="Enter password"
              floatingLabelText="Password"
              onChange={this.handlePasswordChange.bind(this)}
              value={this.state.password}
              type="password"
            />

          </Dialog>
          <Drawer docked={false} open={this.state.isOpen}>
            <AppBar
              showMenuIconButton={false}
              title="Navigation"
              iconElementRight={<FontIcon onTouchTap={this.toggleDrawer.bind(this)} className="material-icons" style={{lineHeight:'64px', cursor:'pointer', color:'white'}}>close</FontIcon>}
              iconStyleRight={{margin: '0'}}
            />
            <Link to="/" style={{textDecoration: 'none', "-webkit-appearance": "none"}}><MenuItem onTouchTap={this.toggleDrawer.bind(this)}>Home</MenuItem></Link>
            <Link to="/projects" style={{textDecoration: 'none'}}><MenuItem onTouchTap={this.toggleDrawer.bind(this)}>Projects</MenuItem></Link>
            <Link to="/" style={{textDecoration: 'none'}}><MenuItem onTouchTap={this.toggleDrawer.bind(this)}>Research <small>(soon)</small></MenuItem></Link>
            <Link to="/blog" style={{textDecoration: 'none'}}><MenuItem onTouchTap={this.toggleDrawer.bind(this)}>Blog</MenuItem></Link>
            <Link to="/playground" style={{textDecoration: 'none'}}><MenuItem onTouchTap={this.toggleDrawer.bind(this)}>Game Jams and Hackathons</MenuItem></Link>

            <div style={this.state.height > 450 ? styles.stickMenuBottom : {}}>
              <Link to="/blog/create" style={{textDecoration: 'none', display: this.state.isLoggedIn ? '' : 'none'}}><MenuItem onTouchTap={this.toggleDrawer.bind(this)}>New Blog Post</MenuItem></Link>
              <MenuItem onTouchTap={this.state.isLoggedIn ? this.logout.bind(this) : this.toggleLoginModal.bind(this)}>{this.state.isLoggedIn ? 'Log out' : 'Login'}</MenuItem>
            </div>
          </Drawer>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

let styles = {
  stickMenuBottom:{
    position:'absolute',
    bottom: '0px',
    width: '100%'
  }
};


export default AppComponent;
