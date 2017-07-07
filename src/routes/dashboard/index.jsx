import React, { Component } from 'react';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

import ProfilePhoto from './colin.jpg';


const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paperContainer: {
    margin: 10,
    height: 250,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  textContainer: {
    flex: 0.7,
  },
  card: {
    margin: 10,
  },
};

const introText = 'I am a PhD Student funded by the Irish Research Council conducting ' +
  'research into program construction in immersive environments.  ' +
  'A great deal of my current work revolves around investigating ' +
  'the cognitive benefits of an immersive language as well as novel ' +
  'approaches to designing immersive programming systems.  ';

export default class Dashboard extends Component {
  componentDidMount() {
    // Networking stuff
  }
  render() {
    return (
      <div style={style.container}>
        <Card style={style.card}>
          <CardHeader
            avatar={
              <Avatar src={ProfilePhoto} />
            }
            title="Colin Fitzsimons"
            subheader="PhD Student"
          />
          <CardContent>
            <Typography component="">
              {introText}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onTouchTap={() => window.open('https://linkedin.com/in/cfitzsimons', '_blank')}>
              LinkedIn
            </Button>
            <Button onTouchTap={() => window.open('https://github.com/cfitzsimons', '_blank')}>
              Github
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
