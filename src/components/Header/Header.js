import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button'
import axios from 'axios';
import {updateUser, updateAlert} from './../../ducks/reducer';

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
      <header style={{width: '100vw'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: "rgba(255,255,255,0.9", alignItems: 'center', height: '11vh', marginLeft: '120px'}}>
              <h2 style={{textTransform: 'uppercase'}}>Backpact</h2>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {this.props.user.username ?
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <p style={{ marginRight: '15px' }}>hi, {this.props.user.username}!</p>
                    <Button variant='contained' style={{ color: 'black', backgroundColor: 'white', maxWidth: '30px', maxHeight: '10px', fontSize: '10px'}} onClick={() => this.logout()}>Logout</Button>
                  </div>
                  :
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <Button variant='contained' style={{ color: 'black', backgroundColor: 'white', marginRight: '50px' }} onClick={this.props.showModal}>Log In / Register</Button>
                  </div>}
              </div>

            
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  let { user } = state
  return {
      user
  }
}

export default connect(mapStateToProps, {updateUser, updateAlert})(Header);

