import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Clothing from './resources/Clothing';
import FirstAid from './resources/FirstAid';
import LNT from './resources/LNT';
import Navigation from './resources/Navigation';
import Nutrition from './resources/Nutrition';
import ForDesignatedContacts from './resources/ForDesignatedContacts'
import {connect} from 'react-redux';
import {Menu, Button} from './StyledResources';



class HikerResources extends Component {

    render() {
       
        return (
            <div>
                <Menu>
                <Link to='/resources/clothing'><Button>Clothing</Button></Link>
            
              <Link to='/resources/firstaid'><Button>First Aid</Button></Link>

               <Link to='/resources/LNT'><Button>Leave No Trace</Button></Link>

                <Link to='/resources/navigation'><Button>Navigation</Button></Link>

                <Link to='/resources/nutrition'><Button>Nutrition</Button></Link>
               
                <Link to='/resources/fordesignatedcontacts'><Button>Designated Contacts</Button></Link>
                </Menu>
                
                <Switch>
                    <Route path='/resources/clothing' component={Clothing} />
                    <Route path='/resources/firstaid' component={FirstAid} />
                    <Route path='/resources/LNT' component={LNT} />
                    <Route path='/resources/navigation' component={Navigation} />
                    <Route path='/resources/nutrition' component={Nutrition} />
                    <Route path='/resources/fordesignatedcontacts' component={ForDesignatedContacts} />
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

export default connect(mapStateToProps, {})(HikerResources);