import React, {Component, useState, useEffect} from 'react';
import {Container,Carousel,Button, Card, CardGroup, Row, Col, Table} from 'react-bootstrap'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems} from '../../actions/fetchActions';




const Discover = ({getItems, fetchReducer }) => {

    useEffect (()=>{
        getItems();
    },[])

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
    const discoverItems = fetchReducer.slice(0, 5).map(item => (
      <Table responsive>
        <tbody key={item.id}>
          <tr>
            <td>
              <img
                src={item.url}
                width="120px"
                height="70px"
                src={item.url}
              />
            </td>
            <td>Outlander - cast away</td>
            <td className=" float-right ">44.99 PLN</td>
          </tr>
        </tbody>
      </Table>
    ));

    const suggestedItems = fetchReducer.slice(0,3).map(item=>(
        <Carousel.Item key={item.id}>
        <img
          className="d-block w-100"
          src={item.url}
          alt="First slide"
          height="550px"
        />
        <Carousel.Caption>
          <h3>Sale -70%</h3>
          <Button className="slideMainBtn" type="button">Primary</Button>
        </Carousel.Caption>
      </Carousel.Item>
    ));
    return (
      <Row className="col-10">
        <Col className="col-8">
          <div className="subtitleLargest">
            Discover: Bestesellers -> New -> New Coming
            <hr />
          </div>
          {discoverItems}
          <Button className="transparentBtn float-centered" type="button">Show more ...</Button>
        </Col>
        <Col className="col-4">
          <div className="subtitleLargest">
            Suggested
            <hr />
          </div>
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={handleSelect}
          >
            {suggestedItems}
          </Carousel>
        </Col>
      </Row>
    );
}


Discover.propTypes = {
    getItems: PropTypes.func.isRequired,
    fetchReducer: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items
});

export default connect (mapStateToProps,{getItems})(Discover);
