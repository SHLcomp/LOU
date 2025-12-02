import './Filter.scss'
import { useState } from 'react';

const Filter = ({ filterItems, onFilter }) => {
  const [menu, setMenu] = useState("all");

  const handleClick = (category) => {
    setMenu(category);
    onFilter(category);
  };


  return (
    <div className="filter">
      <h3><span>LOU </span> Projects</h3>
      <ul>
        <li 
          onClick={() => handleClick('all')} 
          className={`tag ${menu === 'all' ? 'active' : ''}`}
        >
          All
        </li>
        {
          filterItems.map((value, i) => (
            <li 
              key={i} 
              onClick={() => handleClick(value)} 
              className={`tag ${menu === value ? 'active' : ''}`}
            >
              {value}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Filter;
