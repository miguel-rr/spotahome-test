import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Header from '../components/layout/header';
import '../style.less';

const Layout = ({ router: { pathname }, children }) => (
  <div className="layout main">
    <Header pathname={pathname} />
    {children}
  </div>
);

Layout.propTypes = {
  router: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default withRouter(Layout);
