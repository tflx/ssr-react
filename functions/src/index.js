'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// fetch('https://ssr-react.firebaseio.com/facts.json')
// .then(response => {
//   response.json().then(json => {
//     hydrate(<App facts={json} />, document.querySelector('#root'));
//   })
// });
(0, _reactDom.hydrate)(_react2.default.createElement(_App2.default, null), document.querySelector('#root'));