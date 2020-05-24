import React, {Component, useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
//bootstrap
import {Container,Carousel,Button} from 'react-bootstrap'
//redux
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems} from '../../actions/fetchActions';
import { addProductToBasket } from "../../actions/basketActions";
//router
import { Link } from 'react-router-dom';
//assets
import basketicon from "../navbar/assets/basketicon.png";
import infoIcon from "../../assets/infoIcon.png";
import gif from "../../assets/gif.gif";




const SlideMain = ({getItems,fetchReducer,addProductToBasket,basketReducer }) => {

    useEffect (()=>{
        getItems();
    },[])

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };

    const addProduct = (product,basketReducer) => {
      addProductToBasket(product,basketReducer) 
      };

    const suggestedItems = fetchReducer.slice(0, 3).map((item) => (
      <Carousel.Item key={item.id}>
        <Link to={"/" + item.id}>
          <img
            className="d-block w-100"
            src={gif}
            alt="First slide"
            height="auto"
            width="100%"
          />
            {/* <ReactPlayer url={item.jumbotronVideoUrl} width="3000" height="1500" playing="true" loop="true"/> */}
        </Link>
        <Carousel.Caption>
        <h3>{item.sale}</h3>
          <Link to={"/" + item.id}>
          <img
            className="infoIcon"
            src={infoIcon}
            alt="img"
            height="40px"
            width="40px"
            onClick={() => addProduct(item, basketReducer)}
          ></img>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    ));
    return (
      <>
      {/* <div className="subtitleLargest">
      <hr/>
        Suggested Products
      </div> */}
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            {suggestedItems}
        </Carousel>
        </>
      );
}


SlideMain.propTypes = {
    getItems: PropTypes.func.isRequired,
    addProductToBasket: PropTypes.func.isRequired,
    fetchReducer: PropTypes.array.isRequired,
    basketReducer: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items,
basketReducer: state.basketReducer.basketProducts
});

export default connect (mapStateToProps, {getItems,addProductToBasket})(SlideMain);
