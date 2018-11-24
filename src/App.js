import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Layout from './components/Layout/Layout';
import { withRouter } from 'react-router-dom';
import Auth from './components/Auth/Auth'
import {Link} from 'react-router-dom'
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <div className="App"> 
      {/* <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/hikes'>Hike Dashboard</Link>
      <Link to='/gear'>Gear</Link>
      <Link to='/setalert'>Set Alert</Link>
      <Link to='/finalchecklist'>Final Checklist</Link>
      <Link to='/resources'>Resources</Link>
      {routes} */}
      {this.props.location.pathname === '/login' ? <Auth /> : 
      <Layout>
       {routes}
       </Layout>}
      </div>
    );
  }
}

export default withRouter(App);
