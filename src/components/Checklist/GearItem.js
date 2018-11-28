import React from 'react';

function GearItem(props) {
  return (
      <div>
          <input type="checkbox"/>
            {props.itemName}
         </div>
  );
}

export default GearItem;