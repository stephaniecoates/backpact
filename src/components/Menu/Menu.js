import React from 'react';
import { Link } from 'react-router-dom';

export default ({ close }) => (
  <div className="menu">
    <ul>
      <Link to='' onClick={close}>Home</Link>
      <Link to='' onClick={close}>Getting Started</Link>
      <Link to='' onClick={close}>Getting Started</Link>
      <Link to='' onClick={close}>Getting Started</Link>
      <Link to='' onClick={close}>Getting Started</Link>
      <Link to='' onClick={close}>Getting Started</Link>
     
    </ul>
  </div>
);

// export default props => {
//   return (
//     <Menu>
//       <Link className='menu-item' to='/'>Home</Link>
//       <Link to='/hikes'>Find A Hike</Link>
//       <Link to='/gear'>Pack Your Pack</Link>
//       <Link to='/setalert'>Set An Alert</Link>
//       <Link to='/finalchecklist'>Final Checklist</Link>
//       <Link to='/resources'>Resources</Link>
//     </Menu>
//   );
// };