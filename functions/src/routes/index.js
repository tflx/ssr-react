'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _server = require('react-dom/server');

var _App = require('../App');

var _App2 = _interopRequireDefault(_App);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();


var index = _fs2.default.readFileSync(__dirname + '/index.html', 'utf8');
/* GET home page. */
router.get('/', function (req, res, next) {
  var html = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));
  var finalhtml = index.replace('<!-- ::APP:: -->', html);
  // res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  res.send(finalhtml);
});

module.exports = router;