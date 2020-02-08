import React from 'react';

//components
import JumbotronSale from './jumbotronSale';
import SlideMain from './slideMain';
import ChosenForYou from './chosenForYou';
import ChosenPromotions from './chosenPromotions';
import Discover from './discover';


const MainPage = (props) => {
  return (

    
      <>
      <JumbotronSale />
      <SlideMain />
      <ChosenForYou/>
      <ChosenPromotions/>
      <Discover/>
      </>
    
  );
}

export default MainPage;
