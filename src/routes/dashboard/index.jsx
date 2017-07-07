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

const navigationIcons = [
  {
    icon: Assignment,
  },
  {
    icon: Computer,
  },
  {
    icon: ContactMail,
  },
];

const introText = 'I am a PhD Student funded by the Irish Research Council conducting ' +
  'research into program construction in immersive environments.  ' +
  'A great deal of my current work revolves around investigating ' +
  'the cognitive benefits of an immersive language as well as novel ' +
  'approaches to designing immersive programming systems.  ';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    const { theme } = props;
    console.log(theme.palette);
    this.iconColor = theme.palette.primary['A200'];
    this.primaryColor = theme.palette.primary[200];
    this.borderColor = theme.palette.primary['A200'];
    this.state = {
      width: '0',
      height: '0',
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <div style={{ height: this.state.height - 63, width: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flex: 0.5, flexDirection: 'row' }}>
          <div style={{ flex: 0.25 }} />
          <div style={style.imageContainer}>
            <img alt="Colin Fitzsimons" style={{ height: this.state.height / 3, borderRadius: 150 }} src={ProfilePhoto} />
          </div>
          <div style={{ flex: 0.25 }} />
        </div>
        <div style={{display: 'flex', flex: 0.5}}>{/* Control for the three navigations */}
          <div style={{ flex: 0.25 }} />
          {
            navigationIcons.map(icon => (
              <div style={style.itemNavigationContainer}>
                <div
                  style={Object.assign({},
                    style.iconContainer,
                    { backgroundColor: this.primaryColor, borderColor: this.borderColor })}
                >
                  <icon.icon style={{ color: this.iconColor }} />
                </div>
              </div>
            ))
          }
          <div style={{ flex: 0.25 }} />
        </div>
      </div>
    );
  }
}

export default withTheme(Dashboard);
const test = (
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
);
