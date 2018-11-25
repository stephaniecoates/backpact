import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import axios from 'axios';
import {updateUser} from './../../ducks/reducer';

class Header extends Component {
  
  async logout () {
    await axios.get(`/auth/logout`)
    let res = await axios.get(`/auth/user-data`)
    this.props.updateUser(res.data)
  }

  render() {
    return (
      <header>
        <div style={{display: 'flex', justifyContent: 'flex-start', marginLeft: '30px'}}>
              <h3>Backpact</h3>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {this.props.user.username ?
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <p style={{ marginRight: '15px' }}>hi, {this.props.user.username}!</p>
                    <Button variant='contained' style={{ color: 'black', backgroundColor: 'white', maxWidth: '30px', maxHeight: '10px', fontSize: '10px'}} onClick={() => this.logout()}>Logout</Button>
                  </div>
                  :
                  <div>
                    <Button variant='contained' style={{ color: 'black', backgroundColor: 'white' }} component={Link} to='/login'>Log In / Register</Button>
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

export default connect(mapStateToProps, {updateUser})(Header);

