// Thank CRA for this wonderful issue : https://stackoverflow.com/questions/70374005/invalid-options-object-dev-server-has-been-initialized-using-an-options-object
// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     createProxyMiddleware('/api', {
//       target: 'http://localhost:3001',
//       changeOrigin: true,
//     })
//   );
// };