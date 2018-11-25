import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { withRouter } from 'react-router-dom';
import Auth from './components/Auth/Auth'
import ActiveAlert from './components/ActiveAlert/ActiveAlert';
import 'typeface-roboto';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Popup from "reactjs-popup";
import BurgerIcon from "./components/Menu/BurgerIcon";

class App extends Component {
  
  render() {
      const contentStyle = {
        background: "rgba(255,255,255,0)",
        width: "80%",
        border: "none"
      };
    return (
      <div className="App"> 
      {this.props.location.pathname === '/login' ? <Auth /> : 
      <div>
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.7" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={true}
      trigger={open => <BurgerIcon open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
      {/* <Menu /> */}
      <Header/>
       {routes}
       <ActiveAlert/></div>}
      </div>
    );
  }
}

export default withRouter(App);
