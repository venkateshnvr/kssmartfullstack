// const proxy = require('http-proxy-middleware');
// module.exports = function(app) {
//     app.use(proxy('/auth/google', 
//         { target: 'http://127.0.0.1:4001/' }
//     ));
// }
// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     createProxyMiddleware({
//       target: 'http://192.168.1.15:4001',
//       changeOrigin: true,
//     })
//   );
// };