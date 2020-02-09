import React, {Component, useState, useEffect} from 'react';
import {Container,Carousel,Button, Jumbotron,Card} from 'react-bootstrap'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProductDetails} from '../../actions/fetchActions';
import { Route, Switch,Link } from 'react-router-dom';



const ProductDetails = ({getProductDetails, selectedProduct,match}) => {

    useEffect (()=>{
      var paramProduct = match.params.id
        getProductDetails(paramProduct);
    },[])


    const getProduct = (
          <Jumbotron className="jumbotronSale" key={selectedProduct.id} fluid> 
          <Button primary>{selectedProduct.title}</Button>
               <img src={selectedProduct.url} alt="image" width="100%" height="400px"/>
          </Jumbotron>
      );
      


  
    return (
      <>
      ID: {match.params.id}
      <div>PRODUCT: 
        {getProduct}
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
