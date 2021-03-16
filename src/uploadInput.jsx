import React from "react";

const UploadInput = ({ name, label, error, ...rest }) => {
  return (
    <div className="upload-a">
      <label htmlFor={name} className="upload-label">
        {label}
      </label>
      <input
        {...rest}
        name={name}
        id={name}
        className="upload-general"
        id="input"
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default UploadInput;
