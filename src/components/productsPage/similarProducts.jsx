import React, {Component, useState, useEffect} from 'react';
import {Row,Col,Button, Card, CardGroup} from 'react-bootstrap'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems} from '../../actions/fetchActions';




const SimilarProducts = ({getItems, fetchReducer }) => {

    useEffect (()=>{
        getItems();
    },[])

    
    const itemsForYou = fetchReducer.slice(0,1).map(item=>(
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
    ));
    return (
      <Row className="col-11">
      <Col className="subtitleLargest col-12">
        Similar Products
        <hr/>
      </Col>
        <Col className="col-12">
            {itemsForYou}
        </Col>
        </Row>
      );
    }


SimilarProducts.propTypes = {
    getItems: PropTypes.func.isRequired,
    fetchReducer: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items
});

export default connect (mapStateToProps,{getItems})(SimilarProducts);
