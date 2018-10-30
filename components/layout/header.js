import React from 'react';
import Logo from './logo';
import Nav from './nav';

const Header = props => (
  <header className="header-wrapper">
    <div className="header">
      <Logo />
      <Nav {...props} />
    </div>
  </header>
);

export default Header;
