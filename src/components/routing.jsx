import React from 'react';
import {Provider} from 'react-redux';
import store from '../store'


const Routing = (props) => {
  return (
      <Provider store={store}>
    <div>
    HELLO
    </div>
    </Provider>
  );
}

export default Routing;
