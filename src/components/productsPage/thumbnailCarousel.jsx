import React, {Component, useState, useEffect} from 'react';
import {Container,Carousel,Button,Card,CardGroup, Modal} from 'react-bootstrap'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems, getProductDetails} from '../../actions/fetchActions';
import { Link } from 'react-router-dom';
import modalCarousel from './modalCarousel';




const ThumbnailCarousel = ({getItems,getProductDetails, fetchReducer,selectedProduct }) => {

    useEffect (()=>{
        getItems();
    },[])

  
    //modal button

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = (id) => {
          setShow(true)
          getProductDetails(id);
          console.log("id modal",id)
        
    };
    // carousel useState
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
   
    const suggestedItems = fetchReducer.slice(0, 1).map(item => (
      <Carousel.Item className="mr-0">
        <CardGroup className="pl-2 mb-3 pb-5">
        <Button  variant="link" onClick={()=>handleShow(item.id)}>
          <Card className="cardGroup m-1 bg-dark text-white" 
          style={{ width: '14rem', height: '6rem'}} key={item.id}>

            <Card.Img 
             className="d-block w-100"
             src={item.jumbotronUrl}
             height="125px"
             />
            
            <Card.ImgOverlay>
                <small>{item.title}</small>
            </Card.ImgOverlay>
          </Card>
          </Button>
          <Button  variant="link" onClick={()=>handleShow(item.id)}>
          <Card className="cardGroup m-1 bg-dark text-white" 
          style={{ width: '14rem', height: '6rem'}} key={item.id}>

            <Card.Img 
             className="d-block w-100"
             src={item.jumbotronUrl}
             height="125px"
             />
            
            <Card.ImgOverlay>
                <small>{item.title}</small>
            </Card.ImgOverlay>
          </Card>
          </Button>

          <Button variant="link" onClick={()=>handleShow(item.id)}>
          <Card className="cardGroup m-1 bg-dark text-white" 
          style={{ width: '14rem', height: '6rem'}} key={item.id}>

            <Card.Img 
             className="d-block w-100"
             src={item.jumbotronUrl}
             height="125px"
             />
            
            <Card.ImgOverlay>
                <small>{item.title}</small>
            </Card.ImgOverlay>
          </Card>
          </Button>

          <Button variant="link" onClick={()=>handleShow(item.id)}>
          <Card className="cardGroup m-1 bg-dark text-white" 
          style={{ width: '14rem', height: '6rem'}} key={item.id}>

            <Card.Img 
             className="d-block w-100"
             src={item.jumbotronUrl}
             height="125px"
             />
            
            <Card.ImgOverlay>
                <small>{item.title}</small>
            </Card.ImgOverlay>
          </Card>
          </Button>
      
          <hr/>
        </CardGroup>
      </Carousel.Item>
    ));
    return (
      <>
      {/* modal */}
      <Modal show={show} 
        onHide={handleClose}
        >
            
            <Modal.Header 
            closeButton
            >
              <Modal.Body>
              <Card.Img 
             className="d-block w-100"
             src={selectedProduct.verticalCardUrl}
             height="auto"
             />
              </Modal.Body>
            </Modal.Header>
           
          </Modal>
          {/* carousel */}
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            {suggestedItems}
        </Carousel>
        </>
      );
}


ThumbnailCarousel.propTypes = {
    getItems: PropTypes.func.isRequired,
    getProductDetails: PropTypes.func.isRequired,
    fetchReducer: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items,
selectedProduct: state.fetchReducer.productDetails
});

export default connect (mapStateToProps,{getItems, getProductDetails})(ThumbnailCarousel);
