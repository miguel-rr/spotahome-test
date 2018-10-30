const routes = require('next-routes')();
const routeList = require('./routes.json');

routeList.forEach((route) => {
  routes.add(...route);
});

module.exports = routes;
