import React from 'react';

//components
import JumbotronSale from './jumbotronSale';
import SlideMain from './slideMain';
import ChosenForYou from './chosenForYou';
import Discover from './discover';


const MainPage = (props) => {
  return (

    
      <>
      <JumbotronSale />
      <SlideMain />
      <ChosenForYou/>
      <Discover/>
      </>
    
  );
}

export default MainPage;
