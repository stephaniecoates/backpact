import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import * as moment from 'moment';
import { updateUser, updateAlert } from './../../ducks/reducer';
import {ActiveAlertBar, ActiveAlertText, ButtonContainer, Button} from './StyledActiveAlert';
import axios from 'axios';


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

    async goToAlert () {
        this.props.history.push('/setalert')
    }

    async cancelAlert () {
        console.log(this.props.alert.alert_id)
        axios.delete(`/api/deletealert/${this.props.alert.alert_id}`)
        this.props.updateAlert({})
   
    }
    

    render() {
        return this.props.alert.alert_id && this.props.location.pathname !== '/setalert'? <ActiveAlertBar>
            <ActiveAlertText>ACTIVE ALERT -- You have an alert set for the {this.props.alert.trail_name} trail that ends at {moment(this.props.alert.trip_end).format("MMMM Do YYYY [at] h:mma z")}</ActiveAlertText>
            <ButtonContainer>
                <Button onClick={() => this.goToAlert()}>Edit Alert</Button>
                <Button onClick={() => this.cancelAlert()}>Delete Alert</Button>
            </ButtonContainer>
        </ActiveAlertBar> : null

    }
}

function mapStateToProps(state) {
    const { user, alert } = state
    return {
        user,
        alert
    }
}

export default withRouter(connect(mapStateToProps, { updateUser, updateAlert })(ActiveAlert));
