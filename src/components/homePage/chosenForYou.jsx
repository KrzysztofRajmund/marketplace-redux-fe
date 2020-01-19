import React, {Component, useState, useEffect} from 'react';
import {Container,Carousel,Button, Card, CardGroup} from 'react-bootstrap'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems} from '../../actions/fetchActions';




const ChosenForYou = ({getItems, fetchReducer }) => {

    useEffect (()=>{
        getItems();
    },[])

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
    const itemsForYou = fetchReducer.slice(0,1).map(item=>(
        <Carousel.Item>
        <CardGroup>
        <Card className="cardGroup" style={{ width: '16rem', height: '18rem'}} key={item.id}>
        <Card.Img 
          className="d-block w-100"
          src={item.url}
          height="200px" 
        src={item.url} />
        <Card.Body>
          <Card.Title>Outlander - cast away</Card.Title>
          <Button variant="primary" className=" lead float-right mr-3">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="cardGroup" style={{ width: '16rem', height: '18rem'}} key={item.id}>
        <Card.Img 
          className="d-block w-100"
          src={item.url}
          height="200px" 
        src={item.url} />
        <Card.Body>
          <Card.Title>Outlander - cast away</Card.Title>
          <Button variant="primary" className=" lead float-right mr-3">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="cardGroup" style={{ width: '16rem', height: '18rem'}} key={item.id}>
        <Card.Img 
          className="d-block w-100"
          src={item.url}
          height="200px" 
        src={item.url} />
        <Card.Body>
          <Card.Title>Outlander - cast away</Card.Title>
          <Button variant="primary" className=" lead float-right mr-3">Go somewhere</Button>
        </Card.Body>
      </Card>
      </CardGroup>
      <CardGroup>
        <Card className="cardGroup" style={{ width: '16rem', height: '18rem'}} key={item.id}>
        <Card.Img 
          className="d-block w-100"
          src={item.url}
          height="200px" 
        src={item.url} />
        <Card.Body>
          <Card.Title>Outlander - cast away</Card.Title>
          <Button variant="primary" className=" lead float-right mr-3">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="cardGroup" style={{ width: '16rem', height: '18rem'}} key={item.id}>
        <Card.Img 
          className="d-block w-100"
          src={item.url}
          height="200px" 
        src={item.url} />
        <Card.Body>
          <Card.Title>Outlander - cast away</Card.Title>
          <Button variant="primary" className=" lead float-right mr-3">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="cardGroup" style={{ width: '16rem', height: '18rem'}} key={item.id}>
        <Card.Img 
          className="d-block w-100"
          src={item.url}
          height="200px" 
        src={item.url} />
        <Card.Body>
          <Card.Title>Outlander - cast away</Card.Title>
          <Button variant="primary" className=" lead float-right mr-3">Go somewhere</Button>
        </Card.Body>
      </Card>
      </CardGroup>
      </Carousel.Item>
    ));
    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            {itemsForYou}
        </Carousel>
      );
}


ChosenForYou.propTypes = {
    getItems: PropTypes.func.isRequired,
    fetchReducer: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items
});

export default connect (mapStateToProps,{getItems})(ChosenForYou);
