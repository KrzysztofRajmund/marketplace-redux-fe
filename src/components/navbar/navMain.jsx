import React, { Component, useState, useEffect } from "react";
//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems } from "../../actions/fetchActions";
//react bootstrap
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
//components
import SearchBarResults from "./searchBarResults";

const NavMain = ({ getItems, fetchReducer }) => {
  useEffect(() => {
    getItems();
  }, []);

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false)
    setProduct("")
  };
  const handleShowSearch = () => {
    setShow(true);
  };

  //search handler and hooks
  const [product, setProduct] = useState("");
  const [productResult, setProductResult] = useState([]);

  const searchHandler = e => {
    setProduct(e.target.value);
    console.log("searchHandler", product);
  };

  useEffect(() => {
    const result = fetchReducer.filter(
      item =>
        item.title
          .toString()
          .toLowerCase()
          .includes(product.toLowerCase()) ||
        item.id
          .toString()
          .toLowerCase()
          .includes(product.toLowerCase())
    );
    console.log("FILTER", result);
    if (product.length > 2) return setProductResult(result);
    if (product.length <= 2) return setProductResult([]);
  }, [product]);



  //shopping cart

  //1.onClick event listener
  //2.add new clicked item to new array
  //3.increase number of item next to basket logo
  //4.purchase button (clear basket)

  const [showBasket, setShowBasket] = useState(false);

  const handleShowBasket = () =>{
    setShowBasket(true);
  }

  const handleCloseBasket = () => {
    setShowBasket(false)
  };
  

  return (
    <>
      {/* navbar */}
      <Navbar className="navbarMain" expand="lg" sticky="top">
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
            <Nav.Link>
            <Button className="p-0" variant="link" onClick={handleShowBasket}>
              <img
                src={basketicon}
                alt="basket img"
                height="20px"
                width="20px"
              ></img>
              </Button>
              </Nav.Link>
              <Nav.Link>
              <Button className="p-0" variant="link" onClick={handleShowSearch}>
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

      {/* modal search */}
      <Modal className="modalSearch" show={show} onHide={handleClose}>
        <Modal.Body closeButton>
          <Form className="searchFormControl" inline>
            <FormControl
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={searchHandler}
              value={product}
            />
          </Form>
          <div>
            {productResult.map(search => (
              <Card className="cardSearchBar">
                <Card.Body className="containerSearchBar pl-1 pr-1">
                  <div>
                    <img
                      src={search.url}
                      alt="image"
                      width="60px"
                      height="40"
                    ></img>
                  </div>

                  <div className="pl-1">{search.title.substr(0, 12) + "..."}</div>

                  <div className="pl-1 pr-1">rating</div>
                  
                  <div>
                    <button disabled>-10%</button>
                  
                    <button>basket</button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
          {/* <SearchBarResults productResult = {productResult}/> */}
        </Modal.Body>
      </Modal>


      {/* modal basket */}
      <Modal className="basketModal" show={showBasket} onHide={handleCloseBasket}>
        <Modal.Body closeButton>
        <Card className="cardSearchBar">
                <Card.Body className="containerSearchBar pl-1 pr-1">
                  <div>
                    <img
                      src=""
                      alt="image"
                      width="60px"
                      height="40"
                    ></img>
                  </div>

                  <div className="pl-1">title</div>

                  <div className="pl-1 pr-1">3</div>
                  
                  <div>
                    <button disabled>-10%</button>
                  
                    <button>price</button>
                  </div>
                </Card.Body>
              </Card>
        </Modal.Body>
      </Modal>
    </>
  );
};

NavMain.propTypes = {
  getItems: PropTypes.func.isRequired,
  fetchReducer: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  fetchReducer: state.fetchReducer.items
});

export default connect(mapStateToProps, { getItems })(NavMain);
