const next = require('next');
const express = require('express');
const router = require('./lib/router.js');
const getProperties = require('./lib/getProperties');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = router.getRequestHandler(app);
app.prepare().then(() => {
  express()
    .use('/getProperties/:city/:type', async ({ params: { city, type } }, res) => {
      const properties = await getProperties(city, type);
      res.json(properties);
    })
    .use(handler)
    .listen(3000);
});
