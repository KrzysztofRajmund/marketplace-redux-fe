// import React, {Component, useState, useEffect} from 'react';
// import {Container,Carousel,Button,Card,CardGroup, Modal} from 'react-bootstrap'
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {getItems} from '../../actions/fetchActions';
// import { Link } from 'react-router-dom';




// const ThumbnailCarousel = ({getItems,fetchReducer }) => {

//     useEffect (()=>{
//         getItems();
//     },[])


//     return (
//       <>
//     <Modal show={show} 
//     // onHide={handleClose}
//     >
//         <Modal.Header 
//         // closeButton
//         >
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" 
//         //   onClick={handleClose}
//           >
//             Close
//           </Button>
//           <Button variant="primary" 
//         //   onClick={handleClose}
//           >
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//         </>
//       );
// }


// ThumbnailCarousel.propTypes = {
//     getItems: PropTypes.func.isRequired,
//     fetchReducer: PropTypes.array.isRequired
// }

// const mapStateToProps = state => ({
// fetchReducer: state.fetchReducer.items
// });

// export default connect (mapStateToProps,{getItems})(ThumbnailCarousel);
