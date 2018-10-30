import React from 'react';
import PropTypes from 'prop-types';
import ResultItem from './results/resultItem';

const getItem = data => <ResultItem key={data.id} {...data} />;

const ResultsArea = ({ results }) => (
  <div className="results-wrapper">
    <div className="results-list">
      {results.map(p => getItem(p))}
    </div>
  </div>
);

ResultsArea.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
};

ResultsArea.defaultProps = {
  results: [],
};

export default ResultsArea;
