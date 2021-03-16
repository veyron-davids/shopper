import React from 'react'
import "./Styles.css";

 export  function renderButton(label) {
   return (
     <button className="custom-buttons" >
       {label}
     </button>
   );
 }
