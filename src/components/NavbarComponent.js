import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavbarComponent.css';
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton"


const NavbarComponent = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/create">Add Show</a></li>
                    <li><a href="/user">Create User</a></li>
                    <li><a href="/">Profile</a></li>
                </ul>
            </div>

        </nav>
    </header>
);

export default NavbarComponent;