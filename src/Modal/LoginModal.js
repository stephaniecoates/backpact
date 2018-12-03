
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser, hideModal, updateAlert } from './../ducks/reducer';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import { LoginHeader, LoginSubhead, Button, ButtonContainer, ErrMsg } from './StyledModal';


class LoginModal extends Component {
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

    //THIS IS THE PROBLEM! IF STATEMENT NOT BECOMING TRUE, SO AXIOS CALL DOESNT RUN AND SET ALERT DATA TO REDUX
    //this.props changes to hold username and password, and prevprops stays undefined...func should recognize difference and run axios call
    //this function works on previos version...not function, something thats affecting its timing maybe?
    componentDidUpdate(prevProps) {
        console.log('loginmodal this.props', this.props.user.id)
        console.log('loginmodal prevprops', prevProps.user.id)
        if (this.props.user.id && prevProps.user !== this.props.user) {
            console.log('component did update running on loginmodal')
            axios.get(`/api/alert-data/${this.props.user.id}`)
                .then(res => {
                    console.log('axios alert data req ran')
                    this.props.updateAlert(res.data)
                })
        } else {
            console.log('prevProps !== this.props didnt run')
        }
    }

    async login() {
        if (!this.state.username || !this.state.password) return alert(`Please enter a username and password.`)
        let res = await axios.post(`/auth/login`, {
            username: this.state.username,
            password: this.state.password
        })
        let response = res.data.message
        if (response === 'loggedIn') {
            this.props.hideModal();
            let userRes = await axios.get(`/auth/user-data`)
            this.props.updateUser(userRes.data)
            this.setState({
                username: '',
                password: '',
                errMsg: ''
            })
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
            this.props.hideModal();
            let userRes = await axios.get(`/auth/user-data`)
            this.props.updateUser(userRes.data)
        } else {
            this.setState({
                errMsg: response
            })
        }
    }

    render() {
        return (

            <div>
                <LoginHeader>Backpact</LoginHeader>
                <LoginSubhead>Log in or create an account to start planning your adventure.</LoginSubhead>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0px 60px' }}>
                    <TextField value={this.state.username} required id='username-input' label='username' margin='dense' onChange={(e) => this.updateUsername(e.target.value)} />
                    <TextField value={this.state.password} required id='password-input' type='password' label='password' margin='dense' onChange={(e) => this.updatePassword(e.target.value)} />
                </div>
                {this.state.errMsg ? <ErrMsg>{this.state.errMsg}</ErrMsg> : null}

                <ButtonContainer>
                    <Button onClick={() => this.login()}>Log In</Button>
                    <Button onClick={() => this.register()}>Register</Button>
                </ButtonContainer>

            </div>

        )
    }
}

function mapStateToProps(state) {
    const { user, alert } = state
    return {
        user,
        alert
    }
}

export default withRouter(connect(mapStateToProps, { updateUser, hideModal, updateAlert })(LoginModal));
