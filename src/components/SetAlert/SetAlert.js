import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import * as moment from 'moment';

var today = moment().format("YYYY-MM-DD")
var todayHour = moment().format("HH:mm")

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
            alertContactEmail: '',
   
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
        let res = await axios.post('/api/createalert', {
            alertId: this.state.alertId,

            trailName: this.state.trailName,
            trailType: this.state.trailType,
            trailGroup: this.state.trailGroup,
            startingTrailhead: this.state.startingTrailhead,
            endingTrailhead: this.state.endingTrailhead,
            roundtripDistance: this.state.roundtripDistance,
            wildernessArea: this.state.wildernessArea,
            nearestTown: this.state.nearestTown,
            state: this.state.state,
            country: this.state.country,
            tripDescription: this.state.tripDescription,

            tripStartTime: this.state.tripStartTime,
            tripStartDate: this.state.tripStartDate,
            tripEndTime: this.state.tripEndTime,
            tripEndDate: this.state.tripEndDate,

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
            alertContactEmail: this.state.alertContactEmail,
        })
        console.log('returned createdAlert', res.data)
    }


    render() {
        console.log(todayHour)
        const inputStyles = {
            margin: '10px auto',
        }
        console.log('setalert state', this.state)
        return (
            <div>
                <div>
                <h2 style={{ textAlign: 'left', marginBottom: '0px' }}>TRAIL INFO</h2>
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
                    multiline
                    style={inputStyles}
                    helperText="Are there other humans/animals in your group? List them here. Otherwise, specify that you're going solo."
                    value={this.state.trailGroup}
                    onChange={this.handleChange('trailGroup')}
                />
                </div>
                <div className='smallinputdiv' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <TextField
                        id="startingTrailhead"
                        label="Starting Trailhead"
                        value={this.state.startingTrailhead}
                        style={{...inputStyles, width: '30%', padding: 'auto 0px', margin: 'auto 0px', minWidth: '200px' }}
                        onChange={this.handleChange('startingTrailhead')}
                    />
                    <TextField
                        id="endingTrailhead"
                        label="Ending Trailhead"
                        value={this.state.endingTrailhead}
                        style={{...inputStyles, width: '30%', padding: 'auto 0px', margin: 'auto 0px', minWidth: '200px' }}
                        onChange={this.handleChange('endingTrailhead')}
                    />
                    <TextField
                        id="roundtripDistance"
                        label="Roundtrip Distance"
                        value={this.state.roundtripDistance}
                        style={{...inputStyles, width: '30%', padding: 'auto 0px', margin: 'auto 0px', minWidth: '200px' }}
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
                <div style={{ width: '100%', margin: '10px auto', display: 'flex', justifyContent: 'space-between' }}>

                    <TextField
                        id="nearestTown"
                        label="Town/City"
                        helperText='If the trail spans multiple towns, list the one nearest the starting trailhead.'
                        value={this.state.nearestTown}
                        style={{ width: '30%' }}
                        onChange={this.handleChange('nearestTown')}
                    />
                    <TextField
                        id="state"
                        label="State"
                        value={this.state.state}
                        style={{ width: '30%' }}
                        onChange={this.handleChange('state')}
                    />
                    <TextField
                        id="country"
                        label="Country"
                        value={this.state.country}
                        style={{ width: '30%' }}
                        onChange={this.handleChange('country')}
                    />
                </div>
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

                <h2 style={{ textAlign: 'left', marginTop: '30px' }}>TRIP DATES</h2>
                <p style={{ textAlign: 'left' }}>I'm leaving...<button display='outlined' onClick={() => {this.setState({
                   tripStartTime: todayHour,
                   tripStartDate: today,
               })}}>right now!</button></p>
            
                <div>
                <div style={{width: '100%', height: 'auto', margin: '0px auto 10px auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',  alignItems: 'flex-end'}}>
                <TextField
                        id="tripStartTime"
                        type='time'
                        helperText='start time'
                        style={{ width: '40%', minWidth: '320px' }}
                        value={this.state.tripStartTime}
                        onChange={this.handleChange('tripStartTime')}
                    />
              
                 
                    <TextField
                        id="tripStartDate"
                        type='date'
                        helperText='start date'
                        style={{ width: '40%', minWidth: '320px' }}
                        value={this.state.tripStartDate}
                        onChange={this.handleChange('tripStartDate')}/>
                 </div>
                </div>

                <p style={{ textAlign: 'left', marginTop: '30px' }}>I'll be back by...</p>
                <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }}>
                    <TextField
                        id="tripEndTime"
                       helperText='anticipated return time'
                        style={{ width: '40%', minWidth: '300px'}}
                        value={this.state.tripEndTime}
                        type='time'
                        onChange={this.handleChange('tripEndTime')}
                    />
                
                 
                    <TextField
                        id="tripEndDate"
                        type='date'
                        style={{ width: '40%', minWidth: '300px' }}
                        helperText='anticipated return date'
                        value={this.state.tripEndDate}
                        onChange={this.handleChange('tripEndDate')}/>
                 
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
                        placeholder="+1 (222) 333-4444"
                        style={{ width: '30%' }}
                        helperText="Include your country code, area code, and ten digit number."
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
                        onChange={this.handleChange('age')}
                    />
                    <TextField
                        id="gender"
                        label="Gender"
                        style={{ width: '18%' }}
                        value={this.state.gender}
                        onChange={this.handleChange('gender')}
                    />
                    <TextField
                        id="height"
                        label="Height"
                        style={{ width: '18%' }}
                        value={this.state.height}
                        onChange={this.handleChange('height')}
                    />
                    <TextField
                        id="weight"
                        label="Weight"
                        style={{ width: '18%' }}
                        value={this.state.weight}
                        onChange={this.handleChange('weight')}
                    />
                    <TextField
                        id="hairColor"
                        label="Hair Color"
                        style={{ width: '18%' }}
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
                        style={{ width: '30%' }}
                        value={this.state.clothingDescription}
                        onChange={this.handleChange('clothingDescription')}
                    />
                    <TextField
                        id="medicalIssues"
                        label="Medical Issues"
                        multiline
                        helperText="List medical issues emergency responders should know about."
                        style={{ width: '30%' }}
                        value={this.state.medicalIssues}
                        onChange={this.handleChange('medicalIssues')}
                    />
                    <TextField
                        id="medications"
                        label="Medications"
                        multiline
                        helperText="List any medications you take."
                        style={{ width: '30%' }}
                        value={this.state.medications}
                        onChange={this.handleChange('medications')}
                    />
                </div>
                <h2 style={{ textAlign: 'left', marginTop: '30px' }}>DESIGNATED CONTACT</h2>
                <p style={{ textAlign: 'left' }}>Worst case scenario: something happens in the backcountry and you don't cancel your alert or respond to our text check-in. Who should we alert?</p>
                <div style={{ width: '100%', margin: '10px auto', display: 'flex', justifyContent: 'space-between' }}>
                    <TextField
                        id="alertContactName"
                        label="Name"
                        style={{ width: '48%' }}
                        value={this.state.alertContactName}
                        onChange={this.handleChange('alertContactName')}
                    />
                    <TextField
                        id="userContactRelationship"
                        label="I am this person's..."
                        value={this.state.userContactRelationship}
                        style={{ width: '48%' }}
                        placeholder='ex) daughter, roommate, friend, partner, etc.'
                        onChange={this.handleChange('userContactRelationship')}
                    />
                </div>
                <div style={{ width: '100%', margin: '10px auto', display: 'flex', justifyContent: 'space-between' }}>
                    <TextField
                        id="alertContactNumber"
                        label="Phone #"
                        style={{ width: '48%' }}
                        placeholder="+1 (555) 666-7777"
                        helperText="Include their country code, area code, and ten digit number."
                        value={this.state.alertContactNumber}
                        onChange={this.handleChange('alertContactNumber')}
                    />
                    <TextField
                        id="alertContactEmail"
                        label="Email"
                        placeholder='email@example.com'
                        style={{ width: '48%' }}
                        value={this.state.alertContactEmail}
                        onChange={this.handleChange('alertContactEmail')}
                    />
                </div>
                <Button variant='contained' style={{ margin: '30px', color: 'white', backgroundColor: 'black' }} onClick={() => this.setAlert()}>Set Alert</Button>
                <Typography style={{ width: '100%' }} variant='caption'>If you don't cancel the alert before your expected return time, we'll text you first to check on you before alerting your designated contact. If we don't hear back from you within in hour - or, if you text us back 'SOS', that's when we alert your contact and email them your trip itinerary and personal info. </Typography>
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