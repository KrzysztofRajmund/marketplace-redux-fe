import React, { Component, useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import {
  Container,
  Button,
  Jumbotron,
  Card,
  CardGroup,
  Row,
  Col,
  Nav,
  Navbar,
} from "react-bootstrap";
//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProductDetails,getItems } from "../../actions/fetchActions";
import { addProductToBasket } from "../../actions/basketActions";
//components
import ThumbnailCarousel from "./thumbnailCarousel";
import ProductDescription from "./productDescription";
import SimilarProducts from "./similarProducts";
//assets
import basketicon from "../navbar/assets/basketicon.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";

const ProductDetails = ({ getProductDetails, selectedProduct, match, getItems,
  addProductToBasket,
  fetchReducer,
  basketReducer }) => {
  useEffect(() => {
    var paramProduct = match.params.id;
    getProductDetails(paramProduct);
    getItems();
  },[]);

  const addProduct = (product,basketReducer) => {
    addProductToBasket(product,basketReducer) 
    };

  const getProduct = (
    <>
      {/* Jumbotron */}
      <Jumbotron className="jumbotronSale" key={selectedProduct.id} fluid>
        <img
          src={selectedProduct.jumbotronUrl}
          alt="image"
          width="100%"
          height="auto"
        />
        {/* Price Card */}
        <Col className=" cardPriceProduct col-6 col-md-4">
          <Card className="cardPrice" key={selectedProduct.id}>
            <Card.Body className="pl-2 pr-2">
              <Card.Title className="mt-2">€{selectedProduct.price}</Card.Title>
              <Button className="col-12" variant="dark" size="sm">
                <img
                  src={basketicon}
                  alt="basket img"
                  height="30px"
                  width="30px"
                  onClick={() => addProduct(selectedProduct,basketReducer)}
                ></img>
              </Button>
              <Button className="col-12 mb-3" variant="outline-dark" size="sm">
                ADD TO WISHLIST
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Jumbotron>

      <Container className="productTitle col-12">
        <Col className="col-xs-12 col-md-4">
        <hr/> 
      <div  className="subtitleLargest">    
      {selectedProduct.title}
      </div> 
      </Col>
      <Col className="col-xs-12 col-md-4 col-xl-3">
          <Navbar>
            <Nav>  
      
              <Nav.Link className="footerLink" href="#features">
            
                <small>Features</small>
              </Nav.Link>
            </Nav>
            <Nav className="mr-5">
              <Nav.Link href="#home">
                {" "}
                <img src={facebook} alt="img" height="30px" width="30px"></img>
              </Nav.Link>
              <Nav.Link href="#features">
                <img src={twitter} alt="img" height="30px" width="30px"></img>
              </Nav.Link>
            </Nav>
          </Navbar>
          </Col>
      </Container>
    </>
  );

  return (
    <>
      <div>{getProduct}</div>
      <div>
        <ThumbnailCarousel />
        <ProductDescription />
        <SimilarProducts />
      </div>
    </>
  );
};

ProductDetails.propTypes = {
  getProductDetails: PropTypes.func.isRequired,
  selectedProduct: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired,
  addProductToBasket: PropTypes.func.isRequired,
  fetchReducer: PropTypes.array.isRequired,
  basketReducer: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  selectedProduct: state.fetchReducer.productDetails,
  fetchReducer: state.fetchReducer.items,
  basketReducer: state.basketReducer.basketProducts
});

export default connect(mapStateToProps, { getProductDetails,getItems, addProductToBasket })(ProductDetails);
