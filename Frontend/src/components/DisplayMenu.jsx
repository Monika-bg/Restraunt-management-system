import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'; // Import CSS for styling

function Menu() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">PALATE PLESEARS</Link>
        <div className="navbar-links">
          
          <Link to="/" className="back-to-homepage">Home</Link>
          {/* Add more navigation links as needed */}
        </div>
      </nav>
      <div className="menu-items">
        <div className="menu-item">
          <img src="/food.png" alt="Menu Item 1" />
          
        </div>
        <div className="menu-item1">
          <img src="/drink.png" alt="Menu Item 2" />
         
        </div>
        {/* Add more images and descriptions for other menu items */}
      </div>
      
    </div>
  );
}

export default Menu;
