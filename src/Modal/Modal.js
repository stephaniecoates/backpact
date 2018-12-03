import React, { Component } from 'react';
import { hideModal } from './../ducks/reducer'
import { connect } from 'react-redux';
import {Xbutton, MainModal, ShowHideModal} from './StyledModal';
import {IoMdClose} from 'react-icons/io';
import {IconContext} from 'react-icons';

class Modal extends Component {
  
  render() {

    return (    
       <ShowHideModal modalVisible={this.props.modalVisible}>
        <MainModal>
          <IconContext.Provider value={{ size: '3em', color: 'grey' }}>
            <Xbutton onClick={() => this.props.hideModal()}><IoMdClose /></Xbutton>
          </IconContext.Provider>
          {this.props.children}
        </MainModal>
        </ShowHideModal>
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