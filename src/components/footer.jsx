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
import promoCode from ".././assets/promoCode.png";
import creditCards from ".././assets/creditCards.png"

const Footer = () => {
  return (
    <footer>
        {/* FOOTER TOP */}
      <Navbar className="footerTop">
        <Nav 
        className="
        footerTopElementOne
         ml-5 mr-auto">
        <img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>
          <Nav.Link className="footerLink" href="#home" id="couponTitle">
          <img 
                  src={creditCards}
                  alt="img"
                  height="30px"
                  width="auto"
                ></img>
          </Nav.Link>
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
        <div  href="#home">JÄGERSTRASSE 54, </div>
        <div  href="#home">Jaeger Street 54, </div>
        <div  href="#home">10117 Berlin</div>
       
      </Container>
    </footer>
  );
};

export default Footer;
