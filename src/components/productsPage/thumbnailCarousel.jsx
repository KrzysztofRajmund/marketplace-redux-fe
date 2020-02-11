import React, {Component, useState, useEffect} from 'react';
import {Container,Carousel,Button,Card,CardGroup} from 'react-bootstrap'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems} from '../../actions/fetchActions';
import { Link } from 'react-router-dom';




const ThumbnailCarousel = ({getItems,fetchReducer }) => {

    useEffect (()=>{
        getItems();
    },[])

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };

    const suggestedItems = fetchReducer.slice(0, 4).map(item => (
      <Carousel.Item>
        <CardGroup className="mb-3 pb-5">
          {/* <Card className="cardGroup" style={{ width: '16rem', height: '6rem'}} key={item.id}>
        <Card.Img 
          className="d-block w-100"
          src={item.thumbnailUrl}
          height="150px" 
        />
      </Card> */}
          <Card className="cardGroup bg-dark text-white mb-3 mr-6" 
          style={{ width: '16rem', height: '6rem'}} key={item.id}>
            <Card.Img 
             className="d-block w-100"
             src={item.thumbnailUrl}
             height="125px"
             />
            <Card.ImgOverlay>
                Product title
            </Card.ImgOverlay>
          </Card>
          <Card className="cardGroup bg-dark text-white mb-3 mr-6" 
          style={{ width: '16rem', height: '6rem'}} key={item.id}>
            <Card.Img 
             className="d-block w-100"
             src={item.thumbnailUrl}
             height="125px"
             />
            <Card.ImgOverlay>
                Product title
            </Card.ImgOverlay>
          </Card>
          <Card className="cardGroup bg-dark text-white mb-3 mr-6" 
          style={{ width: '16rem', height: '6rem'}} key={item.id}>
            <Card.Img 
             className="d-block w-100"
             src={item.thumbnailUrl}
             height="125px"
             />
            <Card.ImgOverlay>
                Product title
            </Card.ImgOverlay>
          </Card>
          <Card className="cardGroup bg-dark text-white mb-3 mr-6" 
          style={{ width: '16rem', height: '6rem'}} key={item.id}>
            <Card.Img 
             className="d-block w-100"
             src={item.thumbnailUrl}
             height="125px"
             />
            <Card.ImgOverlay>
                Product title
            </Card.ImgOverlay>
          </Card>
          <hr/>
        </CardGroup>
      </Carousel.Item>
    ));
    return (
      <>
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            {suggestedItems}
        </Carousel>
        </>
      );
}


ThumbnailCarousel.propTypes = {
    getItems: PropTypes.func.isRequired,
    fetchReducer: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items
});

export default connect (mapStateToProps,{getItems})(ThumbnailCarousel);
