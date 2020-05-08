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
//assets
import facebook from ".././assets/facebook.png";
import twitter from ".././assets/twitter.png";

const Footer = () => {
  return (
    <footer>
        {/* FOOTER TOP */}
      <Navbar className="footerTop">
        <Nav className=" footerTopElementOne ml-5 mr-auto">
          <Nav.Link href="#home">Promo Code</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav className="mr-5">
          <Nav.Link href="#home"> <img
                  src={facebook}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img></Nav.Link>
          <Nav.Link href="#features"><img
                  src={twitter}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img></Nav.Link>
        </Nav>
      </Navbar>
        {/* FOOTER BOTTOM */}
        <Container className="footerBottom row-12">
        <div className="footerLogo" href="#home">LOGO</div>
       
      </Container>
    </footer>
  );
};

export default Footer;
