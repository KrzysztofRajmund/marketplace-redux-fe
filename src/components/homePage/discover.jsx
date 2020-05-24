import React, {Component, useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
//bootstrap
import {Container,Carousel,Button, Card, CardGroup, Row, Col, Table} from 'react-bootstrap'
//redux
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems} from '../../actions/fetchActions';
import { addProductToBasket } from "../../actions/basketActions";
//assets
import basketicon from "../navbar/assets/basketicon.png";
import promoCode from "../../assets/promoCode.png";
import infoIcon from "../../assets/infoIcon.png";
//router
import { Link } from 'react-router-dom';




const Discover = ({getItems, fetchReducer, addProductToBasket,basketReducer }) => {

    useEffect (()=>{
        getItems();
    },[])

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

       //Carousel 
       const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
      };

      const addProduct = (product,basketReducer) => {
        addProductToBasket(product,basketReducer) 
        };
      
      const suggestedItems = fetchReducer.slice(3,4).map(item=>(
          <Carousel.Item key={item.id}>
          {/* <img
            className="d-block w-100"
            src={item.verticalCardUrl}
            height="auto"
            width="auto"
          /> */}
          <ReactPlayer url={item.videoUrl} width="320" height="480" playing="true" loop="true"/>
          <Carousel.Caption>
            <h3>Sale -30%</h3>
            <Link to={"/" + item.id}>
        <img
            src={infoIcon}
            alt="info img"
            height="30px"
            width="30px"
          ></img>
          </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ));

    //Toggle useState
     const [toggleBestsellers,setToggleBestsellers] = useState(true);
     const [togglePremiere, setTogglePremiere] = useState(false);
     const [toggleNewcoming, setToggleNewcoming] = useState(false);

     //Toggle Bestsellers
     const onClickToggleBestsellers = async () => {
      await setToggleBestsellers(true);
      await setTogglePremiere(false);
      await setToggleNewcoming(false);
     }

     //Toggle Premiere
     const onClickTogglePremiere = async () => {
       await setToggleBestsellers(false);
       await setTogglePremiere(true);
       await setToggleNewcoming(false);
     }

     //Toggle Newcoming
     const onClickToggleNewcoming = async () =>{
       await setToggleBestsellers(false);
       await setTogglePremiere(false);
       await setToggleNewcoming(true);
     }

     
  //    let discoverItems
  //  switch (discoverItems) {

  //    case toggleBestsellers:
  //    discoverItems = bestsellersItems;
  //    break;

  //    case togglePremiere:
  //    discoverItems = premiereItems;
  //    break;

  //    case toggleNewcoming:
  //    discoverItems = newcomingItems;
  //    break;

  //    default:
  //      discoverItems = bestsellersItems;
  //  }

     // CONDITIONALS FOR TOGGLE !

   //toggle Bestsellers
   if (toggleBestsellers){
    const discoverItems = fetchReducer.slice(2,5).map(item => (
   <Table  key={item.id} responsive>
  <tbody  className="transparentBtn">
         <tr>
         <Link to={"/" + item.id}>
           <td>
             <img
               src={item.url}
               width="120px"
               height="auto"
             />
           </td>
           <td>{item.title}</td>
            <td>{item.description.substr(0, 50) + "..."}...</td>
           <td className=" float-right">€{item.price}</td>
           </Link>
         </tr>
       </tbody>
   </Table>
   ));
     return (
      <Row className="col-12 hideSetionMediaOne">
        <Col className="col-8">
        <hr />
          <div className="mb-3">
            <Button className="transparentBtn ml-0" onClick={onClickToggleBestsellers}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>Bestsellers</Button>
            <Button className="transparentBtn" bordless onClick={onClickTogglePremiere}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>Premiere</Button>
            <Button className="transparentBtn" onClick={onClickToggleNewcoming}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>New Coming</Button>
          </div>
          {discoverItems}
          <Button className="transparentBtn float-centered mb-4" type="button">
            Show more ...
          </Button>
        </Col>
        <Col className="col-4">
        <hr />
          <div className="subtitleLargest hideSetionMediaOne">
            Suggested
          </div>
          <Carousel className="discoverCarouselItem"
            activeIndex={index}
            direction={direction}
            onSelect={handleSelect}
            controls={false}
            
          >
            {suggestedItems}
          </Carousel>
        </Col>
      </Row>
    );
     }

//toggle Premiere
if (togglePremiere){
  const discoverItems = fetchReducer.slice(6,11).map(item => (
 <Table key={item.id} responsive>
 <tbody  className="transparentBtn">
         <tr>
         <Link to={"/" + item.id}>
           <td>
             <img
               src={item.url}
               width="120px"
               height="70px"
               src={item.url}
             />
           </td>
           <td>{item.title}</td>
           <td className=" float-right">€{item.price}</td>
           </Link>
         </tr>
       </tbody>
 </Table>
 ));
   return (
    <Row className="col-12 hideSetionMediaOne">
      <Col className="col-8">
      <hr />
        <div className="mb-3">
        <Button className="transparentBtn ml-0" onClick={onClickToggleBestsellers}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>Bestsellers</Button>
            <Button className="transparentBtn" onClick={onClickTogglePremiere}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>Premiere</Button>
            <Button className="transparentBtn" onClick={onClickToggleNewcoming}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>New Coming</Button>
        </div>
        {discoverItems}
        <Button className="transparentBtn float-centered mb-4" type="button">
          Show more ...
        </Button>
      </Col>
      <Col className="col-4">
      <hr />
        <div className="subtitleLargest hideSetionMediaOne">
          Suggested
        </div>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={handleSelect}
            controls={false}
        >
          {suggestedItems}
        </Carousel>
      </Col>
    </Row>
  );
   }

    //toggle Newcoming
    if (toggleNewcoming){
      const discoverItems = fetchReducer.slice(0,5).map(item => (
     <Table key={item.id} responsive>
       <tbody  className="transparentBtn">
         <tr>
         <Link to={"/" + item.id}>
           <td>
             <img
               src={item.url}
               width="120px"
               height="70px"
               src={item.url}
             />
           </td>
           <td>{item.title}</td>
           <td className=" float-right">€{item.price}</td>
           </Link>
         </tr>
       </tbody>
     </Table>
     ));
       return (
        <Row className="col-12 hideSetionMediaOne">
          <Col className="col-8">
          <hr />
            <div className="mb-3">
            <Button className="transparentBtn ml-0" onClick={onClickToggleBestsellers}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>Bestsellers</Button>
            <Button className="transparentBtn" onClick={onClickTogglePremiere}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>Premiere</Button>
            <Button className="transparentBtn" onClick={onClickToggleNewcoming}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>New Coming</Button>
            </div>
            {discoverItems}
            <Button className="transparentBtn float-centered mb-4" type="button">
              Show more ...
            </Button>
          </Col>
          <Col className="col-4">
            <hr/>
            <div className="subtitleLargest hideSetionMediaOne">
              Suggested
            </div>
            <Carousel
              activeIndex={index}
              direction={direction}
              onSelect={handleSelect}
            controls={false}
            >
              {suggestedItems}
            </Carousel>
          </Col>
        </Row>
      );
       }
       return (
        <Row className="col-12 hideSetionMediaOne">
          <Col className="col-8">
          <hr/>
            <div className="mb-3">
            <Button className="transparentBtn ml-0" onClick={onClickToggleBestsellers}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>Bestsellers</Button>
            <Button className="transparentBtn" onClick={onClickTogglePremiere}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>Premiere</Button>
            <Button className="transparentBtn" onClick={onClickToggleNewcoming}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>New Coming</Button>
            </div>
            <Button className="transparentBtn float-centered mb-4" type="button">
              Show more ...
            </Button>
          </Col>
          <Col className="col-4">
          <hr/>
            <div className="subtitleLargest hideSetionMediaOne">
              Suggested
            </div>
            <Carousel
              activeIndex={index}
              direction={direction}
              onSelect={handleSelect}
            controls={false}
            >
              {suggestedItems}
            </Carousel>
          </Col>
        </Row>
      );
}


Discover.propTypes = {
    getItems: PropTypes.func.isRequired,
    addProductToBasket: PropTypes.func.isRequired,
    fetchReducer: PropTypes.array.isRequired,
    basketReducer: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items,
basketReducer: state.basketReducer.basketProducts
});

export default connect (mapStateToProps,{getItems,addProductToBasket})(Discover);
