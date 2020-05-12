import React, { Component, useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import {
  Container,
  Carousel,
  Button,
  Jumbotron,
  Card,
  CardGroup,
  Row,
  Col,
  Breadcrumb,
  Nav,
  Navbar,
} from "react-bootstrap";
//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProductDetails } from "../../actions/fetchActions";
//components
import ThumbnailCarousel from "./thumbnailCarousel";
import ProductDescription from "./productDescription";
import SimilarProducts from "./similarProducts";
//assets
import basketicon from "../navbar/assets/basketicon.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import promoCode from "../../assets/promoCode.png";

const ProductDetails = ({ getProductDetails, selectedProduct, match }) => {
  useEffect(() => {
    var paramProduct = match.params.id;
    getProductDetails(paramProduct);
  }, []);

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
};

const mapStateToProps = (state) => ({
  selectedProduct: state.fetchReducer.productDetails,
});

export default connect(mapStateToProps, { getProductDetails })(ProductDetails);
