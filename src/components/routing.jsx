import React from 'react';
//redux
import {Provider} from 'react-redux';
import store from '../store'
//routing
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
//components
import NavMain from './navbar/navMain';
import Footer from './footer';
import MainPage from './homePage/mainPage';
import ProductDetails from './productsPage/productDetails';


const Routing = (props) => {
  return (

    <Provider store={store}>
      <Router>
      <Route path="/" component={NavMain}/>
      <Switch>
      <Route path="/mainpage" component={MainPage}/>
      <Route path="/:id"  component={ProductDetails}/>
      </Switch>
      <Route path="/" component={Footer}/>
      </Router>
    </Provider>
  );
}

export default Routing;
