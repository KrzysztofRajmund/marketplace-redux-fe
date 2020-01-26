import React, { Component } from "react";
import {
  Card,
  Container,
  Button,
  Navbar,
  Nav,
  Row,
  Col
} from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
        {/* FOOTER TOP */}
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Promo Code</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav className="mr-5">
          <Nav.Link href="#home">Facebook</Nav.Link>
          <Nav.Link href="#features">Tweeter</Nav.Link>
        </Nav>
      </Navbar>
        {/* FOOTER MIDDLE */}
        <Navbar className="navbarMiddle">
        <Nav className="mr-auto">
          <Nav.Link href="#home">LOGO</Nav.Link>
          <Nav.Link href="#features">Language: 
          <a>ENG </a>
          <a>ENG </a>
          <a>ENG </a>
          </Nav.Link>
          <Nav.Link className="footerMiddleLink2" href="#features"><br/>Currency:
          <a>PLN </a>
          <a>PLN </a>
          <a>PLN </a>
          </Nav.Link>
        </Nav>
        <Nav className="mr-5">
          <Button>Download Button</Button>
        </Nav>
      </Navbar>
              {/* FOOTER BOTTOM */}
              <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Policy</Nav.Link>
          <Nav.Link href="#features">Cookies</Nav.Link>
          <Nav.Link className="footerButtonLink2" href="#features"><br/>
         <p>
             All rights reserved... More about cookies here...
         </p>
          </Nav.Link>
        </Nav>
        <Nav className="mr-5">
          <Button>Coorporate LOGO</Button>
        </Nav>
      </Navbar>
    </footer>
  );
};

export default Footer;
