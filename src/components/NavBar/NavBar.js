import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.css'
import Button from '@material-ui/core/Button';

function NavBar(props) {
    const loginLink = props => <Link to="/login" {...props} />
    return (
        <div className='full-header'>
        <div className='trail-angel-header'>
            <Link className='trail-angel-logo' to='/'>Trail Angel</Link>
            </div>
            {props.location.pathname === '/login' ? null :
                <div className='full-nav-bar'>
                    
                        {props.user.username ?
                            <div className='logged-in-display'>
                                <h3 className='hello-user'>hey, {props.user.username}!</h3>
                                {/* is this bad practice? Will it need to be changed if I host? */}
                                <Button variant='contained' style={{color:'white', maxWidth:'50px', maxHeight:'30px', fontSize:'12px', textTransform:'lowercase'}}><a style={{width:"100px"}} href='http://localhost:4000/auth/logout'>Logout</a></Button>
                            </div>
                            :
                            <div className='login-button'>
                            <Button variant='contained'  style={{color:'white'}} component={loginLink}>Log In/Register</Button>
                            </div>}
                    
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