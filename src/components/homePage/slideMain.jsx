import React, {Component, useState, useEffect} from 'react';
import {Container,Carousel,Button} from 'react-bootstrap'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems} from '../../actions/fetchActions';
import { Link } from 'react-router-dom';




const SlideMain = ({getItems,fetchReducer }) => {

    useEffect (()=>{
        getItems();
    },[])

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };

    const suggestedItems = fetchReducer.slice(0, 8).map(item => (
      <Carousel.Item
        key={item.id}
      >
        <Link to={'/'+item.id}>
          <img
            className="d-block w-100"
            src={item.jumbotronUrl}
            alt="First slide"
            height="auto"
            width="100%"
            
          />
        </Link>
        <Carousel.Caption>
          <h3>Sale -70%</h3>
          <Button className="slideMainBtn" type="button" key={item.id}>
            Add to basket
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
    fetchReducer: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items
});

export default connect (mapStateToProps,{getItems})(SlideMain);
