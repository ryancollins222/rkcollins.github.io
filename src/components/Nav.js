import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

let NavComponent = () => {
  return (
    <Navbar collapseOnSelect variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#about"><h1>Ryan K. Collins</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" text="light"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavComponent;