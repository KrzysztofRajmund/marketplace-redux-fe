import React, {Component, useState, useEffect} from 'react';
import {Container,Carousel,Button} from 'react-bootstrap'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems,getProductDetails} from '../../actions/fetchActions';
import { Route, Switch,Link } from 'react-router-dom';
import ProductDetails from './../productsPage/productDetails';




const SlideMain = ({getItems, getProductDetails, fetchReducer }) => {

    useEffect (()=>{
        getItems();
        getProductDetails();
    },[])

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };

    // const clickedProduct = (id) => {

    //   return (
    //   <Route exact path={"/"+id} component={ProductDetails} />
    //   );
    // }

    const suggestedItems = fetchReducer.slice(0, 8).map(item => (
      <Carousel.Item
        key={item.id}
        // onClick={clickedProduct(item.id)}
      >
        <Link to={"/" + item.id}>
          <img
            className="d-block w-100"
            src={item.url}
            alt="First slide"
            height="550px"
            to={"/" + item.id}
          />
        </Link>
        <Carousel.Caption>
          <h3>Sale -70%</h3>
          <Button className="slideMainBtn" type="button">
            Primary
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    ));
    return (
      <>
      <div className="subtitleLargest">
        Suggested Products
        <hr/>
      </div>
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            {suggestedItems}
        </Carousel>
        </>
      );
}


SlideMain.propTypes = {
    getItems: PropTypes.func.isRequired,
    getProductDetails: PropTypes.func.isRequired,
    fetchReducer: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items,
fetchReducerProductDetails: state.fetchReducer.productDetails
});

export default connect (mapStateToProps,{getItems, getProductDetails})(SlideMain);
