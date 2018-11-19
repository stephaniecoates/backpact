import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from './../../ducks/reducer';
import GearList from './GearList';
import './GearDashboard.css';
import Button from '@material-ui/core/Button'

class GearDashboard extends Component {

    componentDidMount = async () => {
        let res = await axios.get(`/auth/user-data`)
        this.props.updateUser(res.data)
    }

    render() {
        return (
            <div style={{height: '78vh'}}>
            <h1 className='gear-dashboard-header'>Browse through backpacking items and customize your pack.</h1>
            <div className='gear-container'>
                <GearList />
            </div>
            <div className='add-custom-gear-section'>
            <p className='add-custom-gear-text'>Want to pack something that isn't on our list?</p>
            <Button size='small' style={{maxWidth: '125px', fontSize: '12px', backgroundColor:'black', color: 'white'}}className='add-custom-gear-button' variant='contained'>Add Custom Gear</Button>
            </div>
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