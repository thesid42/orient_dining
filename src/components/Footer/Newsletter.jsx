import React from "react";
import SubHeading from "../SubHeading/SubHeading";

import "./Newsletter.css";

const Newsletter = () => (
  <div className="app_newsLetter">
    <div className="app_newsLetter-heading">
      <SubHeading title="NewsLetter" />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app_newsLetter-input flex__center">
      <input type="email" placeholder="Enter Your email" />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
