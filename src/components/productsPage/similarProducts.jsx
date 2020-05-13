import React, {Component, useState, useEffect} from 'react';
//react-boottrap
import {Container,Carousel,Button, Card, CardGroup, Row} from 'react-bootstrap'
//redux
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems} from '../../actions/fetchActions';
//assets
import infoIcon from "../../assets/infoIcon.png";
//router
import { Link } from 'react-router-dom';




const SimilarProducts = ({getItems, fetchReducer,addProductToBasket,basketReducer }) => {

    useEffect (()=>{
        getItems();
    },[])
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
    const itemsForYou = fetchReducer.slice(0,4).map(item=>(
      <Card key={item.id} className="thumbnailCarouselRow">
      <Link to={"/" + item.id}>
        <Card.Img variant="top"src={item.jumbotronUrl}/>
        </Link>
        <Card.Body>
    <Card.Title><div>{item.title}</div><p>€{item.price}</p></Card.Title>
        </Card.Body>
        <Card.Footer>
        <Link to={"/" + item.id}>
        <img
            className="infoIcon"
            src={infoIcon}
            alt="basket img"
            height="30px"
            width="30px"
          ></img>
          </Link>
        </Card.Footer>
      </Card>
    ));
    const itemsForYouTwo = fetchReducer.slice(5,9).map(item=>(
      <Card key={item.id} className="thumbnailCarouselRow">
        <Link to={"/" + item.id}>
        <Card.Img variant="top"src={item.jumbotronUrl}/>
        </Link>
        <Card.Body>
    <Card.Title><div>{item.title}</div><p>€{item.price}</p></Card.Title>
        </Card.Body>
        <Card.Footer>
        <Link to={"/" + item.id}>
        <img
            className="infoIcon"
            src={infoIcon}
            alt="basket img"
            height="30px"
            width="30px"
          ></img>
          </Link>
        </Card.Footer>
      </Card>
    ));
    return (
<>
<Container className="title">
<div className="subtitleLargest">
<hr/>
        Similar Products
      </div>
</Container>
      <Container className="col-12" >
        <Carousel 
         className="thumbnailCarousel" 
         indicators={false} activeIndex={index} direction={direction} onSelect={handleSelect}>
          <Carousel.Item 
          >
            <Row className="col-12">
            <CardGroup>
          {itemsForYou}
          </CardGroup>
          </Row>
          </Carousel.Item>


          <Carousel.Item 
          >
            <Row className="col-12">
            <CardGroup>
          {itemsForYouTwo}
          </CardGroup>
          </Row>
          </Carousel.Item>
        </Carousel>
        </Container>
        </>
      );
}


SimilarProducts.propTypes = {
    getItems: PropTypes.func.isRequired,
    fetchReducer: PropTypes.array.isRequired

}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items,
basketReducer: state.basketReducer.basketProducts
});

export default connect (mapStateToProps,{getItems})(SimilarProducts);
