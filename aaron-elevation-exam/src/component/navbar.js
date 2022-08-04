import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import Icons from './icons';
import '../css/mainpage.css';

class FontLeaf extends Component {
    render() {
        return(
            <FontAwesomeIcon icon={faLeaf} />
        );
    }
}

function NavHeader() {
    return (
      <Navbar expand="lg">
        <Container className="navbar-main-container" fluid>
          <Navbar.Brand className="navbar-brand" href="#home"><FontLeaf className="navbar-brand-icon"></FontLeaf>THE GREEN LEAF</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-links">
                <Nav.Link><NavLink className="nav-link" to="/">Home</NavLink></Nav.Link>
                <Nav.Link><NavLink className="nav-link" to="/aboutus">About Us</NavLink></Nav.Link>
                <Nav.Link><NavLink className="nav-link" disabled to="*">Our Advocacy</NavLink></Nav.Link>
                <Nav.Link><NavLink className="nav-link" disabled to="*">Get In Touch</NavLink></Nav.Link>
            </Nav>
            <Nav className="navbar-social">
                <Icons />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavHeader;