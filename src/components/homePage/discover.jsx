import React, {Component, useState, useEffect} from 'react';
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
      
      const suggestedItems = fetchReducer.slice(0,3).map(item=>(
          <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.verticalCardUrl}
            height="auto"
            width="auto"
          />
          <Carousel.Caption>
            <h3>Sale -30%</h3>
            <Button className="slideMainBtn" type="button" key={item.id} onClick={() => addProduct(item,basketReducer)}>
                <img
                  src={basketicon}
                  alt="basket img"
                  height="30px"
                  width="30px"
                ></img>
          </Button>
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

     // CONDITIONALS FOR TOGGLE !

   //toggle Bestsellers
   if (toggleBestsellers){
    const discoverItems = fetchReducer.slice(0, 5).map(item => (
   <Table responsive>
     <tbody key={item.id} className="transparentBtn">
       <tr>
         <td>
           <img
             src={item.url}
             width="120px"
             height="70px"
           />
         </td>
         <td>Outlander - Bestsellers</td>
         <td className=" float-right">44.99 PLN</td>
       </tr>
     </tbody>
   </Table>
   ));
     return (
      <Row className="col-12 hideSetionMediaOne">
        <Col className="col-8">
        <hr />
          <div className="mb-3">
            <Button className="transparentBtn discoverButton ml-0" onClick={onClickToggleBestsellers}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>Bestsellers</Button>
            <Button className="transparentBtn discoverButton" onClick={onClickTogglePremiere}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>Premiere</Button>
            <Button className="transparentBtn discoverButton" onClick={onClickToggleNewcoming}><img id="promoCode"
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
          >
            {suggestedItems}
          </Carousel>
        </Col>
      </Row>
    );
     }

//toggle Premiere
if (togglePremiere){
  const discoverItems = fetchReducer.slice(0, 5).map(item => (
 <Table responsive>
   <tbody key={item.id} className="transparentBtn">
     <tr>
       <td>
         <img
           src={item.url}
           width="120px"
           height="70px"
           src={item.url}
         />
       </td>
       <td>Outlander - Premiere</td>
       <td className=" float-right">44.99 PLN</td>
     </tr>
   </tbody>
 </Table>
 ));
   return (
    <Row className="col-12 hideSetionMediaOne">
      <Col className="col-8">
      <hr />
        <div className="mb-3">
        <Button className="transparentBtn discoverButton ml-0" onClick={onClickToggleBestsellers}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>Bestsellers</Button>
            <Button className="transparentBtn discoverButton" onClick={onClickTogglePremiere}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>Premiere</Button>
            <Button className="transparentBtn discoverButton" onClick={onClickToggleNewcoming}><img id="promoCode"
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
        >
          {suggestedItems}
        </Carousel>
      </Col>
    </Row>
  );
   }

    //toggle Newcoming
    if (toggleNewcoming){
      const discoverItems = fetchReducer.slice(0, 5).map(item => (
     <Table responsive>
       <tbody key={item.id} className="transparentBtn">
         <tr>
           <td>
             <img
               src={item.url}
               width="120px"
               height="70px"
               src={item.url}
             />
           </td>
           <td>Outlander - New Coming</td>
           <td className=" float-right">44.99 PLN</td>
         </tr>
       </tbody>
     </Table>
     ));
       return (
        <Row className="col-12 hideSetionMediaOne">
          <Col className="col-8">
          <hr />
            <div className="mb-3">
            <Button className="transparentBtn discoverButton ml-0" onClick={onClickToggleBestsellers}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>Bestsellers</Button>
            <Button className="transparentBtn discoverButton" onClick={onClickTogglePremiere}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>Premiere</Button>
            <Button className="transparentBtn discoverButton" onClick={onClickToggleNewcoming}><img id="promoCode"
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
            <Button className="transparentBtn discoverButton ml-0" onClick={onClickToggleBestsellers}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>Bestsellers</Button>
            <Button className="transparentBtn discoverButton" onClick={onClickTogglePremiere}><img id="promoCode"
                  src={promoCode}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img>Premiere</Button>
            <Button className="transparentBtn discoverButton" onClick={onClickToggleNewcoming}><img id="promoCode"
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
