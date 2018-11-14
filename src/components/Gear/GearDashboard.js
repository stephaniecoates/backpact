import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from './../../ducks/reducer';
import GearList from './GearList';

class GearDashboard extends Component {

    componentDidMount = async () => {
        let res = await axios.get(`/auth/user-data`)
        console.log('geardashboard component user', res.data)
        this.props.updateUser(res.data)
    }

    render() {
        return (
            <div>
                GearDashboard
                <GearList />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state
    return {
        user
    }
}

export default connect(mapStateToProps, { updateUser })(GearDashboard);