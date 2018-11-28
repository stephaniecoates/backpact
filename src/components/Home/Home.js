import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {ContentBox, MainHeading, SubHead, Details, Button} from './StyledHome';
class Home extends Component {
 
    render () {
       

        return (
            
            <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
            <ContentBox>
                <MainHeading>Give yourself (and your mom) some peace of mind.</MainHeading>
                <SubHead>On your next hiking adventure, let us have your back.</SubHead>
                <Details>Backpact is a trip-planning tool designed to help you stay safe in the backcountry. Browse hikes, run through a customized trip checklist, and set up an alert to notify a designated contact if you don't return by your expected end date.</Details>
                {this.props.user.username ? <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button><Link to='/hikes'>Find a Hike</Link></Button> 
                    <Link to='/setalert'><Button>Set an Alert</Button></Link>
                    <Link to='/checklist'><Button>Trip Checklist</Button></Link>
                    </div>
                    : null
                    }
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