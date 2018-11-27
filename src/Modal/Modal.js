import React from 'react';
// import PropTypes from 'prop-types';
import './Modal.css'

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none"
    //actions can be housed as buttons with functions inside of children
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
         <button onClick={handleClose}>Close</button>
        </section>
      </div>
      
    );
};


export default Modal;