import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ src, title }) => (
  <div className="logo-wrapper">
    <h1>
      <a href="/" title={title}>
        <img className="logo" src={src} alt={title} />
      </a>
    </h1>
  </div>
);

Logo.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

Logo.defaultProps = {
  src: '/static/img/logo.png',
  title: 'Spotaroom',
};

export default Logo;
