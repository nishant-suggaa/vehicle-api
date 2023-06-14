const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://capital-gecko-86.hasura.app',
      changeOrigin: true,
    })
  );
};
