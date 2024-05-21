import React from "react";
import "./NewLetter.css";

const NewLetter = () => {
  return (
    <div className="newLetter">
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subcribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewLetter;
