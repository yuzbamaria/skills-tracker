import React from "react";
import "./style.css"

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    
    <footer className="footer text-center d-flex justify-content-center align-items-center pb-2">
      <div className="container-fluid custom-fluid">
      <p className="custom-footer" style={{ color: "rgb(208, 209, 214)" }}><span id="current-year">©</span>
      {currentYear} Maria Yuzba & Saif Uddin. All rights reserved.
      </p>
      </div>
    </footer>
  );
}

export default Footer;