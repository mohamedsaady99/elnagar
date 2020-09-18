import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import './navbar.css'
import logo from '../images/logo.png';
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="navbar fixed-top">
                <div className="container ">
                    <div className="logo">
                        <h2><NavLink exact to="/"> <img src={logo} alt="logo"/></NavLink> </h2>
                    </div>
                    <ul className="ul-list">
                        <li className="list-item underline-from-left"><NavLink activeClassName='selected' exact to="/">Home</NavLink></li>
                        <li className="list-item underline-from-left"><NavLink activeClassName='selected' to="/portfolio">Portfolio</NavLink></li>
                        <li className="list-item underline-from-left"><NavLink activeClassName='selected' to="/resume">Resume</NavLink></li>
                        <li className="list-item underline-from-left"><NavLink activeClassName='selected' to="/about">About</NavLink></li>
                        <li className="list-item underline-from-left"><NavLink activeClassName='selected' to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                
            </div>
         );
    }
}
 
export default Navbar;