import React, {Component, useState, useEffect} from 'react';
//react-boottrap
import {Container,Carousel,Button, Card, CardGroup, Row,Col} from 'react-bootstrap'
//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProductDetails,getItems } from "../../actions/fetchActions";
import { addProductToBasket } from "../../actions/basketActions";
//assets
import infoIcon from "../../assets/infoIcon.png";
//router
import { Link } from 'react-router-dom';




const SimilarProducts = ({getProductDetails, selectedProduct, match, getItems,
  addProductToBasket,
  fetchReducer,
  basketReducer }) => {

    useEffect(() => {
      getItems();
    },[]);

    useEffect(() => {
      var paramProduct = match.params.id;
      getProductDetails(paramProduct);
      console.log(match,"match similar products")
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: null ? 'auto' : 'smooth' //for Safari support
      });
      },[match]);


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
<Container className="productTitle col-12">
        <Col className="col-xs-12 col-md-4">
        <hr/> 
      <div  className="subtitleLargest">    
      Similar Products
      </div> 
      </Col>
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
  getProductDetails: PropTypes.func.isRequired,
  selectedProduct: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired,
  addProductToBasket: PropTypes.func.isRequired,
  fetchReducer: PropTypes.array.isRequired,
  basketReducer: PropTypes.array.isRequired

}

const mapStateToProps = state => ({
  selectedProduct: state.fetchReducer.productDetails,
  fetchReducer: state.fetchReducer.items,
  basketReducer: state.basketReducer.basketProducts
});

export default connect (mapStateToProps,{getProductDetails,getItems, addProductToBasket})(SimilarProducts);
