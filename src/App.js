import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import NavBar from './components/NavBar/NavBar';
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar />
       {routes}
      </div>
    );
  }
}

export default App;
