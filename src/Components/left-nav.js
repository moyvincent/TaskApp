import React from "react";
import "../Assests/left-nav.css";
import "./menu-item.js";
import Left_menu_items from "./menu-item.js";

const Left_nav = () => {
  const handleMenuItemClick = () => {
    // Menu Routing
  };
  return (
    <div className="left-nav">
      <Left_menu_items label="Dashboard" onClick={handleMenuItemClick} />
      <Left_menu_items label="Profile" onClick={handleMenuItemClick} />
      <Left_menu_items label="Jobs" onClick={handleMenuItemClick} />
      <Left_menu_items label="Wallet" onClick={handleMenuItemClick} />
    </div>
  );
};

export default Left_nav;
