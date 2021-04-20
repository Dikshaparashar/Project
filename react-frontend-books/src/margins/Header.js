
import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';
import   '../components/BookComponent';
import logo from '../images/book.jpeg';

export default function Header(){
    return(       
        <div>
            <header className="App-header">
            <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <img src={logo} className="App-logo" alt="logo" height="10" width="10"/>
  <ReactBootstrap.Navbar.Brand href="BookComponent">E-BookStore</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">
      
  
      
        
       
    </ReactBootstrap.Nav>
    <ReactBootstrap.Nav>
    <ReactBootstrap.Nav.Link eventKey={2} href="BookComponent">
        Books
      </ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="BookComponent">Diksha Parashar</ReactBootstrap.Nav.Link>
     
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>

      </header>             
        </div>
    );
}