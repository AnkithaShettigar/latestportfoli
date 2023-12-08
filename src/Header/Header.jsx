import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="head">
      <div className="head-left">
        <span className="name">Ankitha</span>
      </div>
      <div className="head-right">
        <div>{/* <FontAwesomeIcon icon="fa-solid fa-brightness" /> */}</div>
      </div>
      <div>Hello</div>
    </div>
  );
};

export default Header;
