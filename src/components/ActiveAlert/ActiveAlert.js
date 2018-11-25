import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as moment from 'moment';
import {updateUser, updateAlert} from './../../ducks/reducer';


class ActiveAlert extends Component {
   
    async componentDidMount () {
        let res = await axios.get(`/auth/user-data`)
        this.props.updateUser(res.data)
        if (this.props.user.id) {
            let res = await axios.get(`/api/alert-data/${this.props.user.id}`)
            console.log('get alert data', res.data)
            this.props.updateAlert(res.data)
            }

    }

    // async componentWillReceiveProps() {
    //     console.log('component will receive props happening')
    //     } 
        
        render() {
            return this.props.alert.alert_id ? <div>ACTIVE ALERT: For trail {this.props.alert.trail_name} with an end date of {moment(this.props.alert.trip_end).format("MM Do")}</div> : null
            
        }
    }  

function mapStateToProps(state) {
    console.log('mappiing state to props')
    const { user, alert } = state
    return {
        user,
        alert
    }
}

export default connect(mapStateToProps, {updateUser, updateAlert})(ActiveAlert);
