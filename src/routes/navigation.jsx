import React from 'react';
import { browserHistory } from 'react-router';

const Style = {
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '50px',
    borderWidth: 0,
    borderBottomWidth: '5px',
    borderColor: 'rgb(46,49,54)',
    borderStyle: 'solid',
  },
  filler: {
    width: 5,
    height: '100%',
    backgroundColor: 'rgb(36,39,44)',
  },
  textContainer: {
    flex: 1,
    display: 'flex',
    paddingLeft: 10,
    height: '100%',
    alignItems: 'center',
  },
};

const menuItems = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Research',
    link: '/research',
  },
  {
    title: 'Projects',
    link: '/projects',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];

export default props => (
  <span>
    {menuItems.map(item => (
      <div key={item.title} style={Style.menuItem}>
        <div style={Style.filler}>&zwnj;</div>
        <div
          className="menu-item"
          style={Style.textContainer}
          onTouchTap={() => { browserHistory.push(item.link); props.closeEvent(); }}
        >
          <h2>{item.title}</h2>
        </div>
      </div>
    ))}
  </span>
);
