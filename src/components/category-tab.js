import React from "react";
import "./category-tab.css";
const category = ["live plants", "reserved plans", "gift sets", "accessories"];
function CategoryTab() {
  return (
        <ul className='cat-wrapper'>
            <li className='cat'>All Products</li>
            <div className="divider"></div>
            {category.map((cat)=>{
                return(<>
                    <li className='cat'>{cat}</li>
                    <div className="divider"></div></>
                )
            })}
        </ul>
  );
}

export default CategoryTab;
