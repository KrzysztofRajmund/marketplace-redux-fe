import React from 'react';
import {Provider} from 'react-redux';
import store from '../store'

import JumbotronSale from './homePage/jumbotronSale';
import SlideMain from './homePage/slideMain';
import ChosenForYou from './homePage/chosenForYou';


const Routing = (props) => {
  return (
    <Provider store={store}>
      <JumbotronSale />
      <SlideMain />
      <ChosenForYou/>
    </Provider>
  );
}

export default Routing;
