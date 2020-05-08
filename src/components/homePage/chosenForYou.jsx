import React, {Component, useState, useEffect} from 'react';
//react-boottrap
import {Container,Carousel,Button, Card, CardGroup, Row} from 'react-bootstrap'
//redux
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems} from '../../actions/fetchActions';
import { addProductToBasket } from "../../actions/basketActions";
//assets
import basketicon from "../navbar/assets/basketicon.png";




const ChosenForYou = ({getItems, fetchReducer,addProductToBasket,basketReducer }) => {

    useEffect (()=>{
        getItems();
    },[])

    const addProduct = (product,basketReducer) => {
      addProductToBasket(product,basketReducer) 
      };

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
    const itemsForYou = fetchReducer.slice(0,2).map(item=>(
      <Row className="col-12 col-md-6">
      <Card key={item.id} className="chosenForYouRow">
        <Card.Img variant="top"src={item.jumbotronUrl}/>
        <Card.Body>
    <Card.Title><div>{item.title}</div><p>${item.price}</p></Card.Title>
        </Card.Body>
        <Card.Footer>
          <Button className="slideMainBtn" onClick={() => addProduct(item,basketReducer)}> <img
                        src={basketicon}
                        alt="basket img"
                        height="30px"
                        width="30px"
                      ></img></Button>
        </Card.Footer>
      </Card>
      </Row>
    ));
    const itemsForYouTwo = fetchReducer.slice(2,4).map(item=>(
      <Row className="col-12 col-md-6">
      <Card key={item.id} className="chosenForYouRow">
        <Card.Img variant="top"src={item.jumbotronUrl}/>
        <Card.Body>
    <Card.Title><div>{item.title}</div><p>${item.price}</p></Card.Title>
        </Card.Body>
        <Card.Footer>
        <Button className="slideMainBtn" onClick={() => addProduct(item,basketReducer)}> <img
                        src={basketicon}
                        alt="basket img"
                        height="30px"
                        width="30px"
                      ></img></Button>
        </Card.Footer>
      </Card>
      </Row>
    ));
    return (
      <Container className="col-12" >
      <div className="subtitleLargest">
      <hr/>
        Chosen For You
      </div>
        <Carousel className="chosenForYouCarousel" activeIndex={index} direction={direction} onSelect={handleSelect}>
          <Carousel.Item>
            <CardGroup>
          {itemsForYou}
          {itemsForYouTwo}
          </CardGroup>
          </Carousel.Item>
          <Carousel.Item>
            <CardGroup>
          {itemsForYou}
          {itemsForYouTwo}
          </CardGroup>
          </Carousel.Item>
        </Carousel>
        </Container>
      );
}


ChosenForYou.propTypes = {
    getItems: PropTypes.func.isRequired,
    addProductToBasket: PropTypes.func.isRequired,
    fetchReducer: PropTypes.array.isRequired,
    basketReducer: PropTypes.array.isRequired

}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items,
basketReducer: state.basketReducer.basketProducts
});

export default connect (mapStateToProps,{getItems,addProductToBasket})(ChosenForYou);
