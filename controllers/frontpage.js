require('babel-register')({
  presets: ['react', 'es2015']
});
var FrontPage = require('../views/Frontpage.jsx');
var ReactDOMServer = require('react-dom/server');
var React = require('react');

module.exports = function(req, res) {
  var html = ReactDOMServer.renderToString(
    React.createElement(FrontPage)
  );
  res.send(html);
};
