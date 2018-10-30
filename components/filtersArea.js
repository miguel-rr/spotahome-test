import React from 'react';
import PropTypes from 'prop-types';
import FilterContext, { orders, types } from '../lib/filterContext';

const FiltersArea = ({ getJson }) => (
  <FilterContext.Consumer>
    {({ order, type, changeOrder, changeType }) => (
      <div className="filters-wrapper">
        <p className="section-title">Filters</p>
        <div className="filter property-type">
          <label htmlFor="type">Property type:</label>
          <select name="type" onChange={changeType} value={type} >
            {types.map(t => (
              <option key={t} value={t}>
                {`${t.slice(0, 1).toUpperCase()}${t.slice(1)}`}
              </option>
            ))}
          </select>
        </div>
        <div className="filter sort">
          <label htmlFor="sort">Sort by price:</label>
          <select name="sort" onChange={changeOrder} value={order}>
            {orders.map(o => (
              <option key={o} value={o}>
                {`${o.slice(0, 1).toUpperCase()}${o.slice(1)}`}
              </option>
            ))}
          </select>
        </div>
        <div className="json">
          <button className="download" onClick={getJson}>Download JSON</button>
        </div>
      </div>
    )}
  </FilterContext.Consumer>
);

FiltersArea.propTypes = {
  getJson: PropTypes.func.isRequired,
};

export default FiltersArea;
