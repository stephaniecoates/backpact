import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from './../../ducks/reducer';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class SetAlert extends Component {
    constructor() {
        super();

        this.state = {
            alertId: '',

            trailName: '',
            trailType: '',
            trailGroup: '',
            startingTrailhead: '',
            endingTrailhead: '',
            roundtripDistance: '',
            wildernessArea: '',
            tripDescription: '',
            nearestTown: '',
            state: '',
            country: '',
            timezone: '',

            tripStartHour: '',
            tripStartMonth: '',
            tripStartDate: '',
            tripStartYear: '',
            tripEndHour: '',
            tripEndMonth: '',
            tripEndDate: '',
            tripEndYear: '',

            firstName: '',
            lastName: '',
            userPhoneNumber: '',
            age: '',
            gender: '',
            height: '',
            weight: '',
            hairColor: '',
            clothingDescription: '',
            medicalIssues: '',
            medications: '',

            alertContactName: '',
            userContactRelationship: '',
            alertContactNumber: '',
            alertContactEmail: ''
        }
    }

    componentDidMount = async () => {
        let res = await axios.get(`/auth/user-data`)
        console.log(res.data)
        this.setState({
            alertId: res.data.id
        })
        this.props.updateUser(res.data)
    }





    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    async setAlert() {
        let res = await axios.post('/api/setalert', {
            alertId: this.state.alertId,

            trailName: this.state.trailName,
            trailType: this.state.trailType,
            trailGroup: this.state.trailGroup,
            startingTrailhead: this.state.startingTrailhead,
            endingTrailhead: this.state.endingTrailhead,
            roundtripDistance: this.state.roundtripDistance,
            wildernessArea: this.state.wildernessArea,
            tripDescription: this.state.tripDescription,
            nearestTown: this.state.nearestTown,
            state: this.state.state,
            country: this.state.country,
            timezone: this.state.timezone,

            tripStartHour: this.state.tripStartHour,
            tripStartMonth: this.state.tripStartMonth,
            tripStartDate: this.state.tripStartDate,
            tripStartYear: this.state.tripStartYear,
            tripEndHour: this.state.tripEndHour,
            tripEndMonth: this.state.tripEndMonth,
            tripEndDate: this.state.tripEndDate,
            tripEndYear: this.state.tripEndYear,

            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userPhoneNumber: this.state.userPhoneNumber,
            age: this.state.age,
            gender: this.state.gender,
            height: this.state.height,
            weight: this.state.weight,
            hairColor: this.state.hairColor,
            clothingDescription: this.state.clothingDescription,
            medicalIssues: this.state.medicalIssues,
            medications: this.state.medications,

            alertContactName: this.state.alertContactName,
            userContactRelationship: this.state.userContactRelationship,
            alertContactNumber: this.state.alertContactNumber,
            alertContactEmail: this.state.alertContactEmail
        })
        console.log('returned createdAlert', res.data)
    }


    render() {
        const inputStyles = {
            margin: '10px auto'
        }
        console.log('setalert state', this.state)
        return (
            <div>
                <h2 style={{ textAlign: 'left' }}>TRAIL INFO</h2>
                <TextField
                    id="trailName"
                    fullWidth
                    label="Trail Name"
                    placeholder="ex) Collegiate Peaks Loop"
                    value={this.state.trailName}
                    style={inputStyles}
                    onChange={this.handleChange('trailName')}
                />
                <TextField
                    id="trailType"
                    fullWidth
                    label="Trail Type"
                    placeholder='Loop, Out and Back, Point to Point, etc.'
                    value={this.state.trailType}
                    style={inputStyles}
                    onChange={this.handleChange('trailType')}
                />
                <TextField
                    id="trailGroup"
                    fullWidth
                    label="Group Size"
                    style={inputStyles}
                    helperText="Are there other humans/animals in your group? List them here. Otherwise, specify that you're going solo."
                    value={this.state.trailGroup}
                    onChange={this.handleChange('trailGroup')}
                />
                <div style={{ width: '100%', margin: '10px auto', display: 'flex', justifyContent: 'space-between' }}>
                    <TextField
                        id="startingTrailhead"
                        label="Starting Trailhead"
                        rows='2'
                        multiline
                        value={this.state.startingTrailhead}
                        style={{ width: '30%' }}
                        onChange={this.handleChange('startingTrailhead')}
                    />
                    <TextField
                        id="endingTrailhead"
                        label="Ending Trailhead"
                        rows='2'
                        multiline
                        value={this.state.endingTrailhead}
                        style={{ width: '30%' }}
                        onChange={this.handleChange('endingTrailhead')}
                    />
                    <TextField
                        id="roundtripDistance"
                        label="Roundtrip Distance"
                        rows='2'
                        multiline
                        value={this.state.roundtripDistance}
                        style={{ width: '30%' }}
                        onChange={this.handleChange('roundtripDistance')}
                    />
                </div>

                <TextField
                    id="wildernessArea"
                    label="Wilderness Area"
                    fullWidth
                    style={inputStyles}
                    placeholder="ex) Collegiate Peaks Wilderness, San Juan National Forest"
                    value={this.state.wildernessArea}
                    onChange={this.handleChange('wildernessArea')}
                />
                <TextField
                    id="tripDescription"
                    label="Trip Description"
                    style={inputStyles}
                    rows='4'
                    multiline
                    fullWidth
                    helperText="Give us an overview of your trip plans. Be as detailed with your itinerary as you'd like."
                    placeholder="Ex) Doing a solo backpacking trip around the Collegiate Peaks - 80 miles south on Colorado Trail, then hooking up with the Continental Divide Trail and going 80 miles north on that back to Twin Lakes TH. Planning on doing 16-18 miles a day. Taking side trips to summit Mt. Princeton on day 4 and Mt. Yale on day 6. Food resupply at Monarch Pass Souvenir Shop on day 5."
                    value={this.state.tripDescription}
                    onChange={this.handleChange('tripDescription')}
                />
                <div style={{ width: '100%', margin: '10px auto', display: 'flex', justifyContent: 'space-between' }}>

                    <TextField
                        id="nearestTown"
                        label="Town/City"
                        helperText='If the trail spans multiple towns, list the one nearest the starting trailhead.'
                        value={this.state.nearestTown}
                        style={{ width: '23%' }}
                        onChange={this.handleChange('nearestTown')}
                    />
                    <TextField
                        id="state"
                        label="State"
                        value={this.state.state}
                        style={{ width: '23%' }}
                        onChange={this.handleChange('state')}
                    />
                    <TextField
                        id="country"
                        label="Country"
                        value={this.state.country}
                        style={{ width: '23%' }}
                        onChange={this.handleChange('country')}
                    />
                    <TextField
                        id="timezone"
                        label="Timezone"
                        value={this.state.timezone}
                        style={{ width: '23%' }}
                        onChange={this.handleChange('timezone')}
                    />
                </div>

                <h2 style={{ textAlign: 'left', marginTop: '30px' }}>TRIP DATES</h2>
                <p style={{ textAlign: 'left' }}>I'm leaving at...</p>
                <div style={{ width: '100%', margin: '0px auto 10px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <TextField
                        id="tripStartHour"
                        label="Hour"
                        style={{ width: '20%' }}
                        value={this.state.tripStartHour}
                        onChange={this.handleChange('tripStartHour')}
                    />
                    on
                    <TextField
                        id="tripStartMonth"
                        label="MM"
                        style={{ width: '15%' }}
                        value={this.state.tripStartMonth}
                        onChange={this.handleChange('tripStartMonth')}
                    />
                    /
                <TextField
                        id="tripStartDate"
                        label="DD"
                        style={{ width: '15%' }}
                        value={this.state.tripStartDate}
                        onChange={this.handleChange('tripStartDate')}
                    />
                    /
                    <TextField
                        id="tripStartYear"
                        label="YYYY"
                        style={{ width: '15%' }}
                        value={this.state.tripStartYear}
                        onChange={this.handleChange('tripStartYear')}
                    />
                </div>

                <p style={{ textAlign: 'left', marginTop: '30px' }}>I'll be back by...</p>
                <div style={{ width: '100%', margin: '0px auto 10px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <TextField
                        id="tripEndHour"
                        label="Hour"
                        style={{ width: '20%' }}
                        value={this.state.tripEndHour}
                        onChange={this.handleChange('tripEndHour')}
                    />
                    on
                    <TextField
                        id="tripEndMonth"
                        label="MM"
                        style={{ width: '15%' }}
                        value={this.state.tripEndMonth}
                        onChange={this.handleChange('tripEndMonth')}
                    />
                    /
                    <TextField
                        id="tripEndDate"
                        label="DD"
                        style={{ width: '15%' }}
                        value={this.state.tripEndDate}
                        onChange={this.handleChange('tripEndDate')}
                    />
                    /
                    <TextField
                        id="tripEndYear"
                        label="YYYY"
                        style={{ width: '15%' }}
                        value={this.state.tripEndYear}
                        onChange={this.handleChange('tripEndYear')}
                    />
                </div>

                <h2 style={{ textAlign: 'left', marginTop: '30px' }}>ABOUT ME</h2>
                <div style={{ width: '100%', margin: '10px auto', display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    id="firstName"
                    label="First Name"
                    style={{ width: '30%' }}
                    value={this.state.firstName}
                    onChange={this.handleChange('firstName')}
                />
                <TextField
                    id="lastName"
                    label="Last Name"
                    style={{ width: '30%' }}
                    value={this.state.lasttName}
                    onChange={this.handleChange('lastName')}
                />
                 <TextField
                    id="userPhoneNumber"
                    label="Phone #"
                    style={{ width: '30%' }}
                    helperText="Please list your country code, area code, and ten digit number with no dashes."
                    value={this.state.userPhoneNumber}
                    onChange={this.handleChange('userPhoneNumber')}
                />
                </div>
                <div style={{ width: '100%', margin: '10px auto', display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    id="age"
                    label="Age"
                    style={{ width: '18%' }}
                    value={this.state.age}
                    rows='2'
                    multiline
                    onChange={this.handleChange('age')}
                />
                <TextField
                    id="gender"
                    label="Gender"
                    style={{ width: '18%' }}
                    value={this.state.gender}
                    rows='2'
                    multiline
                    onChange={this.handleChange('gender')}
                />
                <TextField
                    id="height"
                    label="Height"
                    style={{ width: '18%' }}
                    value={this.state.height}
                    rows='2'
                    multiline
                    onChange={this.handleChange('height')}
                />
                <TextField
                    id="weight"
                    label="Weight"
                    style={{ width: '18%' }}
                    value={this.state.weight}
                    rows='2'
                    multiline
                    onChange={this.handleChange('weight')}
                />
                <TextField
                    id="hairColor"
                    label="Hair Color"
                    style={{ width: '18%' }}
                    rows='2'
                    multiline
                    value={this.state.hairColor}
                    onChange={this.handleChange('hairColor')}
                />
                </div>
                <div style={{ width: '100%', margin: '45px auto 10px auto', display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    id="clothingDescription"
                    label="Clothing Description"
                    helperText="Describe what you'll be wearing on the trail."
                    multiline
                    rows="2"
                    style={{ width: '30%' }}
                    value={this.state.clothingDescription}
                    onChange={this.handleChange('clothingDescription')}
                />
                <TextField
                    id="medicalIssues"
                    label="Medical Issues"
                    helperText="List medical issues emergency responders should know about."
                    multiline
                    rows="2"
                    style={{ width: '30%' }}
                    value={this.state.medicalIssues}
                    onChange={this.handleChange('medicalIssues')}
                />
                <TextField
                    id="medications"
                    label="Medications"
                    helperText="List any medications you take."
                    multiline
                    rows="2"
                    style={{ width: '30%' }}
                    value={this.state.medications}
                    onChange={this.handleChange('medications')}
                />
                </div>
                <h2 style={{ textAlign: 'left', marginTop: '30px' }}>DESIGNATED CONTACT</h2>
                <p style={{ textAlign: 'left'}}>Worst case scenario: something happens in the backcountry and you don't cancel your alert or respond to our text check-in. Who should we alert?</p>
                <div style={{ width: '100%', margin: '10px auto', display: 'flex', justifyContent: 'space-between' }}>
                  <TextField
                    id="alertContactName"
                    label="Name"
                    rows='2'
                    multiline
                    style={{ width: '48%' }}
                    value={this.state.alertContactName}
                    onChange={this.handleChange('alertContactName')}
                />
                <TextField
                    id="userContactRelationship"
                    label="I am this person's..."
                    rows='2'
                    multiline
                    value={this.state.userContactRelationship}
                    style={{ width: '48%' }}
                    placeholder='ex) Mother, friend, partner, etc.'
                    onChange={this.handleChange('userContactRelationship')}
                />
                </div>
                <div style={{ width: '100%', margin: '10px auto', display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    id="alertContactNumber"
                    label="Phone #"
                    style={{ width: '48%' }}
                    value={this.state.alertContactNumber}
                    onChange={this.handleChange('alertContactNumber')}
                />
                <TextField
                    id="alertContactEmail"
                    label="Email"
                    style={{ width: '48%' }}
                    value={this.state.alertContactEmail}
                    onChange={this.handleChange('alertContactEmail')}
                />
            </div>
            <Typography style={{width: '100%', margin: '50px auto'}} variant='caption'>If you don't cancel the alert before your expected return time, we'll text you first to check on you before alerting your designated contact. If we don't hear back from you within in hour - or, if you text us back 'SOS', that's when we alert your contact and email them your trip itinerary and personal info. </Typography>
            <Button onClick={()=> this.setAlert()}>Set Alert</Button>
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

export default connect(mapStateToProps, { updateUser })(SetAlert);