import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that fasilitaes the buying
          an selling of products or service over the internet. It service as a
          virtual marketplace where bussines and individuals can slowcase their
          products, intract with customers, and conduct transaction whitout the
          need for a physical presence. E-commerce Website have goined immense
          popularity due to their convinience, accesibility, and the global
          reach their offer.
        </p>
        <p>
          E-commerce Website typically display product or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has it own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
