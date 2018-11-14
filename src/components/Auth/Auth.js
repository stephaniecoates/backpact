import React, {Component} from 'react';
import axios from 'axios';

class Auth extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            errMsg: ''
        }
    }

    updateUsername (e) {
        this.setState({
            username: e
        })
    }

    updatePassword(e) {
        this.setState({
            password: e
        })
    }

    async login () {
        if (!this.state.username || !this.state.password) return alert(`Please enter a username and password.`)
        let res = await axios.post(`/auth/login`, {
            username: this.state.username,
            password: this.state.password
        }) 
        let response = res.data.message
        if (response === 'loggedIn'){
            this.props.history.push('/')
            // update user from redux props
        } else {
             this.setState({
                 errMsg: response
             })
        }
    }

    async register () {
        if (!this.state.username || !this.state.password) return alert(`Please enter a username and password.`)
        let res = await axios.post(`/auth/register`, {
            username: this.state.username,
            password: this.state.password
        })
        let response = res.data.message
        // console.log(response)
        if (response === 'loggedIn') {
            this.props.history.push('/')
            // update user from redux props
        } else {
            this.setState({
                errMsg: response
            })
        }
    }

    render () {
        return (
            <div>
                <input type='text' placeholder='username' onChange={(e) => this.updateUsername(e.target.value)} />
                <input type='password' placeholder='password' onChange={(e) => this.updatePassword(e.target.value)} />
                <br/>
                {this.state.errMsg? <p>{this.state.errMsg}</p> : null}
                <button onClick={() => this.login()}>Log In</button>
                <button onClick={() => this.register()}>Register</button>
            </div>
        )
    }
}

export default Auth;