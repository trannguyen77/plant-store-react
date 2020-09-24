import React from 'react';
import './theme-components.css';

export default function Button({btnLabel}) {
    return (
<button className="template-btn">
    {btnLabel}
      </button>
    );
};