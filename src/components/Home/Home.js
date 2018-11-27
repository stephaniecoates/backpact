import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button'
import './Home.css'

class Home extends Component {
 
    render () {
        return (
            
            <div className='home-background'>
            <div className='home-content'>
                <h1 className='main'>For your next backpacking adventure, give yourself (and your mom) some peace of mind.</h1>
                <h1 className='second'>Trail Angel takes the guesswork out of trip planning.</h1>
                {this.props.user.username ? <div className='home-buttons'>
                    <Button style={{padding: '10px', margin:'10px 10px 10px 0px'}} variant='outlined' component={Link} to='/hikes'>Find a Hike</Button> 
                    <Button style={{padding: '10px', margin: '10px'}} variant='outlined' component={Link} to='/gear'>Pack your Pack</Button>
                    <Button style={{padding: '10px', margin: '10px'}} variant='outlined' component={Link} to='/setalert'>Set an Alert</Button>
                    </div>
                    : null
                    }
                    </div>
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