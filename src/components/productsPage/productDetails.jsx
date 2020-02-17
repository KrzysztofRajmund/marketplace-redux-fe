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




const ProductDetails = ({getProductDetails, selectedProduct,match}) => {

    useEffect (()=>{
      var paramProduct = match.params.id
        getProductDetails(paramProduct);
    },[])

   

    const getProduct = (
      <>
        {/* Jumbotron */}
        <Jumbotron className="jumbotronSale" key={selectedProduct.id} fluid>
          <img
            src={selectedProduct.url}
            alt="image"
            width="100%"
            height="400px"
          />
        </Jumbotron>
        {/* Product title + Card Price with Basket */}
        <CardGroup>
          <Row className="col-12">
            {/* Title */}
            <div className="cardTitleProduct col-4">
              <h5>Product Title</h5>
              <Breadcrumb>
                <Breadcrumb.Item >Feature</Breadcrumb.Item>
                <Breadcrumb.Item >
                  Social Media
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Stars</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            {/* Price Card */}
            <div className=" cardPriceProduct col-5">
              <Card key={selectedProduct.id}>
                <Card.Body className="pl-2 pr-2">
                  <Card.Title>€19.99</Card.Title>
                  <Button className="col-12" variant="success" size="sm">
                    ADD TO BASKET
                  </Button>
                  <Button
                    className="col-12"
                    variant="outline-success"
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
