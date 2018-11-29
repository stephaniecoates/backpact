import React, { Component } from 'react';
import { connect } from 'react-redux';
import GearList from './GearList';
import TripChecklist from './TripChecklist';
import { updateAlert } from './../../ducks/reducer';
import Typography from '@material-ui/core/Typography';
import {DashboardContainer, ChecklistContainer, TripChecklistContainer, TripChecklistBox, GearChecklistBox, GearChecklistContainer, ChecklistTitle} from './StyledChecklist';

class ChecklistDashboard extends Component {

    render() {
        return (
            <DashboardContainer>
                <ChecklistTitle>Cover all of your bases before hitting the trail.</ChecklistTitle>
                <ChecklistContainer>
                    <TripChecklistContainer>
                        <Typography variant="overline">Trip Checklist</Typography>
                        <TripChecklistBox>
                            <TripChecklist />
                        </TripChecklistBox>
                    </TripChecklistContainer>
                    <GearChecklistContainer>
                        <Typography variant="overline">Gear List</Typography>
                        <GearChecklistBox>
                            <GearList />
                        </GearChecklistBox>
                    </GearChecklistContainer>
                </ChecklistContainer>

            </DashboardContainer>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state
    return {
        user
    }
}

export default connect(mapStateToProps, { updateAlert })(ChecklistDashboard);