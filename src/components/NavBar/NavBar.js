import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function NavBar (props) {
        return (
            <div>
                {props.location.pathname === '/login' ? null : <div>

                    {/* replace true with req.session.user check */}

                    {false ? <div><h3>Hi, user!</h3><Link to='/login'>Log out</Link></div> : <Link to='/login'>Log In/Register</Link>}

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

export default withRouter(NavBar);