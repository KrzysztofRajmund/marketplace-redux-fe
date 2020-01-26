import React from 'react';
import {Provider} from 'react-redux';
import store from '../store'

import NavMain from './navbar/navMain';
import JumbotronSale from './homePage/jumbotronSale';
import SlideMain from './homePage/slideMain';
import ChosenForYou from './homePage/chosenForYou';
import ChosenPromotions from './homePage/chosenPromotions';
import WeekOffer from './homePage/weekOffer';
import WeekendOffer from './homePage/weekendOffer';
import Discover from './homePage/discover';
import Footer from './footer';


const Routing = (props) => {
  return (

    <Provider store={store}>
      <NavMain/>
      <JumbotronSale />
      <SlideMain />
      <ChosenForYou/>
      <ChosenPromotions/>
      <WeekOffer/>
      <WeekendOffer/>
      <Discover/>
      <Footer/>
    </Provider>
  );
}

export default Routing;
