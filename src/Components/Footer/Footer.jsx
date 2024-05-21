import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo-1.png";
import instagram_icon from "../Assets/instagram_icon.png";
import whattsapp_icon from "../Assets/whatsapp_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>FASSION</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-sosial-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whattsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
