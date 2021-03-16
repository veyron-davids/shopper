import React from "react";
import "./Styles.css";

const seacrchFeature = ({ searchfield, searchChange }) => {
  return (
    <div className="category-search-bar">
      <input
        type="text"
        id="input"
        placeholder=""
        onChange={searchChange}
      />
      <div className="search-icon">
        <i class="fa fa-search"></i>
      </div>
      <button className="category-search-button">Search</button>
    </div>
  );
};

export default seacrchFeature;
