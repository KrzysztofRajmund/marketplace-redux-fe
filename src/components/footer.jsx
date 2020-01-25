import React, {Component} from 'react';
import {Card,Container, Button, Navbar,Nav} from 'react-bootstrap'






const Footer = () => {


  return (  
    <div>
  <Card className="text-center">
  <Card.Header>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">GOG Connect</Nav.Link>
      <Nav.Link href="#pricing">Contact Us</Nav.Link>
      <Nav.Link href="#pricing">Career</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Facebook</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Tweeter
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </Card.Header>
  <Card.Body>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">GOG LOGO</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    <p> <Nav.Link href="#features">Language:</Nav.Link>
      <Nav.Link href="#pricing">Eng</Nav.Link>
      <Nav.Link href="#pricing">Pln</Nav.Link>
      </p>
    
     
      <Nav.Link href="#features">Currency:</Nav.Link>
      <Nav.Link href="#pricing">Euro</Nav.Link>
      <Nav.Link href="#pricing">GBP</Nav.Link>
      <Nav.Link href="#pricing">PLN</Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
    </div>
  );
}


export default Footer;
