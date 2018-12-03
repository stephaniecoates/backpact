import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser, updateAlert, showModal, hideModal } from '../../ducks/reducer';
import Typography from '@material-ui/core/Typography';
import * as moment from 'moment';
import Modal from './../../Modal/Modal'
import LoginModal from './../../Modal/LoginModal';
import { TiLockClosed } from 'react-icons/ti';
import { IconContext } from 'react-icons';
import { SetAlertForm, SetAlertPage, PleaseLogIn, ActiveAlertDisplay, ActiveAlertHeader, ActiveAlertFooter, ActiveAlertInfo, ScrollingColumn, AlertLine, ColumnContainer, Button } from './StyledSetAlert';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import InputMask from 'react-input-mask';


class SetAlert extends Component {
    constructor() {
        super();

        this.state = {
            alertId: '',

            trailName: '',
            trailType: '',
            trailGroup: '',
            vehicle: '',
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
            isEdited: false

        }
    }

    async componentDidMount() {
        if (this.props.user.id) {
            this.setState({
                alertId: this.props.user.id
            })
        } else {
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

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    async handleSubmit () {
        if (!this.state.isEdited) {
        await axios.post('/api/createalert', {
            alertId: this.state.alertId,

            trailName: this.state.trailName,
            trailType: this.state.trailType,
            trailGroup: this.state.trailGroup,
            vehicle: this.state.vehicle,
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
        let alertRes = await axios.get(`/api/alert-data/${this.props.user.id}`)
        this.props.updateAlert(alertRes.data)
    } else {
        await axios.put('/api/editalert', {
            alertId: this.state.alertId,
            trailName: this.state.trailName,
            trailType: this.state.trailType,
            trailGroup: this.state.trailGroup,
            vehicle: this.state.vehicle,
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
        let alertRes = await axios.get(`/api/alert-data/${this.props.user.id}`)
        this.props.updateAlert(alertRes.data)
    }
}

    editAlert() {
        this.setState({
            alertId: this.state.alertId,
            trailName: this.props.alert.trail_name,
            trailType: this.props.alert.trail_type,
            trailGroup: this.props.alert.trail_group,
            vehicle: this.props.alert.vehicle,
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
            alertContactEmail: this.props.alert.alert_contact_email,
            isEdited: true
        })
        this.props.updateAlert({})
    }

    async cancelAlert() {
        axios.delete(`/api/deletealert/${this.props.alert.alert_id}`)
        this.props.updateAlert({})
        this.props.history.push('/')
    }

    async componentWillUnmount() {
        console.log('resetting redux alert state')
        if (this.props.user.id) {
            let res = await axios.get(`/api/alert-data/${this.props.user.id}`)
            this.props.updateAlert(res.data)
        }
    }

    render() {
        return (
            <SetAlertPage>
                {!this.props.user.id && <Modal><LoginModal /></Modal>}

                {!this.props.user.id ?
                    <PleaseLogIn>
                        <IconContext.Provider value={{ size: '3em' }}>
                            <TiLockClosed />
                        </IconContext.Provider>
                        <h4 style={{ margin: '5px', textTransform: 'uppercase' }}>404: Hiker not found</h4>
                        <p style={{ margin: '20px' }}>Please log in/register to create an alert.</p>
                    </PleaseLogIn>

                    :

                    this.props.alert.trail_name ?

                        <ActiveAlertDisplay>
                            <ActiveAlertHeader>You've got an active alert!</ActiveAlertHeader>
                            <ActiveAlertInfo>
                                <ColumnContainer>
                                    <Typography variant='overline'>Trip Itinerary</Typography>
                                    <ScrollingColumn>
                                        <AlertLine>Trip Start: {moment(this.props.alert.trip_start).format("dddd, MMMM Do YYYY [at] h:mma")}</AlertLine>
                                        <AlertLine>Trip End: {moment(this.props.alert.trip_start).format("dddd, MMMM Do YYYY [at] h:mma")}</AlertLine>
                                        <AlertLine>Trail Name: {this.props.alert.trail_name}</AlertLine>
                                        <AlertLine>Trail Type: {this.props.alert.trail_type}</AlertLine>
                                        <AlertLine>Trail Group: {this.props.alert.trail_group}</AlertLine>
                                        <AlertLine>Vehicle at Trailhead: {this.props.alert.vehicle}</AlertLine>
                                        <AlertLine>Starting Trailhead: {this.props.alert.starting_trailhead}</AlertLine>
                                        <AlertLine>Ending Trailhead: {this.props.alert.ending_trailhead}</AlertLine>
                                        <AlertLine>Roundtrip Distance: {this.props.alert.roundtrip_distance}</AlertLine>
                                        <AlertLine>Town: {this.props.alert.nearest_town}</AlertLine>
                                        <AlertLine>State: {this.props.alert.state}</AlertLine>
                                        <AlertLine>Country: {this.props.alert.country}</AlertLine>
                                        <AlertLine>Trip Description: {this.props.alert.trip_description}</AlertLine>
                                    </ScrollingColumn>
                                </ColumnContainer>
                                <ColumnContainer>
                                    <Typography variant='overline'>Your Info</Typography>
                                    <ScrollingColumn>
                                        <AlertLine>First Name: {this.props.alert.first_name}</AlertLine>
                                        <AlertLine>Last Name: {this.props.alert.last_name}</AlertLine>
                                        <AlertLine>Age: {this.props.alert.age}</AlertLine>
                                        <AlertLine>Phone Number: {this.props.alert.user_phone_number}</AlertLine>
                                        <AlertLine>Gender: {this.props.alert.gender}</AlertLine>
                                        <AlertLine>Height: {this.props.alert.height}</AlertLine>
                                        <AlertLine>Weight: {this.props.alert.weight}</AlertLine>
                                        <AlertLine>Hair Color: {this.props.alert.hair_color}</AlertLine>
                                        <AlertLine>Clothing Description: {this.props.alert.clothing_description}</AlertLine>
                                        <AlertLine>Medications: {this.props.alert.medications}</AlertLine>
                                        <AlertLine>Medical Issues: {this.props.alert.medical_issues}</AlertLine>
                                    </ScrollingColumn>
                                </ColumnContainer>
                                <ColumnContainer>
                                    <Typography variant='overline'>Your Contact</Typography>
                                    <ScrollingColumn>
                                        <AlertLine>Your Contact's Name: {this.props.alert.alert_contact_name}</AlertLine>
                                        <AlertLine>You are {this.props.alert.alert_contact_name}'s: {this.props.alert.user_contact_relationship}</AlertLine>
                                        <AlertLine>{this.props.alert.alert_contact_name}'s Phone Number: {this.props.alert.alert_contact_number}</AlertLine>
                                        <AlertLine>{this.props.alert.alert_contact_name}'s Email: {this.props.alert.alert_contact_email}</AlertLine>
                                    </ScrollingColumn>
                                </ColumnContainer>
                            </ActiveAlertInfo>
                            <div>
                                <ActiveAlertFooter>You can only set one alert at a time. <br></br> If you'd like to make a change, please edit or delete your current alert.</ActiveAlertFooter>
                                <Button onClick={() => this.editAlert()}>Edit</Button>
                                <Button onClick={() => this.cancelAlert()}>Delete</Button>
                            </div>

                        </ActiveAlertDisplay>

                        :

                        <SetAlertForm>
                            <ValidatorForm
                                ref="form"
                                onSubmit={() => this.handleSubmit()}
                                onError={errors => console.log(errors)}>
                                <h2>TRAIL INFO</h2>
                                <TextValidator
                                    name="trailName"
                                    fullWidth
                                    margin='normal'
                                    label="Trail Name"
                                    placeholder="ex) Collegiate Peaks Loop"
                                    value={this.state.trailName}
                                    validators={[`required`]}
                                    errorMessages={['this field is required']}
                                    onChange={this.handleChange('trailName')}
                                />
                                <TextValidator
                                    name="trailType"
                                    fullWidth
                                    margin='normal'
                                    label="Trail Type"
                                    placeholder='Loop, Out and Back, Point to Point, etc.'
                                    value={this.state.trailType}
                                    validators={[`required`]}
                                    errorMessages={['this field is required']}
                                    onChange={this.handleChange('trailType')}
                                />
                                <TextValidator
                                    name="trailGroup"
                                    fullWidth
                                    margin='normal'
                                    label="Group Size"
                                    multiline
                                    helperText="Are there other humans/animals in your group? List their names here. Otherwise, specify that you're going solo."
                                    value={this.state.trailGroup}
                                    validators={[`required`]}
                                    errorMessages={['this field is required']}
                                    onChange={this.handleChange('trailGroup')}
                                />
                                <TextValidator
                                    name="vehicle"
                                    label="Vehicle at Trailhead"
                                    fullWidth
                                    margin='normal'
                                    placeholder="Blue 2011 Honda CR-V"
                                    helperText="List the color, make, model, and year of the vehicle left at the starting trailhead. If you didn't drive a car and leave it at the trailhead, specify what transportation you took to the trail."
                                    value={this.state.vehicle}
                                    validators={[`required`]}
                                    errorMessages={['this field is required']}
                                    onChange={this.handleChange('vehicle')}
                                />
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                                    <TextValidator
                                        name="startingTrailhead"
                                        label="Starting Trailhead"
                                        value={this.state.startingTrailhead}
                                        style={{ width: '45%', minWidth: '300px' }}
                                        margin='normal'
                                        validators={[`required`]}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('startingTrailhead')}
                                    />
                                    <TextValidator
                                        name="endingTrailhead"
                                        label="Ending Trailhead"
                                        value={this.state.endingTrailhead}
                                        style={{ width: '45%', minWidth: '300px' }}
                                        margin='normal'
                                        validators={[`required`]}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('endingTrailhead')}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                                    <TextValidator
                                        name="roundtripDistance"
                                        label="Roundtrip Distance"
                                        value={this.state.roundtripDistance}
                                        margin='normal'
                                        style={{ width: '45%', minWidth: '300px' }}
                                        validators={[`required`]}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('roundtripDistance')}
                                    />
                                    <TextValidator
                                        name="nearestTown"
                                        label="Town/City"
                                        helperText='If the trail spans multiple towns, list the one nearest the starting trailhead.'
                                        value={this.state.nearestTown}
                                        style={{ width: '45%', minWidth: '300px' }}
                                        margin='normal'
                                        validators={[`required`]}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('nearestTown')}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                                    <TextValidator
                                        name="state"
                                        label="State"
                                        value={this.state.state}
                                        style={{ width: '45%', minWidth: '300px' }}
                                        margin='normal'
                                        validators={[`required`]}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('state')}
                                    />
                                    <TextValidator
                                        name="country"
                                        label="Country"
                                        fullWidth
                                        value={this.state.country}
                                        style={{ width: '45%', minWidth: '300px' }}
                                        margin='normal'
                                        validators={[`required`]}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('country')}
                                    />
                                </div>
                                <div>
                                    <TextValidator
                                        name="tripDescription"
                                        label="Trip Description"
                                        rows='4'
                                        multiline
                                        fullWidth
                                        margin='normal'
                                        helperText="Give us an overview of your trip plans. Be as detailed with your itinerary as you'd like."
                                        placeholder="Ex) Doing a solo backpacking trip around the Collegiate Peaks - 80 miles south on Colorado Trail, then hooking up with the Continental Divide Trail and going 80 miles north on that back to Twin Lakes TH. Planning on doing 16-18 miles a day. Taking side trips to summit Mt. Princeton on day 4 and Mt. Yale on day 6. Food resupply at Monarch Pass Souvenir Shop on day 5."
                                        value={this.state.tripDescription}
                                        validators={[`required`]}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('tripDescription')}
                                    />
                                </div>

                                <h2>TRIP DATES</h2>
                                <p>I'm leaving...</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                                    <TextValidator
                                        name="tripStartTime"
                                        type='time'
                                        helperText='start time'
                                        style={{ width: '45%', minWidth: '300px' }}
                                        margin='normal'
                                        value={this.state.tripStartTime}
                                        validators={[`required`]}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('tripStartTime')}
                                    />
                                    <TextValidator
                                        name="tripStartDate"
                                        type='date'
                                        helperText='start date'
                                        margin='normal'
                                        style={{ width: '45%', minWidth: '300px' }}
                                        value={this.state.tripStartDate}
                                        validators={[`required`]}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('tripStartDate')} />
                                </div>

                                <p>I'll be back by...</p>
                                <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                                    <TextValidator
                                        name="tripEndTime"
                                        helperText='anticipated return time'
                                        type='time'
                                        style={{ width: '45%', minWidth: '300px' }}
                                        margin='normal'
                                        value={this.state.tripEndTime}
                                        validators={[`required`]}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('tripEndTime')}
                                    />
                                    <TextValidator
                                        name="tripEndDate"
                                        type='date'
                                        helperText='anticipated return date'
                                        style={{ width: '45%', minWidth: '300px' }}
                                        margin='normal'
                                        value={this.state.tripEndDate}
                                        validators={[`required`]}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('tripEndDate')} />
                                </div>

                                <h2>ABOUT ME</h2>
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>

                                    <TextValidator
                                        name="firstName"
                                        label="First Name"
                                        style={{ width: '45%', minWidth: '300px' }}
                                        margin='normal'
                                        value={this.state.firstName}
                                        validators={[`required`]}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('firstName')}
                                    />
                                    <TextValidator
                                        name="lastName"
                                        label="Last Name"
                                        style={{ width: '45%', minWidth: '300px' }}
                                        margin='normal'
                                        value={this.state.lastName}
                                        validators={[`required`]}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('lastName')}
                                    />
                                    <TextValidator
                                        name="age"
                                        label="Age"
                                        style={{ width: '45%', minWidth: '300px' }}
                                        margin='normal'
                                        value={this.state.age}
                                        validators={[`required`]}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('age')}
                                    />

                                    <InputMask
                                        mask="(9) 999 999 9999"
                                        alwaysShowMask='true'
                                        value={this.state.userPhoneNumber}
                                        onChange={this.handleChange('userPhoneNumber')}>
                                        {() => <TextValidator
                                            name="userPhoneNumber"
                                            label="Phone #"
                                            style={{ width: '45%', minWidth: '300px' }}
                                            margin='normal'
                                            helperText="Include your country code, area code, and ten digit number."
                                            value={this.state.userPhoneNumber}
                                            validators={[`required`]}
                                            errorMessages={['this field is required']}

                                        />}</InputMask>

                                    <div style={{ width: '100vw', display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap' }}>
                                        <TextValidator
                                            name="gender"
                                            label="Gender"
                                            style={{ width: '45%', minWidth: '150px' }}
                                            margin='normal'
                                            value={this.state.gender}
                                            validators={[`required`]}
                                            errorMessages={['this field is required']}
                                            onChange={this.handleChange('gender')}
                                        />
                                        <TextValidator
                                            name="height"
                                            label="Height"
                                            style={{ width: '45%', minWidth: '150px' }}
                                            margin='normal'
                                            value={this.state.height}
                                            validators={[`required`]}
                                            errorMessages={['this field is required']}
                                            onChange={this.handleChange('height')}
                                        />
                                    </div>
                                    <div style={{ width: '100vw', display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap' }}>

                                        <TextValidator
                                            name="weight"
                                            label="Weight"
                                            style={{ width: '45%', minWidth: '150px' }}
                                            margin='normal'
                                            value={this.state.weight}
                                            validators={[`required`]}
                                            errorMessages={['this field is required']}
                                            onChange={this.handleChange('weight')}
                                        />
                                        <TextValidator
                                            name="hairColor"
                                            label="Hair Color"
                                            style={{ width: '45%', minWidth: '150px' }}
                                            margin='normal'
                                            value={this.state.hairColor}
                                            validators={[`required`]}
                                            errorMessages={['this field is required']}
                                            onChange={this.handleChange('hairColor')}
                                        />
                                    </div>
                                    <div style={{ width: '100vw', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                        <TextValidator
                                            name="clothingDescription"
                                            label="Clothing Description"
                                            helperText="Describe what you'll be wearing on the trail."
                                            multiline
                                            style={{ width: '45%', minWidth: '300px' }}
                                            margin='normal'
                                            value={this.state.clothingDescription}
                                            validators={[`required`]}
                                            errorMessages={['this field is required']}
                                            onChange={this.handleChange('clothingDescription')}
                                        />
                                        <TextValidator
                                            name="medications"
                                            label="Medications"
                                            multiline
                                            helperText="List any medications you take."
                                            margin='normal'
                                            style={{ width: '45%', minWidth: '300px' }}
                                            value={this.state.medications}
                                            validators={[`required`]}
                                            errorMessages={['this field is required']}
                                            onChange={this.handleChange('medications')}
                                        />
                                    </div>
                                </div>
                                <TextValidator
                                    name="medicalIssues"
                                    label="Medical Issues"
                                    fullWidth
                                    multiline
                                    margin='normal'
                                    helperText="List medical issues emergency responders should know about."
                                    value={this.state.medicalIssues}
                                    validators={[`required`]}
                                    errorMessages={['this field is required']}
                                    onChange={this.handleChange('medicalIssues')}
                                />

                                <h2>DESIGNATED CONTACT</h2>
                                <p>Worst case scenario: something happens in the backcountry and you don't cancel your alert or respond to our text check-in. Who should we alert?</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                                    <TextValidator
                                        name="alertContactName"
                                        label="Name"
                                        style={{ width: '45%', minWidth: '300px' }}
                                        margin='normal'
                                        value={this.state.alertContactName}
                                        validators={[`required`]}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('alertContactName')}
                                    />
                                    <TextValidator
                                        name="userContactRelationship"
                                        label="I am this person's..."
                                        value={this.state.userContactRelationship}
                                        style={{ width: '45%', minWidth: '300px' }}
                                        placeholder='ex) daughter, roommate, friend, partner, etc.'
                                        margin='normal'
                                        validators={[`required`]}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('userContactRelationship')}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>

                                    <InputMask
                                        mask="(9) 999 999 9999"
                                        alwaysShowMask='true'
                                        value={this.state.alertContactNumber}
                                        onChange={this.handleChange('alertContactNumber')}>
                                        {() => <TextValidator
                                            name="alertContactNumber"
                                            label="Phone #"
                                            style={{ width: '45%', minWidth: '300px' }}
                                            margin='normal'
                                            helperText="Include their country code, area code, and ten digit number."
                                            value={this.state.alertContactNumber}
                                            validators={[`required`]}
                                            errorMessages={['this field is required']}

                                        />}</InputMask>

                                    <TextValidator
                                        name="alertContactEmail"
                                        label="Email"
                                        placeholder='email@example.com'
                                        style={{ width: '45%', minWidth: '300px' }}
                                        margin='normal'
                                        value={this.state.alertContactEmail}
                                        validators={[`required`, 'isEmail']}
                                        errorMessages={['this field is required', 'please enter a valid email']}
                                        onChange={this.handleChange('alertContactEmail')}
                                    />
                                </div>
                                

                                    <Button variant='contained' type='submit' style={{ margin: '30px', color: 'white', backgroundColor: 'black' }}>Submit</Button>
                                    <div>{this.props.onError}</div>

                                <Typography variant='caption'>If you don't cancel the alert before your expected return time, we'll text you first to check on you before alerting your designated contact. If we don't hear back from you within in hour - or, if you text us back 'SOS', that's when we alert your contact and email them your trip itinerary and personal info. </Typography>
                            </ValidatorForm>
                        </SetAlertForm>}

            </SetAlertPage>

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