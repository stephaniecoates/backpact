import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser, updateAlert, showModal, hideModal } from '../../ducks/reducer';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import * as moment from 'moment';
import Modal from './../../Modal/Modal'
import LoginModal from './../../Modal/LoginModal'

class SetAlert extends Component {
    constructor() {
        super();

        this.state = {
            alertId: 0,

            trailName: '',
            trailType: '',
            trailGroup: '',
            wildernessArea: '',
            startingTrailhead: '',
            endingTrailhead: '',
            roundtripDistance: '',
            nearestTown: '',
            state: '',
            country: '',
            tripDescription: '',

            tripStartTime: '',
            tripStartDate: '',
            tripEndTime: '',
            tripEndDate: '',

            firstName: '',
            lastName: '',
            age: '',
            userPhoneNumber: '',
            gender: '',
            height: '',
            weight: '',
            hairColor: '',
            clothingDescription: '',
            medications: '',
            medicalIssues: '',

            alertContactName: '',
            userContactRelationship: '',
            alertContactNumber: '',
            alertContactEmail: '',

        }
    }

   async componentDidMount () {
    let res = await axios.get(`/auth/user-data`)
    this.props.updateUser(res.data)
        if (!this.props.user.id) {
            this.props.showModal()
       
    }
}

    componentDidUpdate(prevProps) {
        if (prevProps.user.id !== this.props.user.id)
        this.setState({
            alertId: this.props.user.id
        })
        if (this.props.user.id) {
            this.props.hideModal();
        }
    }


    editAlert () {
        this.setState({
            alertId: this.props.user.id,
            trailName: this.props.alert.trail_name,
            trailType: this.props.alert.trail_type,
            trailGroup: this.props.alert.trail_group,
            wildernessArea: this.props.alert.wilderness_area,
            startingTrailhead: this.props.alert.starting_trailhead,
            endingTrailhead: this.props.alert.ending_trailhead,
            roundtripDistance: this.props.alert.roundtrip_distance,
            nearestTown: this.props.alert.nearest_town,
            state: this.props.alert.state,
            country: this.props.alert.country,
            tripDescription: this.props.alert.trip_description,

            tripStartTime: moment(this.props.alert.trip_start).format("HH:mm"),
            tripStartDate: moment(this.props.alert.trip_start).format("YYYY-MM-DD"),
            tripEndTime: moment(this.props.alert.trip_end).format("HH:mm"),
            tripEndDate: moment(this.props.alert.trip_start).format("YYYY-MM-DD"),

            firstName: this.props.alert.first_name,
            lastName: this.props.alert.last_name,
            age: this.props.alert.age,
            userPhoneNumber: this.props.alert.user_phone_number,
            gender: this.props.alert.gender,
            height: this.props.alert.height,
            weight: this.props.alert.weight,
            hairColor: this.props.alert.hair_color,
            clothingDescription: this.props.alert.clothing_description,
            medications: this.props.alert.medications,
            medicalIssues: this.props.alert.medical_issues,

            alertContactName: this.props.alert.alert_contact_name,
            userContactRelationship: this.props.alert.user_contact_relationship,
            alertContactNumber: this.props.alert.alert_contact_number,
            alertContactEmail: this.props.alert.alert_contact_email
        })
    }

   async submitEditedAlert () {
    let res = await axios.put('/api/editalert', {
        alertId: this.state.alertId,
            trailName: this.state.trailName,
            trailType: this.state.trailType,
            trailGroup: this.state.trailGroup,
            wildernessArea: this.state.wildernessArea,
            startingTrailhead: this.state.startingTrailhead,
            endingTrailhead: this.state.endingTrailhead,
            roundtripDistance: this.state.roundtripDistance,
            nearestTown: this.state.nearestTown,
            state: this.state.state,
            country: this.state.country,
            tripDescription: this.state.tripDescription,

            tripStart: moment(this.state.tripStartDate + " " + this.state.tripStartTime).format(),
            tripEnd: moment(this.state.tripEndDate + " " + this.state.tripEndTime).format(),

            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            userPhoneNumber: this.state.userPhoneNumber,
            gender: this.state.gender,
            height: this.state.height,
            weight: this.state.weight,
            hairColor: this.state.hairColor,
            clothingDescription: this.state.clothingDescription,
            medications: this.state.medications,
            medicalIssues: this.state.medicalIssues,

            alertContactName: this.state.alertContactName,
            userContactRelationship: this.state.userContactRelationship,
            alertContactNumber: this.state.alertContactNumber,
            alertContactEmail: this.state.alertContactEmail,
        })
        console.log('returned edited alert', res.data)
    }




    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    async setAlert() {
        let res = await axios.post('/api/createalert', {
            alertId: this.state.alertId,

            trailName: this.state.trailName,
            trailType: this.state.trailType,
            trailGroup: this.state.trailGroup,
            wildernessArea: this.state.wildernessArea,
            startingTrailhead: this.state.startingTrailhead,
            endingTrailhead: this.state.endingTrailhead,
            roundtripDistance: this.state.roundtripDistance,
            nearestTown: this.state.nearestTown,
            state: this.state.state,
            country: this.state.country,
            tripDescription: this.state.tripDescription,

            tripStart: moment(this.state.tripStartDate + " " + this.state.tripStartTime).format(),
            tripEnd: moment(this.state.tripEndDate + " " + this.state.tripEndTime).format(),

            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            userPhoneNumber: this.state.userPhoneNumber,
            gender: this.state.gender,
            height: this.state.height,
            weight: this.state.weight,
            hairColor: this.state.hairColor,
            clothingDescription: this.state.clothingDescription,
            medications: this.state.medications,
            medicalIssues: this.state.medicalIssues,

            alertContactName: this.state.alertContactName,
            userContactRelationship: this.state.userContactRelationship,
            alertContactNumber: this.state.alertContactNumber,
            alertContactEmail: this.state.alertContactEmail,
        })
        console.log('returned createdAlert', res.data)
        let alertRes = await axios.get(`/api/alert-data/${this.props.user.id}`)
        this.props.updateAlert(alertRes.data)
    }


    render() {
        // var today = moment().format("YYYY-MM-DD")
        // var todayHour = moment().format("HH:mm")
        return (
            <div style={{overflow: 'hidden'}}>
            {!this.props.user.id && <Modal><LoginModal/></Modal>}

 
            {!this.props.user.id ? 
            <div style={{padding: '50px', width: '40vw', height: '40vh', margin: '100px auto', border: '3px solid black', backgroundColor: 'white'}}>Please log in first to create an alert.</div> 
            : 

            this.props.alert.trail_name ?

            <div style={{height: '30vh', width: '30vw', margin: '100px auto', border: '2px solid black', backgroundColor: 'white'}}>
            <p>ALERT SET: </p>
            <p>{this.props.alert.trail_name}</p>
            <p>on</p>
            <p>{this.props.alert.trip_end}</p>
            <button onClick={() => this.editAlert()}>Edit Alert</button>
            <button onClick={() => this.deleteAlert()}>Delete Alert</button>
            </div>

            :
            <form style={{ margin: '20px 150px 0px 150px', height: '80vh', padding: '30px', overflow: 'scroll', border: '1px solid grey', backgroundColor: 'rgba(255,255,255,0.7)' }}>
                <h2>TRAIL INFO</h2>
                <TextField
                    id="trailName"
                    fullWidth
                    label="Trail Name"
                    placeholder="ex) Collegiate Peaks Loop"
                    value={this.state.trailName}
                    onChange={this.handleChange('trailName')}
                />
                <TextField
                    id="trailType"
                    fullWidth
                    label="Trail Type"
                    placeholder='Loop, Out and Back, Point to Point, etc.'
                    value={this.state.trailType}
                    onChange={this.handleChange('trailType')}
                />
                <TextField
                    id="trailGroup"
                    fullWidth
                    label="Group Size"
                    multiline
                    helperText="Are there other humans/animals in your group? List them here. Otherwise, specify that you're going solo."
                    value={this.state.trailGroup}
                    onChange={this.handleChange('trailGroup')}
                />
                <TextField
                    id="wildernessArea"
                    label="Wilderness Area"
                    fullWidth
                    placeholder="ex) Collegiate Peaks Wilderness, San Juan National Forest"
                    value={this.state.wildernessArea}
                    onChange={this.handleChange('wildernessArea')}
                />
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    <TextField
                        id="startingTrailhead"
                        label="Starting Trailhead"
                        value={this.state.startingTrailhead}
                        style={{ width: '45%', minWidth: '300px' }}
                        onChange={this.handleChange('startingTrailhead')}
                    />
                    <TextField
                        id="endingTrailhead"
                        label="Ending Trailhead"
                        value={this.state.endingTrailhead}
                        style={{ width: '45%', minWidth: '300px' }}
                        onChange={this.handleChange('endingTrailhead')}
                    />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    <TextField
                        id="roundtripDistance"
                        label="Roundtrip Distance"
                        value={this.state.roundtripDistance}
                        style={{ width: '45%', minWidth: '300px' }}
                        onChange={this.handleChange('roundtripDistance')}
                    />
                    <TextField
                        id="nearestTown"
                        label="Town/City"
                        helperText='If the trail spans multiple towns, list the one nearest the starting trailhead.'
                        value={this.state.nearestTown}
                        style={{ width: '45%', minWidth: '300px' }}
                        onChange={this.handleChange('nearestTown')}
                    />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    <TextField
                        id="state"
                        label="State"
                        value={this.state.state}
                        style={{ width: '45%', minWidth: '300px' }}
                        onChange={this.handleChange('state')}
                    />
                    <TextField
                        id="country"
                        label="Country"
                        fullWidth
                        value={this.state.country}
                        style={{ width: '45%', minWidth: '300px' }}
                        onChange={this.handleChange('country')}
                    />
                </div>
                <div>
                    <TextField
                        id="tripDescription"
                        label="Trip Description"
                        rows='4'
                        multiline
                        fullWidth
                        helperText="Give us an overview of your trip plans. Be as detailed with your itinerary as you'd like."
                        placeholder="Ex) Doing a solo backpacking trip around the Collegiate Peaks - 80 miles south on Colorado Trail, then hooking up with the Continental Divide Trail and going 80 miles north on that back to Twin Lakes TH. Planning on doing 16-18 miles a day. Taking side trips to summit Mt. Princeton on day 4 and Mt. Yale on day 6. Food resupply at Monarch Pass Souvenir Shop on day 5."
                        value={this.state.tripDescription}
                        onChange={this.handleChange('tripDescription')}
                    />
                </div>

                <h2>TRIP DATES</h2>
                <p>I'm leaving...</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    <TextField
                        id="tripStartTime"
                        type='time'
                        helperText='start time'
                        style={{ width: '45%', minWidth: '300px' }}
                        value={this.state.tripStartTime}
                        onChange={this.handleChange('tripStartTime')}
                    />
                    <TextField
                        id="tripStartDate"
                        type='date'
                        helperText='start date'
                        style={{ width: '45%', minWidth: '300px' }}
                        value={this.state.tripStartDate}
                        onChange={this.handleChange('tripStartDate')} />
                </div>

                <p>I'll be back by...</p>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    <TextField
                        id="tripEndTime"
                        helperText='anticipated return time'
                        type='time'
                        style={{ width: '45%', minWidth: '300px' }}
                        value={this.state.tripEndTime}
                        onChange={this.handleChange('tripEndTime')}
                    />
                    <TextField
                        id="tripEndDate"
                        type='date'
                        helperText='anticipated return date'
                        style={{ width: '45%', minWidth: '300px' }}
                        value={this.state.tripEndDate}
                        onChange={this.handleChange('tripEndDate')} />
                </div>

                <h2>ABOUT ME</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>

                    <TextField
                        id="firstName"
                        label="First Name"
                        style={{ width: '45%', minWidth: '300px' }}
                        value={this.state.firstName}
                        onChange={this.handleChange('firstName')}
                    />
                    <TextField
                        id="lastName"
                        label="Last Name"
                        style={{ width: '45%', minWidth: '300px' }}
                        value={this.state.lastName}
                        onChange={this.handleChange('lastName')}
                    />
                    <TextField
                        id="age"
                        label="Age"
                        style={{ width: '45%', minWidth: '300px' }}
                        value={this.state.age}
                        onChange={this.handleChange('age')}
                    />
                    <TextField
                        id="userPhoneNumber"
                        label="Phone #"
                        placeholder="+1 (222) 333-4444"
                        style={{ width: '45%', minWidth: '300px' }}
                        helperText="Include your country code, area code, and ten digit number."
                        value={this.state.userPhoneNumber}
                        onChange={this.handleChange('userPhoneNumber')}
                    />

                    <div style={{ width: '100vw', display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap' }}>
                        <TextField
                            id="gender"
                            label="Gender"
                            style={{ width: '45%', minWidth: '150px' }}
                            value={this.state.gender}
                            onChange={this.handleChange('gender')}
                        />
                        <TextField
                            id="height"
                            label="Height"
                            style={{ width: '45%', minWidth: '150px' }}
                            value={this.state.height}
                            onChange={this.handleChange('height')}
                        />
                    </div>
                    <div style={{ width: '100vw', display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap' }}>

                        <TextField
                            id="weight"
                            label="Weight"
                            style={{ width: '45%', minWidth: '150px' }}
                            value={this.state.weight}
                            onChange={this.handleChange('weight')}
                        />
                        <TextField
                            id="hairColor"
                            label="Hair Color"
                            style={{ width: '45%', minWidth: '150px' }}
                            value={this.state.hairColor}
                            onChange={this.handleChange('hairColor')}
                        />
                    </div>
                    <div style={{ width: '100vw', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        <TextField
                            id="clothingDescription"
                            label="Clothing Description"
                            helperText="Describe what you'll be wearing on the trail."
                            multiline
                            style={{ width: '45%', minWidth: '300px' }}
                            value={this.state.clothingDescription}
                            onChange={this.handleChange('clothingDescription')}
                        />
                        <TextField
                            id="medications"
                            label="Medications"
                            multiline
                            helperText="List any medications you take."
                            style={{ width: '45%', minWidth: '300px' }}
                            value={this.state.medications}
                            onChange={this.handleChange('medications')}
                        />
                    </div>
                </div>
                <TextField
                    id="medicalIssues"
                    label="Medical Issues"
                    fullWidth
                    multiline
                    helperText="List medical issues emergency responders should know about."
                    value={this.state.medicalIssues}
                    onChange={this.handleChange('medicalIssues')}
                />

                <h2>DESIGNATED CONTACT</h2>
                <p>Worst case scenario: something happens in the backcountry and you don't cancel your alert or respond to our text check-in. Who should we alert?</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    <TextField
                        id="alertContactName"
                        label="Name"
                        style={{ width: '45%', minWidth: '300px' }}
                        value={this.state.alertContactName}
                        onChange={this.handleChange('alertContactName')}
                    />
                    <TextField
                        id="userContactRelationship"
                        label="I am this person's..."
                        value={this.state.userContactRelationship}
                        style={{ width: '45%', minWidth: '300px' }}
                        placeholder='ex) daughter, roommate, friend, partner, etc.'
                        onChange={this.handleChange('userContactRelationship')}
                    />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    <TextField
                        id="alertContactNumber"
                        label="Phone #"
                        style={{ width: '45%', minWidth: '300px' }}
                        placeholder="+1 (555) 666-7777"
                        helperText="Include their country code, area code, and ten digit number."
                        value={this.state.alertContactNumber}
                        onChange={this.handleChange('alertContactNumber')}
                    />
                    <TextField
                        id="alertContactEmail"
                        label="Email"
                        placeholder='email@example.com'
                        style={{ width: '45%', minWidth: '300px' }}
                        value={this.state.alertContactEmail}
                        onChange={this.handleChange('alertContactEmail')}
                    />
                </div>
                <Button variant='contained' style={{ margin: '30px', color: 'white', backgroundColor: 'black' }} onClick={() => this.setAlert()}>Set Alert</Button>
                <Typography variant='caption'>If you don't cancel the alert before your expected return time, we'll text you first to check on you before alerting your designated contact. If we don't hear back from you within in hour - or, if you text us back 'SOS', that's when we alert your contact and email them your trip itinerary and personal info. </Typography>
            </form>} 
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    const { user, alert, modalVisible } = state
    return {
        user,
        alert,
        modalVisible
    }
}

export default connect(mapStateToProps, { updateUser, updateAlert, showModal, hideModal })(SetAlert);