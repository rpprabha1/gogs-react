import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
      <ul>
      <li>rpprabha1@gmail.com</li>
      <li>https://github.com/rpprabha1/gogs-react</li>
      </ul>
    </footer>
  );
};

export default Footer;