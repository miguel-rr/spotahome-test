import React from 'react';
import PropTypes from 'prop-types';

const ResultItem = ({ mainPhotoUrl, title, pricePerMonth, currencySymbol }) => (
  <div className="result-wrapper">
    <div className="result-item">
      <div className="img-wrapper">
        <img src={mainPhotoUrl} alt={title} />
      </div>
      <div className="info-wrapper">
        <span className="price">{pricePerMonth} {currencySymbol}</span>
        {title}
        <div className="action-buttons">
          <button className="more-info">More details</button>
          <button className="book-now">Book now!</button>
        </div>
      </div>
    </div>
  </div>
);

ResultItem.propTypes = {
  mainPhotoUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pricePerMonth: PropTypes.number.isRequired,
  currencySymbol: PropTypes.string.isRequired,
};

export default ResultItem;
