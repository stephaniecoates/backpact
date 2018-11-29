
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser, hideModal, updateAlert } from './../ducks/reducer';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';


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

    componentDidUpdate(prevProps) {
        if ((prevProps.user !== this.props.user) && this.props.user.id) {
            axios.get(`/api/alert-data/${this.props.user.id}`)
                .then(res => {
                    this.props.updateAlert(res.data)
                })
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
        const LoginHeader = styled.h1`
        margin-top: 30px;
        text-transform: lowercase;
        letter-spacing: 1px;
        `
        const LoginSubhead = styled.p`
        padding: 5px;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.8em;
        color: grey;
        margin: 0px 15px;
        `

        const Button = styled.button`
        padding: 8px 20px;
        font-size: 16px;
        border: none;
        box-shadow: -1px 1px 2px black;  
         margin: 10px 6px;
         box-sizing: border-box;
         text-transform: uppercase;
         font-family: 'Roboto';
         color: white;
         text-align: center;
        background-color: black;
        border-radius: 4px;

        }
      `

    const ErrMsg = styled.p`
    color: red;
    font-size: 0.5em;
    margin: 0px;
    `
        return (
           
                    <div>
                        <LoginHeader>Backpact</LoginHeader>
                        <LoginSubhead>Log in or create an account to start planning your adventure.</LoginSubhead>


                        <TextField required id='username-input' label='username' margin='dense' onChange={(e) => this.updateUsername(e.target.value)} />
                    
                        <TextField required id='password-input' type='password' label='password' margin='dense' onChange={(e) => this.updatePassword(e.target.value)} />

                        {this.state.errMsg ? <ErrMsg>{this.state.errMsg}</ErrMsg> : null}
                       
                        <div>
                            <Button onClick={() => this.login()}>Log In</Button>
                            <Button onClick={() => this.register()}>Register</Button>
                            </div>
              
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
