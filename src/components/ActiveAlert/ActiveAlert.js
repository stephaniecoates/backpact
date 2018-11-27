import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as moment from 'moment';
import { updateUser, updateAlert } from './../../ducks/reducer';


class ActiveAlert extends Component {

    async componentDidMount() {
        let res = await axios.get(`/auth/user-data`)
        this.props.updateUser(res.data)
        if (this.props.user.id) {
            let alertRes = await axios.get(`/api/alert-data/${this.props.user.id}`)
            this.props.updateAlert(alertRes.data)
        }
    }

    render() {
        return this.props.alert.alert_id ? <div
            style={{ width: '100%', height: '15%', position: 'fixed', bottom: '0px', backgroundColor: 'green', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h4>ACTIVE ALERT -- You have an alert set for the {this.props.alert.trail_name} trail that ends at {moment(this.props.alert.trip_end).format("MMMM Do YYYY [at] h:mma z")}</h4>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button>Edit Alert</button>
                <button>Cancel Alert</button>
            </div>
        </div> : null

    }
}

function mapStateToProps(state) {
    const { user, alert } = state
    return {
        user,
        alert
    }
}

export default connect(mapStateToProps, { updateUser, updateAlert })(ActiveAlert);
