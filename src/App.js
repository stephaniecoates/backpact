import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { withRouter } from 'react-router-dom';
import Auth from './components/Auth/Auth'
import ActiveAlert from './components/ActiveAlert/ActiveAlert';
import 'typeface-roboto';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App"> 
      {this.props.location.pathname === '/login' ? <Auth /> : 
      <div>
      <Menu />
      <Header/>
       {routes}
       <ActiveAlert/></div>}
      </div>
    );
  }
}

export default withRouter(App);
