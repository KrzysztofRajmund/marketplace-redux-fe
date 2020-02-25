import React, {Component, useState, useEffect} from 'react';
import {Jumbotron,Container} from 'react-bootstrap'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems} from '../../actions/fetchActions';




const JumbotronSale = ({getItems, fetchReducer }) => {

    useEffect (()=>{
        getItems();
    },[])


    const winterSaleItem = fetchReducer.slice(0,1).map(item=>(
        <Jumbotron className="jumbotronSale" key={item.id} fluid> 
             <img src={item.jumbotronUrl} alt="image" width="100%" height="auto"/>
        </Jumbotron>
    ));
  return (  
    <div>
    {winterSaleItem}
    </div>
  );
}


JumbotronSale.propTypes = {
    getItems: PropTypes.func.isRequired,
    fetchReducer: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items
});

export default connect (mapStateToProps,{getItems})(JumbotronSale);
