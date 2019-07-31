import React from "react";

const Cart = ({ icon, title, titleImg, info, alt }) => (
  <div className="cart">
    <div className="icon">
      <img
        className="img-thumbnail"
        src={icon}
        alt={alt}
        title={titleImg}
        width="100"
        height="100"
      />
    </div>
    <h4>{title}</h4>
    <p>{info}</p>
  </div>
);

export default Cart;
