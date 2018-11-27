import React, { Component } from 'react';
import routes from './routes';
import ActiveAlert from './components/ActiveAlert/ActiveAlert';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Popup from "reactjs-popup";
import BurgerIcon from "./components/Menu/BurgerIcon";
import 'typeface-roboto';
import './App.css';

class App extends Component {

  render() {
    //for popup menu
    const menuContentStyle = {
      background: "rgba(255,255,255,0.5)",
      width: "275px",
      border: "none"
    };

    return (
          <div className='App'>
            
            <Popup
              modal
              overlayStyle={{ background: "rgba(255,255,255,0.9" }}
              contentStyle={menuContentStyle}
              closeOnDocumentClick={true}
              trigger={open => <BurgerIcon open={open} />}
            >
              {close => <Menu close={close} />}
            </Popup>

            <Header/>
            {routes}
            <ActiveAlert />
            </div>
    );
  }
}

export default App;
