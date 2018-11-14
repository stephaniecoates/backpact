import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {updateUser} from './../../ducks/reducer';
import {connect} from 'react-redux';

class Home extends Component {

    async componentDidMount () {
        let res = await axios.get(`/auth/user-data`)
        console.log('home component user', res.data)
        this.props.updateUser(res.data)
    }
    render () {
        return (
            <div>
                <h1>For your backpacking adventures, give yourself (and mom) some peace of mind.</h1>
                <h2>Trail Angel makes sure there are no holes in your trip plan.</h2>
                <h2>We'll also send an alert to a loved one if you don't return by your expected end date.</h2>
                {this.props.user.username ? <div><Link to='/hikes'>Browse Hikes</Link><Link to='gear'>Pack Your Pack</Link><Link to='setalert'>Set An Alert</Link><Link to='resources'>Browse Hiker Resources</Link></div> : <Link to='/login'>Log In/Register</Link>}
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