import React, { Component } from 'react';
import {connect} from 'react-redux';
import GearList from './GearList';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class ChecklistDashboard extends Component {

    render() {
        return (
            <div>
            <div className = 'dashboard-container' style={{height: '75vh', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{margin: '0px 30px', width: '75%'}}>
            <p>Trip Checklist</p>
            <div className='gear-container' style={{display: 'flex', height: '60vh', flexDirection: 'column', flexWrap: 'nowrap', border: '2px solid black', overflow: 'scroll'}}>
                <p>Checklist Item</p>
                <p>Checklist Item</p>
                <p>Checklist Item</p>
                <p>Checklist Item</p>
                <p>Checklist Item</p>
                <p>Checklist Item</p>
                <p>Checklist Item</p>
            </div>
            <h3>Browse through our trip and gear checklists to make sure your cover all of your bases before heading out on the trail.</h3>
            </div>
           {/* GEAR PACKING LIST */}
            <div style={{marginRight: '30px', width: '25%'}}>
            <p>Gear</p>
            <div className='gear-container' style={{display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', height: '60vh', border: '2px solid black', overflow: 'scroll'}}>
                <GearList />
            </div>
            <div style={{height: '15vh'}}>
            <TextField
                        id="customGearInput"
                        label="Add custom gear"
                        style={{ width: '80%'}}
                        // onChange={this.handleChange('endingTrailhead')}
                    />
            <Button size='small' style={{width: '8%', margin: '15px 0px 0px 2px', minWidth: '30px', minHeight: '30px', fontSize: '8px', backgroundColor:'black', color: 'white'}}className='add-custom-gear-button' variant='contained'>!</Button>
            </div>
            </div>

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

export default connect(mapStateToProps, {})(ChecklistDashboard);