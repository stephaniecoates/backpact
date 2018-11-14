import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function NavBar(props) {
    return (
        <div className='header'>
            <div className='trail-angel-header'>
                <Link to='/'>Trail Angel</Link>
            </div>

            {props.location.pathname === '/login' ? null :
                <div className='nav-bar'>
                    <div className='top-nav'>
                        {props.user.username ?
                            <div className='logged-in-display'>
                                <h3>Hi, {props.user.username}</h3>
                                <a href='http://localhost:4000/auth/logout'><button>Log Out</button></a>
                            </div>
                            :
                            <Link to='/login'>Log In/Register</Link>}
                    </div>
                    <div className='bottom-nav'>
                        <br />
                        <Link to='/hikes'>Browse Trails</Link>
                        <br />
                        <Link to='/gear'>Pack Your Pack</Link>
                        <br />
                        <Link to='/setalert'>Set Up an Alert</Link>
                        <br />
                        <Link to='/finalchecklist'>Final Checklist</Link>
                        <br />
                        <Link to='/resources'>Hiker Resources</Link>
                    </div>
                </div>}
        </div>
    )
}

function mapStateToProps(state) {
    let { user } = state
    return {
        user
    }
}

export default withRouter(connect(mapStateToProps, {})(NavBar));