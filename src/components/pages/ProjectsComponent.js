'use strict';

import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';


require('styles/pages/Projects.css');

class ProjectsComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      multiRow: (window.innerWidth - 750) > 0
    }
  }
  handleResize(){
    let newValue = (window.innerWidth - 750 > 0);
    this.setState({
      multiRow: newValue
    });
  }

  componentDidMount(){
     window.addEventListener('resize', this.handleResize.bind(this));
  }
  navigate(link){
    window.open(link);
  }
  render() {
    let mappable = [1,2,3,4,5];
    return (
      <div>
        <div style={{paddingTop:'10px'}}>
          <Card style={Object.assign({marginLeft:'5%', marginRight:'5%', height:'100%'}, this.state.multiRow ? {display:'inline-block', width:'40%'} : {})}>
            <CardTitle title="Fan Engagement Application" subtitle="React Native, AngularJS, NodeJS" />
            <CardText>
              <h3>Lead Developer</h3>
              Developer in charge of all aspects of design, implementation and direction.  Responsible for the development of both the scalable server architecture as well as the real-time mobile application.  Due to the nature of the application, security was a major focus and a heavy focus was placed upon secure development, following standard best practices as well as conducting security reviews on the code.  The technologies primarily used were React Native (mobile application), AngularJS (V2, web based management console) and NodeJS (5+) for the scalable server.
            </CardText>
            <CardActions>
              <FlatButton label="Ballzey" />
            </CardActions>
          </Card>
          <Card style={Object.assign({marginLeft:'5%', marginRight:'5%', height:'100%'}, this.state.multiRow ? {display:'inline-block', width:'40%'} : {marginTop:'10px'})}>

            <CardTitle title="Logistics Management System" subtitle="Javascript, AngularJS, REST" />
            <CardText>
            <h3>Frontend Developer</h3>

            Responsible for rapid development and deployment of a large scale logistics management system including design, specification, testing and maintenance.  Collaborated with the dedicated back-end developer to make design choices that would integrate well with the system and mirrored the customers needs.  Primarily worked using AngularJS (V1), Mocha and Node.
            </CardText>
            <CardActions>
              <FlatButton label="Inship"/>
            </CardActions>
          </Card>

        </div>
        <div style={{paddingTop:'10px'}}>
          <Card style={Object.assign({marginLeft:'5%', marginRight:'5%', height:'100%'}, this.state.multiRow ? {display:'inline-block', width:'40%'} : {})}>
            <CardTitle title="Skype Chat Bot" subtitle="C#, Windows Services" />
            <CardText>
              <h3>Independent Project</h3>
              The chat bot works with older versions of Skype where access to certain API functions was possible.  The bot listens on any chats with a specific indicator left in the topic and responds to programmable commands.  C# was used to develop the bot and accessible the API was only possible though a working knowledge of C++.
            </CardText>
            <CardActions>
              <FlatButton label="Github" onTouchTap={() => {this.navigate('https://github.com/CFitzsimons/SkypeChatBot')}}/>
            </CardActions>
          </Card>
          <Card style={Object.assign({marginLeft:'5%', marginRight:'5%', height:'100%'}, this.state.multiRow ? {display:'inline-block', width:'40%'} : {marginTop:'10px'})}>

            <CardTitle title="Git Log Translator" subtitle="Java, Google API" />
            <CardText>
            <h3>Independent Project</h3>
            The translator descends though all git log entries in the current branch and appends a localisation to the notes section.  The translation is done by Google Translate and the user is required to provide their own API key. The application is short but effective and written in Java.
            </CardText>
            <CardActions>
              <FlatButton label="Github" onTouchTap={() => {this.navigate('https://github.com/CFitzsimons/Git-Translator')}}/>
            </CardActions>
          </Card>

        </div>
      </div>
    );
  }
}

ProjectsComponent.displayName = 'PagesProjectsComponent';

// Uncomment properties you need
// ProjectsComponent.propTypes = {};
// ProjectsComponent.defaultProps = {};

export default ProjectsComponent;
