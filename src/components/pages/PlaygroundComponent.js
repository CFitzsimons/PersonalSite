'use strict';

import React from 'react';
import firebase from 'firebase';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router';

require('styles/pages/Playground.css');

class PlaygroundComponent extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }
  componentDidMount(){
    firebase.database().ref('GameJam').on('value', (snapshot) => {
      let data = snapshot.val();
      let gameJams = [];
      for(var key in data){
        gameJams.push(data[key]);
      }
      this.setState({
        gameJams: gameJams
      });
    }, (error) => {
      console.log("Error", error);
    });

  }
  navigate(event){
    this.props.history.push('/games/' + event.gameName)
  }
  render() {
    var that = this;
    if(!this.state){
      return (
        <div style={{width:'100%', height:'100%', textAlign:'center'}}>
          <h1>Fetching...</h1>
          <img src="images/gear.svg"/>

        </div>
      );
    }
    var jamComp = this.state.gameJams.map(function(jam){
      console.log(jam);
      let events = [];
      for(var key in jam.Jams){
        events.push(jam.Jams[key]);
      }
      var listItemsComp = events.map(function(event){
        return (
          <ListItem
            primaryText={'[' + event.gameName + ']' + ' made for ' + event.friendlyName}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Description"
                secondaryText={event.description}
              />,
              <ListItem
                key={2}
                primaryText="Theme"
                secondaryText={event.theme}
              />,
              <ListItem
                key={3}
                primaryText="Completion Time"
                secondaryText={event.completionTime + " minutes"}
              />,
              <ListItem
                key={4}
                primaryText="Play Game"
                onTouchTap={() => {that.props.history.push('/playground/' + event.gameName)}}
              />,
            ]}
          />
        );
      });
      return (
        <Tabs>
          <Tab label={jam.name}>
          <List>
            <Subheader>Click an item to get more details</Subheader>
            {listItemsComp}
          </List>
          </Tab>
        </Tabs>
      );
    });
    return (
      <div>
      {jamComp}
      </div>
    );
  }
}

PlaygroundComponent.displayName = 'PagesPlaygroundComponent';

// Uncomment properties you need
// PlaygroundComponent.propTypes = {};
// PlaygroundComponent.defaultProps = {};

export default PlaygroundComponent;
