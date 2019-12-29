import React from 'react';
import {Provider} from 'react-redux';
import store from '../store'

import JumbotronSale from './homePage/jumbotronSale';
import SlideMain from './homePage/slideMain';


const Routing = (props) => {
  return (
    <Provider store={store}>
      <JumbotronSale />
      <SlideMain />
    </Provider>
  );
}

export default Routing;
