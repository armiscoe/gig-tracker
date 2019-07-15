import React, { Component } from 'react';
import './Navbar.css';
import NavbarComponent from './NavbarComponent';
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'

class Navbar extends Component {
  state = {
    sideDrawerOpen: false
  };


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
     <div style={{height: '100%'}}>
    
      <NavbarComponent drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
      <main style={{marginTop: '64px'}}>
      </main>

    </div>
  );
}
}

export default Navbar;
