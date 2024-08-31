import React from "react";

function MenuItem({ image, name, price, type, Location, Rating, Availability }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {type} <br/>
       {Location} <br/>
     {/* <p class="rating">{'★'.repeat({Rating})}{'☆'.repeat(5 - {Rating})}</p> */}
      ${price} </p>
    </div>
  );
}

export default MenuItem;
