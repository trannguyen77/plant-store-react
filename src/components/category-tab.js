import React from "react";
import "./category-tab.css";
const category = ["all products","live plants", "reserved plans", "gift sets", "accessories"];
function CategoryTab() {
  return (
        <ul className='bar-wrapper'>
            {category.map((cat,idx)=>{
                return(<div className='cat-wrapper' key={idx}>
                    <li className='cat'>{cat} </li>
                    <div className="divider"></div></div>
                )
            })}
        </ul>
  );
}

export default CategoryTab;
