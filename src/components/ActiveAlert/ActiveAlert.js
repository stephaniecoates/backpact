import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';
import { updateUser, updateAlert } from './../../ducks/reducer';


class ActiveAlert extends Component {
    constructor () {
        super();

        this.state = {
            userId: '',
            alertTrailName: '',
            alertTripEnd: ''
        }
    }

    componentDidMount () {
        this.setState({
            userId: this.props.user.id,
            alertTrailName: this.props.alert.trailName,
            alertTripEnd: this.props.alert.trip_end
        })
    }

  componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.setState({
            userId: this.props.user.id,
            alertTrailName: this.props.alert.trailName,
            alertTripEnd: this.props.alert.trip_end
        })
        
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
