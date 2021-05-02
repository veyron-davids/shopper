import React from "react";


const DropZone = (props) => {

  return (
    <div className="drop-zone-container">
          <img
            src={props.image}
            alt={`productImg-${props.index}`}
            onClick={() => props.onDelete(props.image)}
          />
        </div>
  );
};

export default DropZone;
