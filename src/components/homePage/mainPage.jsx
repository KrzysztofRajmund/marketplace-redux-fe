import React from 'react';

//components
// import JumbotronSale from './jumbotronSale';
import SlideMain from './slideMain';
import ChosenForYou from './chosenForYou';
import Discover from './discover';
import ThumbnailCarousel from './../productsPage/thumbnailCarousel';
import GetLoose from './../productsPage/getLoose';


const MainPage = (props) => {
  return (

    
      <>
      {/* <JumbotronSale /> */}
      <SlideMain />
      <GetLoose/>
      {/* <ThumbnailCarousel/> */}
      <Discover/>
      <ChosenForYou/>
      </>
    
  );
}

export default MainPage;
