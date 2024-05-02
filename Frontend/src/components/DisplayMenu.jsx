import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'; // Import CSS for styling

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-item">
        <img src="/food.png" alt="Menu Item 1" />
        <p>Menu Item 1 Description</p>
      </div>
      <div className="menu-item">
        <img src="/drink.png" alt="Menu Item 2" />
        <p>Menu Item 2 Description</p>
      </div>
      {/* Add more images and descriptions for other menu items */}
      <Link to="/" className="back-to-homepage">Back to homepage</Link>
    </div>
  );
}

export default Menu;
