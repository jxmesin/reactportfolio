import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar className="navBar-bg" expand="lg">
      <Container className="justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navMenu" />
        <Navbar.Collapse id="basic-navbar-nav" className="navMenu">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="navLink">About Me</Nav.Link>
            <Nav.Link href="#link" className="navLink">Work</Nav.Link>
            <Nav.Link href="#home" className="navLink">Experience</Nav.Link>
            <Nav.Link href="#link" className="navLink">Contact</Nav.Link>
            
            <NavDropdown  id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;