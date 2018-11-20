import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from './../../ducks/reducer';
import './Auth.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';

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
        if (response === 'loggedIn') {
            this.props.history.push('/')
        } else {
            this.setState({
                errMsg: response
            })
        }
    }

    render() {
        console.log(this.state)
        return (
            <div>
                {/* is there a better place to put this redirect? */}
                {this.props.user.username ? this.props.history.push('/') :
                    <div className='background'>
                    <br/>
                    <div className='login-box'>
                    <Typography variant='h5' style={{marginTop: '30px', textTransform: 'lowercase', letterSpacing: '2px', fontFamily: 'Roboto'}}>Trail Angel</Typography>
                    <Typography variant='caption' style={{textTransform: 'uppercase', width: '300px', margin: '20px auto 5px auto'}}>Log in or create an account to <br/> start planning your adventure.</Typography>
                
                    <div className='input-box' style={{marginTop: '-10px'}}>
                        <TextField required id='username-input' label='username' margin='dense' onChange={(e) => this.updateUsername(e.target.value)} />
                        <br/>
                        <TextField required id='password-input' type='password' label='password' margin='dense'  onChange={(e) => this.updatePassword(e.target.value)} />
                        </div>
                        {this.state.errMsg ? <p style={{color: "red", fontSize: "9px", width: '250px', margin: '0px auto'}}>{this.state.errMsg}</p> : null}
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

export default withRouter(connect(mapStateToProps, {updateUser})(Auth));