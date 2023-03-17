import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'
import logo from './../assts/logo.png';
const Navs =()=>{
    return(

     
            <Navbar expand="lg">
              <Container>
                <Navbar.Brand href="#home">
                  
                    <img src={logo} title="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">about</Nav.Link>
                    <Nav.Link href="#explore food">explore food</Nav.Link>
                    <Nav.Link href="#Review">Review</Nav.Link>
                    <Nav.Link href="#fag">fag</Nav.Link>
                  </Nav>
                  <Nav>
            <Nav.Link id="lastnav">23252254</Nav.Link>
          </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }

export default Navs;