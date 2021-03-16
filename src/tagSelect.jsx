import React from "react";
import "./Styles.css";

const tag = [
  { key: 1, value: "New Testament" },
  { key: 2, value: "Old Testament" },
  { key: 3, value: "Love" },
  { key: 4, value: "Prayers" },
  { key: 5, value: "Victory" },
];

const TagSelect = ({ tagValue, onTagChange }) => {
  return (
    <div className="one">
      <label className="upload-label">Product Tag</label>
      <select onChange={onTagChange} value={tagValue} id="input">
        {tag.map((item) => (
          <option key={item.key} value={item.key}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TagSelect;
