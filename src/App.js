import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import 'typeface-roboto';
import Layout from './components/Layout/Layout';
import { withRouter } from 'react-router-dom';
import Auth from './components/Auth/Auth'

class App extends Component {
  render() {
    return (
      <div className="App"> 
      {this.props.location.pathname === '/login' ? <Auth /> : 
      <Layout>
       {routes}
       </Layout>}
      </div>
    );
  }
}

export default withRouter(App);
