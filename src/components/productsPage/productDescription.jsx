import React, { Component, useState, useEffect } from "react";
import {
  Row,
  Col,
  Table
} from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems, getProductDetails } from "../../actions/fetchActions";
import { Link } from "react-router-dom";


const ProductDescription = ({
  getItems,
  getProductDetails,
  fetchReducer,
  selectedProduct
}) => {
  useEffect(() => {
    getItems();
  }, []);

  return (
    <Row className="col-11">
      {/* Product Description */}
      <Col className="col-7">
        <h5>Description</h5>
        <hr />
        <div className="basicDescriptionText">
            {selectedProduct.title}
            {selectedProduct.title}
            {selectedProduct.title}
            {selectedProduct.title}
            {selectedProduct.title}
            {selectedProduct.title}
            {selectedProduct.title}
            {selectedProduct.title}
            {selectedProduct.title}
        </div>
        
      </Col>
      {/* BulletPoints Table */}
      <Col className="col-5">
        <h5>BulletPoints</h5>
        <hr />
        <Table responsive borderless>
       <tbody>
         <tr>
           <td className="pl-0 pr-0 basicDescriptionText"> <strong>Brand:</strong></td>
           <td className="basicDescriptionText">Boethe</td>
         </tr>
         <tr>
           <td className="pl-0 pr-0 basicDescriptionText"> <strong>Product type:</strong></td>
           <td className="basicDescriptionText">Power Tools</td>
         </tr>
         <tr>
           <td className="pl-0 pr-0 basicDescriptionText"> <strong>Launched on:</strong></td>
           <td className="basicDescriptionText">05/2013</td>
         </tr>
         <tr>
           <td className="pl-0 pr-0 basicDescriptionText"> <strong>Language:</strong></td>
           <td className="basicDescriptionText">ENG/CN/PL</td>
         </tr>
       </tbody>
     </Table>
      </Col>
    </Row>
  );
};

ProductDescription.propTypes = {
  getItems: PropTypes.func.isRequired,
  getProductDetails: PropTypes.func.isRequired,
  fetchReducer: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  fetchReducer: state.fetchReducer.items,
  selectedProduct: state.fetchReducer.productDetails
});

export default connect(mapStateToProps, { getItems, getProductDetails })(
  ProductDescription
);
