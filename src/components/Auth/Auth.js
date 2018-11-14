import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from './../../ducks/reducer';

class Auth extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            errMsg: ''
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    updateUsername(e) {
        this.setState({
            username: e
        })
    }

    updatePassword(e) {
        this.setState({
            password: e
        })
    }

    async componentDidMount() {
        let res = await axios.get(`/auth/user-data`)
        console.log('navbar component user', res.data)
        this.props.updateUser(res.data)
    }

    async login() {
        if (!this.state.username || !this.state.password) return alert(`Please enter a username and password.`)
        let res = await axios.post(`/auth/login`, {
            username: this.state.username,
            password: this.state.password
        })
        let response = res.data.message
        if (response === 'loggedIn') {
            this.props.history.push('/')
            // update user from redux props
        } else {
            this.setState({
                errMsg: response
            })
        }
    }

    async register() {
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

    render() {

        return (
            <div>
                {/* is there a better place to put this redirect? */}
                {this.props.user.username ? this.props.history.push('/home') :
                    <div>
                        <input type='text' placeholder='username' onChange={(e) => this.updateUsername(e.target.value)} />
                        <input type='password' placeholder='password' onChange={(e) => this.updatePassword(e.target.value)} />
                        <br />
                        {this.state.errMsg ? <p>{this.state.errMsg}</p> : null}
                        <button onClick={() => this.login()}>Log In</button>
                        <button onClick={() => this.register()}>Register</button>
                    </div>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state
    return {
        user
    }
}

export default connect(mapStateToProps, {updateUser})(Auth);