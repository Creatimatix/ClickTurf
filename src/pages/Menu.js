import React from "react";
import { groundsData } from "../helpers/GroundList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Grounds Available</h1>
      <div className="menuList">
        {groundsData.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.amount}
              Availability={menuItem.availability}
              Location={menuItem.location}
              Rating={menuItem.rating}
              type={menuItem.type}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
