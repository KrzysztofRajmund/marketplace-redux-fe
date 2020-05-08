import React, {Component, useState, useEffect} from 'react';
import { Route, Switch,Link } from 'react-router-dom';
import {Container,Carousel,Button, Jumbotron,Card, CardGroup, Row, Col, Breadcrumb} from 'react-bootstrap'
//redux
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProductDetails} from '../../actions/fetchActions';
//components
import ThumbnailCarousel from './thumbnailCarousel';
import ProductDescription from './productDescription';
import SimilarProducts from './similarProducts';
//assets
import basketicon from "../navbar/assets/basketicon.png";




const ProductDetails = ({getProductDetails, selectedProduct,match}) => {

    useEffect (()=>{
      var paramProduct = match.params.id
        getProductDetails(paramProduct);
    },[])

   

    const getProduct = (
      <>
        {/* Jumbotron */}
        <Jumbotron className="jumbotronSale" key={selectedProduct.id} fluid>
        <img src={selectedProduct.jumbotronUrl} alt="image" width="100%" height="auto"/>
        </Jumbotron>
        {/* Product title + Card Price with Basket */}
        <CardGroup>
          <Row className="col-12">
            {/* Title */}
            <div className="col-4">
            <Col className="subtitleLargest">
        Product Title
        <hr/>
      </Col>
              <Breadcrumb>
                <Breadcrumb.Item >Feature</Breadcrumb.Item>
                <Breadcrumb.Item >
                  Social Media
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Stars</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            {/* Price Card */}
            <div className=" cardPriceProduct col-4">
              <Card className="cardPrice" key={selectedProduct.id}>
                <Card.Body className="pl-2 pr-2">
                  <Card.Title className="mt-2">€19.99</Card.Title>
                  <Button className="col-12" variant="dark" size="sm">
                  <img
                  src={basketicon}
                  alt="basket img"
                  height="30px"
                  width="30px"
                ></img>
                  </Button>
                  <Button
                    className="col-12 mb-3"
                    variant="outline-dark"
                    size="sm"
                  >
                    ADD TO WISHLIST
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Row>
        </CardGroup>
      </>
    );
  
    return (
      <>
      <div>
        {getProduct}
      </div>
      <div>
      <ThumbnailCarousel/>
      <ProductDescription/>
      <SimilarProducts/>
      </div>
      
     
        </>
      );
}


ProductDetails.propTypes = {
    getProductDetails: PropTypes.func.isRequired,
    selectedProduct: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
selectedProduct: state.fetchReducer.productDetails
});

export default connect (mapStateToProps,{getProductDetails})(ProductDetails);
