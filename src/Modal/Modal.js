import React, { Component } from 'react';
import './Modal.css';
import { hideModal } from './../ducks/reducer'
import { connect } from 'react-redux';
import {Xbutton, MainModal} from './StyledModal';
import {IoMdClose} from 'react-icons/io';
import {IconContext} from 'react-icons';
// import styled from 'styled-components';

class Modal extends Component {
  
  render() {
    const showHideClassName = this.props.modalVisible ? "modal-overlay modal-display-block" : "modal-overlay modal-display-none"
    
//what's happening here? styled component is running, prevents login modal component did mount fn from finishing

    // const ShowHideModal = styled.div`
    // ${this.props.modalVisible ? 
    //   `display: block;
    //   position: fixed;
    //   z-index: 2000;
    //   top: 0;
    //   left: 0;
    //   width:100%;        
    //   height: 100%;
    //   background: rgba(255, 255, 255, 0.6);`
    //   :
    //   `display: none;`
    // }`
    
    return (
      <div className={showHideClassName}>
       {/* <ShowHideModal> */}
        <MainModal>
          <IconContext.Provider value={{ size: '3em', color: 'grey' }}>
            <Xbutton onClick={() => this.props.hideModal()}><IoMdClose /></Xbutton>
          </IconContext.Provider>
          {this.props.children}
        </MainModal>
        {/* </ShowHideModal> */}
      </div>

    );
  };
}

function mapStateToProps(state) {
  let { modalVisible } = state
  return {
    modalVisible
  }
}


export default connect(mapStateToProps, { hideModal })(Modal);