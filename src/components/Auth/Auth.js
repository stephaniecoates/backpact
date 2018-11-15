import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from './../../ducks/reducer';
import './Auth.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Auth extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            errMsg: ''
        }
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
                    <div className='background'>
                    <br/>
                    <div className='login-box'>
                    <h4 style={{margin: '20px', marginBottom:'5px'}}>Log in or create an account to start planning your adventure.</h4>
                    <div className='input-box'>
                        <TextField required id='username-input' label='username' margin='dense' onChange={(e) => this.updateUsername(e.target.value)} />
                        <br/>
                        <TextField required id='password-input' type='password' label='password' margin='dense'  onChange={(e) => this.updatePassword(e.target.value)} />
                        </div>
                        {this.state.errMsg ? <p style={{color: "red", fontSize: "9px", margin:'0px'}}>{this.state.errMsg}</p> : null}
                        <br />
                        <div className='button'>
                        <Button variant='contained' onClick={() => this.login()}>Log In</Button>
                        <Button variant='contained' onClick={() => this.register()}>Register</Button>
                        </div>
                        </div>
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