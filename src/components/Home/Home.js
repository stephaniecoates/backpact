import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {ContentBox, MainHeading, Details, Button} from './StyledHome';

class Home extends Component {
 
    render () {
       

        return (
            
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '60px'}}>
            <ContentBox>
                <MainHeading>On your next backpacking trip, give yourself (and your mom) some peace of mind.</MainHeading>
                <Details>Backpact is a trip-planning tool to help you stay safe in the backcountry. Run through a trip checklist, browse hiker resources, and set up an alert that'll notify your designated contact if you don't return by your expected end date.</Details>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Link to='/setalert'><Button>Set an Alert</Button></Link>
                    <Link to='/checklist'><Button>Trip Checklist</Button></Link>
                    <Link to='/resources'><Button>Resources</Button> </Link>
                    </div>
                    </ContentBox>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const {user} = state
    return {
        user
    }
}

export default connect(mapStateToProps, {})(Home);