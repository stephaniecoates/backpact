import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

function NavBar (props) {
    console.log('nav bar user', props.user)
        return (
            <div>
                {props.location.pathname === '/login' ? null : <div>
                    this is the nav bar

                    {props.user.username ? <div><h3>Hi, {props.user.username}</h3><Link to='/login'>Log out</Link></div> : <Link to='/login'>Log In/Register</Link>}
                    <br/>
                    <Link to='/'>Home</Link>
                    <br/>
                    <Link to='/hikes'>Browse Trails</Link>
                    <br/>
                    <Link to='/gear'>Pack Your Pack</Link>
                    <br/>
                    <Link to='/setalert'>Set Up an Alert</Link>
                    <br/>
                    <Link to='/finalchecklist'>Final Checklist</Link>
                    <br/>
                    <Link to='/resources'>Hiker Resources</Link>
                </div>}
            </div>


        )
    
}

function mapStateToProps (state) {
    let {user} = state
    return {
        user
    }
}

export default withRouter(connect(mapStateToProps, {})(NavBar));