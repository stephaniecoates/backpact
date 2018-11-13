import React, {Component} from 'react';

class Auth extends Component {
    constructor() {
        super();

        this.state = {
            username: ''
        }
    }
    render () {
        return (
            <div>
                Log in
                Register
            </div>
        )
    }
}

export default Auth;