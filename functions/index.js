'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrapp = undefined;

var _firebaseFunctions = require('firebase-functions');

var functions = _interopRequireWildcard(_firebaseFunctions);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var app = (0, _express2.default)();

// app.get('/index', (req, res) => {
//   require('./src/routes/index').default;
// });
app.use('/index', require('./src/routes/index'));
app.use('/aktiviteter', require('./src/routes/activities'));

var ssrapp = exports.ssrapp = functions.https.onRequest(app);