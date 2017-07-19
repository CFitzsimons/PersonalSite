import React, { Component } from 'react';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import { withTheme } from 'material-ui/styles';

import Assignment from 'material-ui-icons/Assignment';
import Home from 'material-ui-icons/Home';
import Computer from 'material-ui-icons/Computer';
import ContactMail from 'material-ui-icons/ContactMail';

import InformationContainer from '../../components/InformationContainer';

import ProfilePhoto from './colin.jpg';
import Text from './text.json';


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
  itemNavigationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 0.25,
  },
  iconContainer: {
    borderWidth: 5,
    height: 150,
    width: 150,
    borderRadius: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    display: 'flex',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

// const navigationIcons = [
//   {
//     icon: Assignment,
//   },
//   {
//     icon: Computer,
//   },
//   {
//     icon: ContactMail,
//   },
// ];

const introText = 'I am a PhD Student funded by the Irish Research Council conducting ' +
  'research into program construction in immersive environments.  ' +
  'A great deal of my current work revolves around investigating ' +
  'the cognitive benefits of an immersive language as well as novel ' +
  'approaches to designing immersive programming systems.  ';
import NodeJS from './nodejs.png';
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
          <div style={{ flex: 1 }} />
          <img src={ProfilePhoto} style={{ flex: 2, width: '100%' }} />
          <div style={{ flex: 1 }} />
        </div>

        <InformationContainer title="Server" subtitle="NodeJS, Python">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 0.75 }}>
              <Typography paragraph >
                {Text.server[0]}
              </Typography>
            </div>
            <div style={{ flex: 0.25 }}>
              <img src={NodeJS} style={{ width: '100%' }} />
            </div>
          </div>
        </InformationContainer>
        {/* <InformationContainer title="Server" subtitle="NodeJS, Python" paragraphs={['hello']} />
        <InformationContainer title="Server" subtitle="NodeJS, Python" paragraphs={['hello']} />
        <InformationContainer title="Server" subtitle="NodeJS, Python" paragraphs={['hello']} />
        <InformationContainer title="Server" subtitle="NodeJS, Python" paragraphs={['hello']} />
        <InformationContainer title="Server" subtitle="NodeJS, Python" paragraphs={['hello']} />
        <InformationContainer title="Server" subtitle="NodeJS, Python" paragraphs={['hello']} />
        <InformationContainer title="Server" subtitle="NodeJS, Python" paragraphs={['hello']} />
        <InformationContainer title="Server" subtitle="NodeJS, Python" paragraphs={['hello']} />
        <InformationContainer title="Server" subtitle="NodeJS, Python" paragraphs={['hello']} /> */}
      </span>
    );
  }
}

export default withTheme(Dashboard);
