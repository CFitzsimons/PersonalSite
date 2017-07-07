import React from 'react';
import { browserHistory } from 'react-router';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import Assignment from 'material-ui-icons/Assignment';
import Home from 'material-ui-icons/Home';
import Computer from 'material-ui-icons/Computer';
import ContactMail from 'material-ui-icons/ContactMail';

const menuItems = [
  {
    title: 'Home',
    link: '/',
    icon: Home,
  },
  {
    title: 'Research',
    link: '/research',
    icon: Assignment,
  },
  {
    title: 'Projects',
    link: '/nill',
    icon: Computer,
  },
  {
    title: 'Contact',
    link: '/nill',
    icon: ContactMail,
  },
];
export default props => (
  <List>
    {menuItems.map(item => (
      <ListItem button onTouchTap={() => { browserHistory.push(item.link); props.closeEvent(); }}>
        <ListItemIcon>
          <item.icon />
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    ))}
  </List>
);
