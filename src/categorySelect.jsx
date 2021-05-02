import React, { useState } from "react";
import classes from "./Styles.module.css";
import "./signup.css";

  const Category = [
    { key: 1, value: "Male" },
    { key: 2, value: "Female" },
    { key: 3, value: "Unisex" },
    { key: 4, value: "Children" },
    { key: 5, value: "Coulpe" },
  ];

const CategorySelect = ({ onCategorySelectChange, CategoryValue }) => {
  return (
    <div className="one">
      <label className="upload-label">Product Category</label>
      <select
        onChange={onCategorySelectChange}
        value={CategoryValue}
        id="input"
      >
        {Category.map((item) => (
          <option key={item.key} value={item.key}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;

