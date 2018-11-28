import React, { Component } from 'react';
import {connect} from 'react-redux';
// import Button from '@material-ui/core/Button'
import axios from 'axios';
import {updateUser, updateAlert, showModal} from './../../ducks/reducer';
import Modal from "./../../Modal/Modal";
import LoginModal from "./../../Modal/LoginModal";
import {Button, UserGreeting, Title, InvisibleHeader} from "./StyledHeader"

class Header extends Component {

  async componentDidMount() {
    let res = await axios.get(`/auth/user-data`)
    this.props.updateUser(res.data)
}
  
  async logout () {
    await axios.get(`/auth/logout`)
    this.props.updateAlert({})
    let res = await axios.get(`/auth/user-data`)
    this.props.updateUser(res.data)
  }

  render() {
    return (
      <InvisibleHeader>
              <Title>backpact</Title>
              <div>
                {this.props.user.username ?
                  <div>
                    <UserGreeting>hi, {this.props.user.username}!</UserGreeting>
                    <Button onClick={() => this.logout()}>log out</Button>
                  </div>
                  :
                  
                    <Button onClick={() => this.props.showModal()}>Log In / Register</Button>
                }
          <Modal >
          <LoginModal/>
          </Modal>
            
        </div>
      </InvisibleHeader>
    );
  }
}

function mapStateToProps(state) {
  let { user, modalVisible } = state
  return {
      user,
      modalVisible
  }
}

export default connect(mapStateToProps, {updateUser, updateAlert, showModal})(Header);

