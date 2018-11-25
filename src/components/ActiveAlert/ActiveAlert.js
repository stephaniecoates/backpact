import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as moment from 'moment';
import {updateUser} from './../../ducks/reducer';


class ActiveAlert extends Component {
    constructor() {
        super();

        this.state = {
            userAlert: null
        }
    }

    async componentDidMount () {
        let res = await axios.get(`/auth/user-data`)
        this.props.updateUser(res.data)
    }

    async componentWillReceiveProps() {
        console.log('component will receive props happening')
        if (this.props.user.id) {
            let res = await axios.get(`/api/alert-data/${this.props.user.id}`)
            console.log('get alert data', res.data)
            this.setState({
                userAlert: res.data
            })
        } 
    }

    render() {
        return this.state.userAlert ? <div>ACTIVE ALERT: For trail {this.state.userAlert.trail_name} with an end date of {moment(this.state.userAlert.trip_end).format("MM Do")}</div> : null

    }
}

function mapStateToProps(state) {
    console.log('mappiing state to props')
    const { user } = state
    return {
        user
    }
}

export default connect(mapStateToProps, {updateUser})(ActiveAlert);
