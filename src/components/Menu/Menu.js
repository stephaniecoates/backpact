import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu>
      <Link to='/'>Home</Link>
      <Link to='/hikes'>Find A Hike</Link>
      <Link to='/gear'>Pack Your Pack</Link>
      <Link to='/setalert'>Set An Alert</Link>
      <Link to='/finalchecklist'>Final Checklist</Link>
      <Link to='/resources'>Resources</Link>
    </Menu>
  );
};