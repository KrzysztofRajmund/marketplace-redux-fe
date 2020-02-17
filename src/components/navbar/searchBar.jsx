import React, {Component, useState, useEffect} from 'react';
import {Jumbotron,Container} from 'react-bootstrap'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems} from '../../actions/fetchActions';




const SearchBar = ({getItems, fetchReducer }) => {

    useEffect (()=>{
        getItems();
    },[])


  return (  
    <div>
    searchBar
    </div>
  );
}


SearchBar.propTypes = {
    getItems: PropTypes.func.isRequired,
    fetchReducer: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items
});

export default connect (mapStateToProps,{getItems})(SearchBar);
