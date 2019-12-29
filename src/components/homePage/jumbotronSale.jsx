import React, {Component, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
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
   <>
<div className="subtitleLargest">Jumbotron Sale:</div>
<div className="subtitleLarge">how is going</div>
<div className="subtitleOne">how is going</div>
<div className="subtitleTwo">how is going</div>
<div className="navSubtitleOne">how is going</div>
<div className="navSubtitleTwo">how is going</div>
{listOfItems}
   </>
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
