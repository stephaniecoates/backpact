import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Clothing from './resources/Clothing';
import FirstAid from './resources/FirstAid';
import LNT from './resources/LNT';
import Navigation from './resources/Navigation';
import Nutrition from './resources/Nutrition';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from './../../ducks/reducer';



class HikerResources extends Component {

    componentDidMount = async () => {
        let res = await axios.get(`/auth/user-data`)
        console.log('hikerresources component user', res.data)
        this.props.updateUser(res.data)
    }

    render() {
        return (
            <div>
                <h1>Hiker Resources</h1>
                <button><Link to='/resources/clothing'>Clothing</Link></button>
            
                <button><Link to='/resources/firstaid'>First Aid</Link></button>

                <button><Link to='/resources/LNT'>Leave No Trace</Link></button>

                <button><Link to='/resources/navigation'>Navigation</Link></button>

                <button><Link to='/resources/nutrition'>Nutrition</Link></button>

                <Switch>
                    <Route path='/resources/clothing' component={Clothing} />
                    <Route path='/resources/firstaid' component={FirstAid} />
                    <Route path='/resources/LNT' component={LNT} />
                    <Route path='/resources/navigation' component={Navigation} />
                    <Route path='/resources/nutrition' component={Nutrition} />
                </Switch>
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

export default connect(mapStateToProps, {updateUser})(HikerResources);