import React from "react";
import "./template-components.css";

function Button({ btnLabel, onClick }) {
  return (
    <button onClick={onClick} className="template-btn">
      {btnLabel}
    </button>
  );
}

export default Button;
