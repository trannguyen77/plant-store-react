import React from 'react';
import './template-components.css';

function Button({btnLabel}) {
    return (
<button className="template-btn">
    {btnLabel}
      </button>
    );
}

export default Button;