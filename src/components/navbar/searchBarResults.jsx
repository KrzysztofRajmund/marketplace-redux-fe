// import React, {Component, useState, useEffect} from 'react';
// import {Jumbotron,Container} from 'react-bootstrap'
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {getItems} from '../../actions/fetchActions';

// import NavMain from './navMain';




// const SearchBarResults = ({getItems, fetchReducer }) => {

//     useEffect (()=>{
//         getItems();
//     },[])


//   return (  
//     <div>
//     {productResult.map(search => (
//       <div>
//         <div key={search.id} class="columns is-gapless is-centered">
//           <div class="column is-2 filteredColumn">{search.title}</div>
//           <div class="column is-2 filteredColumn">{search.id}</div>
//         </div>
//         <hr></hr>
//       </div>
//     ))}
//   </div>
//   );
// }


// SearchBarResults.propTypes = {
//     getItems: PropTypes.func.isRequired,
//     fetchReducer: PropTypes.array.isRequired
// }

// const mapStateToProps = state => ({
// fetchReducer: state.fetchReducer.items
// });

// export default connect (mapStateToProps,{getItems})(SearchBarResults);
