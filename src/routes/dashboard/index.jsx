import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withTheme } from 'material-ui/styles';

import InformationContainer from '../../components/InformationContainer';

import HeaderPhoto from './panorama.jpg';
// import NodeJS from './nodejs.png';
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
  headerImage: {
    flex: 2,
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
          <div style={{ flex: 1 }} />
          <img alt="Header (Hong Kong)" src={HeaderPhoto} style={style.headerImage} />
          <div style={{ flex: 1 }} />
        </div>
        <InformationContainer title="Who am I?">
          <div style={style.flexRow}>
            <div style={{ flex: 0.75 }}>
              {
                Text.about.map(text => (
                  <Typography paragraph >
                    {text}
                  </Typography>
                ))
              }
            </div>
            <div style={{ flex: 0.25 }}>
              <img alt="Colin Fitzsimons" src={ProfilePhoto} style={{ width: '100%' }} />
            </div>
          </div>
        </InformationContainer>

      </span>
    );
  }
}

export default withTheme(Dashboard);


// <InformationContainer title="Server" subtitle="NodeJS, Python">
//   <div style={{ display: 'flex', flexDirection: 'row' }}>
//     <div style={{ flex: 0.75 }}>
//       <Typography paragraph >
//         {Text.server[0]}
//       </Typography>
//     </div>
//     <div style={{ flex: 0.25 }}>
//       <img alt="NodeJS logo" src={NodeJS} style={{ width: '100%' }} />
//     </div>
//   </div>
// </InformationContainer>
