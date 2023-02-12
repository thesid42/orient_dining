import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app_menuItem">
    <div className="app_menuItem-head">
      <div className="app_menuItem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>

      <div className="app_menuItem-dash" />

      <div className="app_menuItem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
    <div className="app_menuItem-sub">
      <p className="p__opensans" style={{ color: "#AAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
