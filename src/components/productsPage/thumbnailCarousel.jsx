import React, {useState, useEffect} from 'react';
//react-bootstrap
import {Container,Carousel,Card,CardGroup, Modal, Row} from 'react-bootstrap'
//redux
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems, getProductDetails} from '../../actions/fetchActions';
//router
import { Link } from 'react-router-dom';
//assets
import infoIcon from "../../assets/infoIcon.png";





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
   
    const productImages = fetchReducer.slice(3,7).map(item=>(
      <Card key={item.id} className="thumbnailCarouselRow" onClick={()=>handleShow(item.id)}>
      
        <Card.Img variant="top"src={item.verticalCardUrl}/>
        
      </Card>
    ));
    const productImagesTwo = fetchReducer.slice(8,12).map(item=>(
      <Card key={item.id} 
      className="thumbnailCarouselRow" 
      onClick={()=>handleShow(item.id)}>
      
        <Card.Img variant="top"src={item.verticalCardUrl}/>
        
      </Card>
    ));
   
    return (
      <>
      {/* modal */}
      <Modal show={show} 
        onHide={handleClose}
        // size="xl"
        className="modalProductDetails"
        backdropClassName="backdropModalProductPage"
        >     
              <Card.Img 
             className="d-block w-100"
             src={selectedProduct.verticalCardUrl}
             height="auto"
             />
            <Link  className="modalInfoIcon" onClick={handleClose} to={"/" + selectedProduct.id}>
        <img
            src={infoIcon}
            alt="infoicon img"
            height="30px"
            width="30px"
          />
          </Link>
           
          </Modal>
          {/* carousel */}
          <Container className="col-12" >
        <Carousel 
        className="thumbnailCarousel" 
        activeIndex={index}
        interval={null}
        indicators={false}
         direction={direction} onSelect={handleSelect}>
        
          <Carousel.Item>
          <Row className="col-12">
            <CardGroup>
          {productImages}
          </CardGroup>
          </Row>
          </Carousel.Item>
          <Carousel.Item>
          <Row className="col-12">
            <CardGroup>
          {productImagesTwo}
          </CardGroup>
          </Row>
          </Carousel.Item>
         
        </Carousel>
        </Container>
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
