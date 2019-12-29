import React, {Component, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getItems} from '../../actions/fetchActions';




const JumbotronSale = ({getItems, fetchReducer }) => {

    useEffect (()=>{
        getItems();
    },[])


    const listOfItems = fetchReducer.slice(0,1).map(item=>(
        <div key={item.id}>
            <img src={item.url} alt="image" width="100%" height="200px"/>
        </div>
    ));
  return (  
   <div>
JUMBOTRON SALE:
{listOfItems}
   </div>
  );
}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items
});

export default connect (mapStateToProps,{getItems})(JumbotronSale);
