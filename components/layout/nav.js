import React from 'react';
import PropTypes from 'prop-types';

const items = [
  {
    title: 'The company',
    url: '/company',
  },
  {
    title: 'How we work',
    url: '/about',
  },
  {
    title: 'Contact us',
    url: '/contact',
  },
];

const Nav = ({ pathname }) => (
  <div className="nav-wrapper">
    <nav className="nav">
      <ul>
        {items.map(({ title, url }) => (
          <li key={url}>
            <a className={pathname === url ? 'active' : null} href={url}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

Nav.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Nav;
