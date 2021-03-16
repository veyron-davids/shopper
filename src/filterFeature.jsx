import React, { Component } from 'react'
import Form from "./Form";
import "./Styles.css";

class FilterFeature extends Form {
  render() {
    return (
      <div className="filter-container">
        {/* <div className="filter-heading">
          <h2>Filter Collections</h2>
        </div>
        <br />
        {this.renderSelect("category", "Category")} */}
      </div>
    );
  }
}
export default FilterFeature;
