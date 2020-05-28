import React, { useState, useEffect } from "react";
//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems } from "../../actions/fetchActions";
import { addProductToBasket } from "../../actions/basketActions";
//react bootstrap
import {
  Card,
  Button,
  Navbar,
  Nav,
  Badge,
  Modal,
  Form,
  FormControl
} from "react-bootstrap";
//assets
import basketicon from "./assets/basketicon.png";
import basketiconTwo from "./assets/basketiconTwo.png";
import searchicon from "./assets/searchicon.png";
import xButton from "../../assets/xButton.png";
import infoIcon from "../../assets/infoIcon.png";
import home from "../../assets/home.png";
import logo2 from "../../assets/logo2.png";
//components
import Basket from "./../Basket";
//router
import { Link } from 'react-router-dom';

const NavMain = ({
  getItems,
  addProductToBasket,
  fetchReducer,
  basketReducer
}) => {
  useEffect(() => {
    getItems();
  }, []);


  //modal search
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setProduct("");
  };
  const handleShowSearch = () => {
    setShow(true);
  };

  //search filter
  const [product, setProduct] = useState("");
  const [productResult, setProductResult] = useState([]);

  const searchHandler = e => {
    setProduct(e.target.value);
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
    if (product.length > 2) return setProductResult(result);
    if (product.length <= 2) return setProductResult([]);
  }, [product]);

  //shopping basket
  const [showBasket, setShowBasket] = useState(false);

  const handleShowBasket = () => {
    setShowBasket(true);
  };
    
  
  const addProduct = (product,basketReducer) => {
    addProductToBasket(product,basketReducer) 
    };
   
 
  const handleCloseBasket = () => {
    setShowBasket(false);
  };


  return (
    <>
      {/* navbar */}
      <Navbar className="navbarMain" expand="lg" sticky="top">
        {/* <Nav.Link>
          <Link to={"/"}>
            <img src={home} alt="home" height="25px" width="25px"></img>
          </Link>
        </Nav.Link> */}
        <Navbar.Brand>
        <Link to={"/"}>
          <img src={logo2} alt="home" height="35px" width="auto"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
          {/* search icon + basket icon */}
          <Nav className="mr-5">
            <Nav.Link>
              <Button
                className="p-0 m-0"
                variant="link"
                onClick={handleShowBasket}
              >
                <img
                  src={basketicon}
                  alt="basket img"
                  height="20px"
                  width="20px"
                ></img>
                <Badge pill variant="success">
                  {basketReducer.length}
                </Badge>
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
          <div className="modalX" onClick={handleClose}>
            <img src={xButton} width="20px" height="20px" alt="xButton" />
          </div>
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
            {productResult.map((search) => (
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

                  <div className="pl-1">
                    {search.title.substr(0, 12) + "..."}
                  </div>

                  <div className="pl-1 pr-1">€{search.price.toFixed(2)}</div>

                  <div>
                    <Link to={"/" + search.id} onClick={handleClose}>
                      <img
                        className="infoIcon m-1 mr-2"
                        src={infoIcon}
                        alt="basket img"
                        height="30px"
                        width="30px"
                      ></img>
                    </Link>
                    <a>
                      <Button
                        className="transparentBtn"
                        onClick={() => addProduct(search, basketReducer)}
                      >
                        <img
                          src={basketiconTwo}
                          alt="basket img"
                          height="30px"
                          width="30px"
                        ></img>
                      </Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Modal.Body>
      </Modal>

      {/* modal basket */}
      <Modal
        className="basketModal"
        show={showBasket}
        onHide={handleCloseBasket}
      >
        <Modal.Body closeButton>
          <div onClick={handleCloseBasket} className="modalXBasket">
            <img src={xButton} width="20px" height="20px" alt="xButton" />
          </div>
          <Basket basketProducts={basketReducer} />
        </Modal.Body>
      </Modal>
    </>
  );
};

NavMain.propTypes = {
  getItems: PropTypes.func.isRequired,
  addProductToBasket: PropTypes.func.isRequired,
  fetchReducer: PropTypes.array.isRequired,
  basketReducer: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  fetchReducer: state.fetchReducer.items,
  basketReducer: state.basketReducer.basketProducts
});

export default connect(mapStateToProps, { getItems, addProductToBasket })(
  NavMain
);
