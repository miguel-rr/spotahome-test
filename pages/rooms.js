import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import MainLayout from '../layouts/mainLayout';
import FiltersArea from '../components/filtersArea';
import ResultsArea from '../components/resultsArea';
import FilterContext from '../lib/filterContext';
import sortByPrice from '../lib/sortyByPrice';

const getProperties = async (city = 'madrid', type = 'all') => {
  const url = `http://localhost:3000/getProperties/${city}/${type}`;
  const response = await fetch(url).then(res => res.json());
  if (response) {
    const { data: { homecards: properties } } = response;
    return properties;
  }
  return null;
};

class Rooms extends React.Component {
  static async getInitialProps({ query: { city } }) {
    const properties = await getProperties(city);
    if (properties) {
      return { city, properties };
    }
    return {};
  }

  constructor(props) {
    super(props);

    this.changeOrder = this.changeOrder.bind(this);
    this.changeType = this.changeType.bind(this);
    this.getJson = this.getJson.bind(this);

    const { city, properties } = this.props;
    sortByPrice(properties);

    this.state = {
      properties,
      city: city || 'madrid',
      order: 'ascending',
      type: 'all',
      changeOrder: this.changeOrder,
      changeType: this.changeType,
    };
  }

  getJson() {
    const { properties, city, type, order } = this.state;
    const json = JSON.stringify(properties);
    const dataString = `data:text/json;charset=utf-8,${encodeURIComponent(json)}`;
    const anchor = document.createElement('a');
    anchor.setAttribute('href', dataString);
    anchor.setAttribute('download', `${city}_${type}_${order}.json`);
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }

  changeOrder({ target: { value } }) {
    const { properties } = this.state;
    sortByPrice(properties, value === 'ascending');
    this.setState({ properties, order: value });
  }

  changeType({ target: { value } }) {
    const { city, order } = this.state;
    getProperties(city, value).then((properties) => {
      sortByPrice(properties, order === 'ascending');
      this.setState({ properties, type: value });
    });
  }

  render() {
    const { properties } = this.state;
    return (
      <MainLayout>
        <FilterContext.Provider value={this.state}>
          <div className="content">
            <FiltersArea getJson={this.getJson} />
            <ResultsArea results={properties} />
          </div>
        </FilterContext.Provider>
      </MainLayout>
    );
  }
}

Rooms.propTypes = {
  city: PropTypes.string,
  properties: PropTypes.arrayOf(PropTypes.shape({})),
};

Rooms.defaultProps = {
  city: 'madrid',
  properties: [],
};

export default Rooms;
