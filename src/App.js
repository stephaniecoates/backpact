import React, { Component } from 'react';
import routes from './routes';
import { withRouter } from 'react-router-dom';
import ActiveAlert from './components/ActiveAlert/ActiveAlert';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Popup from "reactjs-popup";
import BurgerIcon from "./components/Menu/BurgerIcon";
import Modal from "./Modal/Modal";
import LoginModal from "./Modal/LoginModal";
import 'typeface-roboto';
import './App.css';

class App extends Component {
  state = {
    show: false
  }

showModal = () => {
  this.setState({show: true})
}

hideModal = () => {
  this.setState({show: false})
}

  render() {
    //for popup menu
    const menuContentStyle = {
      background: "rgba(255,255,255,0)",
      width: "275px",
      border: "none"
    };

    return (
          <div className='App'>
            <Modal show={this.state.show} handleClose={this.hideModal}>
            <LoginModal handleClose={this.hideModal}/>
            </Modal>

            <Popup
              modal
              overlayStyle={{ background: "rgba(255,255,255,0.9" }}
              contentStyle={menuContentStyle}
              closeOnDocumentClick={true}
              trigger={open => <BurgerIcon open={open} />}
            >
              {close => <Menu close={close} />}
            </Popup>

            <Header 
            showModal={this.showModal}/>
            {routes}
            <ActiveAlert />
            </div>
    );
  }
}

export default withRouter(App);
