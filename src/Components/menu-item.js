import React from "react";
import "../Assests/left-nav.css";

const Left_menu_items = (props) => {
  return (
    <a className="btn btn-outline-success" onClick={props.onClick}>
      {props.label}
    </a>
  );
};

export default Left_menu_items;
