import React, {Component, useState, useEffect} from 'react';
import {
  Card,
  Button,
  Navbar,
  Nav,
  Row,
  Col,
  NavDropdown,
  Modal,
  Form,
  FormControl
} from "react-bootstrap";
//assets
import basketicon from "./assets/basketicon.png";
import searchicon from "./assets/searchicon.png";



const NavMain = () => {

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)};

  return (
    <>
      {/* navbar */}
      <Navbar bg="dark" expand="lg" sticky="top">
        {/* LOGO */}
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* DROPDOWN ONE */}
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Product nr 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Product nr 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Product nr 3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Premier</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Bestseller</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Top 4 promotions
              </NavDropdown.Item>
            </NavDropdown>
            {/* DROPDOWN TWO */}
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">shop.com</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Work with us
              </NavDropdown.Item>
            </NavDropdown>
            {/* DROPDOWN THREE */}
            <NavDropdown title="Log in" id="basic-nav-dropdown">
              {/* LOG IN /  SIGN UP */}
              <NavDropdown.Item href="#action/3.1">
                <Button>Log in </Button>
                <Button>Register</Button>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                {/* CARD */}
                <Card>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* SHOPPING ICON + SEARCH ICON */}
          <Nav className="mr-5">
            <Nav.Link href="#home">
              <img
                src={basketicon}
                alt="basket img"
                height="20px"
                width="20px"
              ></img>
            </Nav.Link>
            <Nav.Link href="#link">
              <Button variant="link" onClick={handleShow}>
                <img
                  src={searchicon}
                  alt="searchicon img"
                  height="20px"
                  width="20px"
                ></img>
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* modal */}
      <Modal className="modalSearch" show={show} onHide={handleClose}>
          <Modal.Body closeButton>
            <Form className="searchFormControl" inline>
              <FormControl
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Form>
          </Modal.Body>
      </Modal>
    </>
  );
};

export default NavMain;
