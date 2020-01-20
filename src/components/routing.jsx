import React from 'react';
import {Provider} from 'react-redux';
import store from '../store'

import JumbotronSale from './homePage/jumbotronSale';
import SlideMain from './homePage/slideMain';
import ChosenForYou from './homePage/chosenForYou';
import ChosenPromotions from './homePage/chosenPromotions';


const Routing = (props) => {
  return (
    <Provider store={store}>
      <JumbotronSale />
      <SlideMain />
      <ChosenForYou/>
      <ChosenPromotions/>
    </Provider>
  );
}

export default Routing;
