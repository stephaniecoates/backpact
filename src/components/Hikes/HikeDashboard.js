import React, {Component} from 'react';
import HikeList from './HikeList';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from './../../ducks/reducer';

class HikeDashboard extends Component {

    componentDidMount = async () => {
        let res = await axios.get(`/auth/user-data`)
        console.log('hikeDashboard component user', res.data)
        this.props.updateUser(res.data)
    }

    render () {
        return (
            <div>
                HikeDashboard
                <HikeList />
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

export default connect(mapStateToProps, {updateUser})(HikeDashboard);