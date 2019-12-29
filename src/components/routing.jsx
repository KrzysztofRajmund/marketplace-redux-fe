import React from 'react';
import {Provider} from 'react-redux';
import store from '../store'

import JumbotronSale from './homePage/jumbotronSale';


const Routing = (props) => {
  return (
    <Provider store={store}>
      <JumbotronSale />
    </Provider>
  );
}

export default Routing;
