//ask about <a> in navbar and authctrl
//ask about auth warning: Warning: Cannot update during an existing state transition (such as within `render`) during redirect
//ask about different element rendering in whitespace after login, not layout-content-7...layout-content-30 shows up

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {updateUser} from './../../ducks/reducer';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button'
import './Home.css'

class Home extends Component {

    async componentDidMount () {
        let res = await axios.get(`/auth/user-data`)
        this.props.updateUser(res.data)
    }
    render () {
        return (
            <div className='home-background'>
            <div className='home-content'>
                <h1 className='main'>For your next backpacking adventure, give yourself (and mom) some peace of mind.</h1>
                <h1 className='second'>Trail Angel takes the guesswork out of trip planning.</h1>
                {this.props.user.username ? <div className='home-buttons'>
                    <Button style={{padding: '10px', margin:'10px 10px 10px 0px'}} variant='outlined' component={Link} to='/hikes'>Find a Hike</Button> 
                    <Button style={{padding: '10px', margin: '10px'}} variant='outlined' component={Link} to='/gear'>Pack your Pack</Button>
                    <Button style={{padding: '10px', margin: '10px'}} variant='outlined' component={Link} to='/setalert'>Set an Alert</Button>
                    </div>
                    : <div className='login-button'><Button variant='outlined' size='large' component={Link} to='/login' className='login-button'>Log In / Register</Button></div>

                    }
                    </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const {user} = state
    return {
        user
    }
}

export default connect(mapStateToProps, {updateUser})(Home);