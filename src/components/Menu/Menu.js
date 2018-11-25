import React from 'react';
import { Link } from 'react-router-dom';

export default ({ close }) => (
  <div className="menu">
      <Link className='menulink' to='/' onClick={close}>home</Link>
      <Link className='menulink' to='/hikes' onClick={close}>find a hike</Link>
      <Link className='menulink' to='/gear' onClick={close}>pack your pack</Link>
      <Link className='menulink' to='/setalert' onClick={close}>set an alert</Link>
      <Link className='menulink' to='/finalchecklist' onClick={close}>final checklist</Link>
      <Link className='menulink' to='resources' onClick={close}>resources</Link>
  </div>
);
