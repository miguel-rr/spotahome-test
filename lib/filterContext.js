import React from 'react';

export const orders = ['ascending', 'desceding'];
export const types = ['all', 'apartments', 'rooms', 'studios', 'residences'];

const FilterContext = React.createContext({
  order: 'ascending',
  type: 'all',
  changeOrder: () => {},
  changeType: () => {},
});

export default FilterContext;
