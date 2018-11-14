import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from './../../ducks/reducer';

class SetAlert extends Component {

    componentDidMount = async () => {
        let res = await axios.get(`/auth/user-data`)
        console.log('setalert component user', res.data)
        this.props.updateUser(res.data)
    }

    render () {
        return (
            <div>
                SetAlert
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

export default connect(mapStateToProps, {updateUser})(SetAlert);