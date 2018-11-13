import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render () {
        return (
            <div>
                <h1>For big backpacking adventures, give yourself (and mom) peace of mind.</h1>
                <h2>Trail Angel makes sure there are no holes in your trip plan.</h2>
                <h2>We'll also send an alert to a loved one if you don't show by your expected return date.</h2>
                {/* replace boolean with req.session.user check */}
                {false ? <div><Link to='/hikes'>Browse Hikes</Link><Link to='gear'>Pack Your Pack</Link><Link to='setalert'>Set An Alert</Link><Link to='resources'>Browse Hiker Resources</Link></div> : <Link to='/login'>Log In/Register</Link>}
            </div>
        )
    }
}

export default Home;