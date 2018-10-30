const fetch = require('isomorphic-unfetch');

const cache = new Map();

const getProperties = async (city = 'madrid', type = 'all') => {
  const key = `${city}|${type}`;
  if (cache.has(key)) {
    return cache.get(key);
  }
  const dataUrl = `https://www.spotahome.com/api/public/listings/search/markers/${city}${
    type !== 'all' ? `?type[]=${type}` : ''
  }`;
  const data = await fetch(dataUrl).then(res => res.json());
  if (data && data.ok) {
    const ids = data.data.slice(0, 30).map(p => p.id);
    const infoUrl = `https://www.spotahome.com/api/public/listings/search/homecards_ids?ids[]=${ids.join('&ids[]=')}`;
    const response = await fetch(infoUrl).then(res => res.json());
    cache.set(key, response);
    return response;
  }
  return null;
};

module.exports = getProperties;
