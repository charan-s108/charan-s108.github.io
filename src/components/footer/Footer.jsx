import React from 'react';
import "./footer.css";

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <footer className="footer">
      <div className="footer__container container">
        <span className="footer__copy">&copy; {getYear()} Charan. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer