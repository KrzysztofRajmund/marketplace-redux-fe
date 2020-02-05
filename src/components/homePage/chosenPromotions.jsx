import React, {Component, useState, useEffect} from 'react';
import {Container,Carousel,Button, Card, CardGroup, Row, Col} from 'react-bootstrap'
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems} from '../../actions/fetchActions';
import WeekendOffer from './weekendOffer';




const ChosenPromotions = ({getItems, fetchReducer }) => {

    useEffect (()=>{
        getItems();
    },[])
    //Carousel
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
    //TogglePromotion
    const [togglePromotion, setTogglePromotion] = useState(true);
    console.log('promo',togglePromotion);
    const [toggleWeekendOffer, setToggleWeekendOffer] = useState(false);
    console.log('weekend',toggleWeekendOffer);
    const [toggleWeekOffer, setToggleWeekOffer] = useState(false);
    console.log('week',toggleWeekOffer);

    const onClickTogglePromotion = async () => {
    await setTogglePromotion(true)
    console.log("clicked promo", togglePromotion)
    await setToggleWeekendOffer(false)
    await setToggleWeekOffer(false)
   }

   //ToggleWeekendOffer
   const onClickToggleWeekendOffer = async () => {
    await setTogglePromotion(false)
    await setToggleWeekendOffer(true)
    console.log("clicked weekendoffer", toggleWeekendOffer)
    await setToggleWeekOffer(false)
   }

    //ToggleWeekOffer
    const onClickToggleWeekOffer = async () => {
      await setTogglePromotion(false)
      await setToggleWeekendOffer(false)
      await setToggleWeekOffer(true)
      console.log("clicked weekoffer", toggleWeekOffer)
     }
   



   //items fetch
    const itemsForYou = fetchReducer.slice(0,1).map(item=>(
        <Carousel.Item>
        <CardGroup>
          
            <Col className="colGroup col-6">
            <Row className=" rowGroup col-12">
        <Card className="cardGroup col-5" style={{ width: '16rem', height: '28rem'}} key={item.id}>
        <Card.Img 
          className="d-block w-100"
          src={item.url}
          height="350px" 
        src={item.url} />
        <Card.Body>
          <Card.Title>Outlander - cast away</Card.Title>
          <Button variant="primary" className=" lead float-right mr-3">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="cardGroup col-5" style={{ width: '16rem', height: '28rem'}} key={item.id}>
        <Card.Img 
          className="d-block w-100"
          src={item.url}
          height="350px" 
        src={item.url} />
        <Card.Body>
          <Card.Title>Outlander - cast away</Card.Title>
          <Button variant="primary" className=" lead float-right mr-3">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Row>
      </Col>
      <Col className=" colGroup col-6 ">
      <Row className=" rowGroup col-12">
      <Card className="cardGroup col-5" style={{ width: '16rem', height: '13rem'}} key={item.id}>
        <Card.Img 
          className="d-block w-100"
          src={item.url}
          height="125px" 
        src={item.url} />
        <Card.Body>
          <Card.Title>Outlander - cast away</Card.Title>
          <Button variant="primary" className=" lead float-right mr-3">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="cardGroup col-5" style={{ width: '16rem', height: '13rem'}} key={item.id}>
        <Card.Img 
          className="d-block w-100"
          src={item.url}
          height="125px" 
        src={item.url} />
        <Card.Body>
          <Card.Title>Outlander - cast away</Card.Title>
          <Button variant="primary" className=" lead float-right mr-3">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="cardGroup col-5" style={{ width: '16rem', height: '13rem'}} key={item.id}>
        <Card.Img 
          className="d-block w-100"
          src={item.url}
          height="125px" 
        src={item.url} />
        <Card.Body>
          <Card.Title>Outlander - cast away</Card.Title>
          <Button variant="primary" className=" lead float-right mr-3">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="cardGroup col-5" style={{ width: '16rem', height: '13rem'}} key={item.id}>
        <Card.Img 
          className="d-block w-100"
          src={item.url}
          height="125px" 
        src={item.url} />
        <Card.Body>
          <Card.Title>Outlander - cast away</Card.Title>
          <Button variant="primary" className=" lead float-right mr-3">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Row>
      </Col>
     
      </CardGroup>
      </Carousel.Item>
    ));
    return (
      <>
      <div className="subtitleLargest">
        <button onClick={onClickTogglePromotion}>Chosen Promotions:</button>
        <button onClick={onClickToggleWeekendOffer}>WeekendOffer -></button>
        <button onClick={onClickToggleWeekOffer}>Week Offer</button>
        <hr/>
      </div>
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            {itemsForYou}
        </Carousel>
        </>
      );
}


ChosenPromotions.propTypes = {
    getItems: PropTypes.func.isRequired,
    fetchReducer: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items
});

export default connect (mapStateToProps,{getItems})(ChosenPromotions);
