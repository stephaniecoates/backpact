import React, {Component} from 'react';
import './Modal.css';
import {hideModal} from './../ducks/reducer'
import {connect} from 'react-redux';

class Modal extends Component {

  render () {
    const showHideClassName = this.props.modalVisible ? "modal display-block" : "modal display-none"
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
      <button style={{float: 'right'}}onClick={() => this.props.hideModal()}>Close</button>
          {this.props.children}
        </section>
      </div>
      
    );
};
}

function mapStateToProps (state) {
  let {modalVisible} = state
  return {
    modalVisible
  }
}


export default connect(mapStateToProps, {hideModal})(Modal);