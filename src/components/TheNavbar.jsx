import React from 'react';
import '../css/Navbar.css';
import { Navbar, Nav, Button } from 'react-bootstrap';

const TheNavbar = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Navbar.Brand href="#" className="d-flex align-items-center">
        <img
          src="dist\assets\logo-BH7GV76F.png"
          width="50"
          height="45"
          className="d-inline-block align-top"
        />
        <span className="ms-2" style={{ fontSize: '25px' }}>BookAI</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">

          <Nav.Link href="#" className="text-white">Features</Nav.Link>
          <Nav.Link href="#" className="text-white">How It Works</Nav.Link>
          <Nav.Link href="#" className="text-white">Roadmap</Nav.Link>
          <Nav.Link href="#" className="text-white">API</Nav.Link>
          <Nav.Link href="#" className="text-white">Price</Nav.Link>
          <Nav.Link href="#" className="text-white">Models</Nav.Link>
        </Nav>
        <Button variant="primary" className="mx-2 login-btn">
          Login / Sign Up
        </Button>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.modefunction} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: '#fff', fontSize: '13px' }}>Switch to <br />{props.mode === 'dark' ? "light" : "dark"} mode</label>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TheNavbar;
