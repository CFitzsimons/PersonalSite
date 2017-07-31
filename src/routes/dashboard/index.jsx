import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withTheme } from 'material-ui/styles';

import InformationContainer from '../../components/InformationContainer';
import ResponsiveContainer from '../../components/responsiveContainer';

import HeaderPhoto from './panorama.jpg';
import NodeJS from './node-logo.png';
import ProfilePhoto from './colin.jpg';
import ReactLogo from './react.svg';
import Text from './text.json';
import Process from './web-console.jpg';
import Mocha from './mocha.svg';


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
  headerImage: {
    margin: 10,
    borderRadius: 500,
    maxWidth: '100%',
    maxHeight: 500,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  emblemContainer: {
    margin: 10,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  emblem: {
    maxWidth: 150,
    maxHeight: 150,
    width: '100%',
    height: '100%',
  },
};

class Dashboard extends Component {
  render() {
    return (
      <span>
        <div
          style={Object.assign(
            {},
            { backgroundColor: this.props.theme.palette.primary[400] },
            style.headerContainer)}
        >
          <ResponsiveContainer heading="Colin Fitzsimons" image={ProfilePhoto} text="Software Engineer" />
        </div>
        <div style={{ display: 'flex', backgroundColor: this.props.theme.palette.primary[500], flexDirection: 'row' }}>
            <div style={{ flex: 1 }} />
            <div style={{ flex: 8, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
              <div style={style.emblemContainer}>
                <img src={NodeJS} style={style.emblem} />
              </div>
              <div style={style.emblemContainer}>
                <img src={Mocha} style={style.emblem} />
              </div>
              <div style={style.emblemContainer}>
                <img src={ReactLogo} style={style.emblem} />
              </div>
            </div>
            <div style={{ flex: 1 }} />
        </div>
        <div style={{ display: 'flex', backgroundColor: this.props.theme.palette.primary[400], justifyContent: 'center', alignItems: 'center'}}>
          <ResponsiveContainer flipped heading="Simple, Clean Web UI" image={Process} text="Reliable dashboards, websites and online services designed using clear UI guidelines.  " />
        </div>

      </span>
    );
  }
}

export default withTheme(Dashboard);

// Design
// Create
// Test
// Release